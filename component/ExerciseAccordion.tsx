import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/component/UI/accordion';
import { Check, CircleX } from 'lucide-react';
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
            <AccordionTrigger className="no-decoration hover:bg-gray-50">
              <div className="text-sm flex justify-start gap-2 items-center">
                <div
                  className={cn(
                    'text-xs h-6 w-6 flex justify-center items-center rounded-full text-center leading-none',
                    exoStates[i] === 'todo'
                      ? 'bg-gray-200'
                      : exoStates[i] === 'failed'
                      ? 'bg-red-300'
                      : 'bg-green-300'
                  )}
                >
                  <span style={{ transform: 'translateX(1px)' }}>{i + 1}</span>
                </div>
                <span>{exercise.title}</span>
                {exoStates[i] === 'ok' && (
                  <Check size={16} className="text-green-500" />
                )}
                {exoStates[i] === 'failed' && (
                  <CircleX size={16} className="text-red-500" />
                )}
                {exoStates[i] === 'todo' && (
                  <span className="text-gray-400 font-thin">ToDo</span>
                )}
              </div>
            </AccordionTrigger>

            <AccordionContent>
              {exercise.content}
              <div className="flex justify-center gap-4">
                <Button
                  variant={'outline'}
                  onClick={() => {
                    const newExoStates = exoStates.map((exoState, exoIndex) =>
                      exoIndex === i ? 'failed' : exoState
                    );
                    setExoStates(newExoStates);
                  }}
                >
                  Failed
                </Button>
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
