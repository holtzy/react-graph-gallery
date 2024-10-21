import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/component/UI/accordion';
import { Check } from 'lucide-react';
import { ReactNode } from 'react';

export type Exercise = {
  title: ReactNode;
  content: ReactNode;
};

type ExerciseAccordionProps = {
  exercises: Exercise[];
};

export const ExerciseAccordion = ({ exercises }: ExerciseAccordionProps) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {exercises.map((exercise, i) => {
        return (
          <AccordionItem value={'item-' + i}>
            <AccordionTrigger>
              <div className="text-sm no-underline hover:no-underline flex justify-start gap-2 items-center">
                <div className="text-xs bg-gray-200 h-6 w-6 flex justify-center items-center rounded-full">
                  <span>{i + 1}</span>
                </div>
                <span>{exercise.title}</span>
                <Check size={16} />
              </div>
            </AccordionTrigger>

            <AccordionContent>{exercise.content}</AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
