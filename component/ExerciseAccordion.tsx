import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/component/UI/accordion';
import { Check, Cross } from 'lucide-react';
import { ReactNode, useState } from 'react';
import { Button } from './UI/button';
import { cn } from '@/util/utils';

export type Exercise = {
  title: ReactNode;
  content: ReactNode;
};

type ExerciseAccordionProps = {
  exercises: Exercise[];
};

type ExoState = 'failed' | 'ok' | 'todo';

export const ExerciseAccordion = ({ exercises }: ExerciseAccordionProps) => {
  const [exoStates, setExoStates] = useState<ExoState[]>(
    Array(exercises.length).fill('todo')
  );

  return (
    <Accordion type="single" collapsible className="w-full">
      {exercises.map((exercise, i) => {
        return (
          <AccordionItem value={'item-' + i}>
            <AccordionTrigger>
              <div className="text-sm no-underline hover:no-underline flex justify-start gap-2 items-center">
                <div
                  className={cn(
                    'text-xs  h-6 w-6 flex justify-center items-center rounded-full',
                    exoStates[i] === 'todo'
                      ? 'bg-gray-200'
                      : exoStates[i] === 'failed'
                      ? 'bg-red-300'
                      : 'bg-green-300'
                  )}
                >
                  <span>{i + 1}</span>
                </div>
                <span>{exercise.title}</span>
                {exoStates[i] === 'ok' && (
                  <Check size={16} className="text-green-500" />
                )}
                {exoStates[i] === 'failed' && (
                  <Cross size={16} className="text-red-500" />
                )}
                {exoStates[i] === 'todo' && (
                  <span className="text-gray-400 font-thin">ToDo</span>
                )}
              </div>
            </AccordionTrigger>

            <AccordionContent>
              {exercise.content}
              <div className="flex justify-center gap-4">
                <Button variant={'outline'}>Failed</Button>
                <Button
                  onClick={() => {
                    const newExoStates = exoStates.map((exoState, exoIndex) =>
                      exoIndex === i ? 'ok' : exoState
                    );
                    setExoStates(newExoStates);
                  }}
                >
                  Done<span className="ml-2">🎉</span>
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
