import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/component/UI/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/component/UI/tabs';
import { Eye } from 'lucide-react';
import { ReactNode } from 'react';
import { CodeSandbox } from './CodeSandbox';
import { Badge } from './UI/badge';

export type Exercise = {
  title: ReactNode;
  whyItMatters: ReactNode;
  toDo: ReactNode;
  practiceSandbox: string;
  solutionSandbox: string;
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
                <Eye />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <Badge>To Do</Badge>
                  <div className="mt-4">{exercise.toDo}</div>
                </div>

                <div>
                  <Badge>Why it matters</Badge>
                  <div className="mt-4 pl-4">{exercise.whyItMatters}</div>
                </div>
              </div>
              <Tabs defaultValue="practice" className="w-full">
                <TabsList>
                  <TabsTrigger value="practice">Practice</TabsTrigger>
                  <TabsTrigger value="solution">Solution</TabsTrigger>
                </TabsList>
                <TabsContent value="practice">
                  <div className="full-bleed my-4 max-w-7xl mx-auto">
                    <CodeSandbox vizName={exercise.practiceSandbox} />
                  </div>
                </TabsContent>
                <TabsContent value="solution">
                  <div className="full-bleed my-4 max-w-7xl mx-auto">
                    <CodeSandbox vizName={exercise.solutionSandbox} />
                  </div>
                </TabsContent>
              </Tabs>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
