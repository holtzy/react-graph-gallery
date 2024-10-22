import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/component/UI/tabs';
import { ReactNode } from 'react';
import { CodeSandbox } from './CodeSandbox';
import { Badge } from './UI/badge';

export type Exercise = {
  whyItMatters: ReactNode;
  toDo: ReactNode;
  practiceSandbox: string;
  solutionSandbox: string;
};

type ExerciseDoubleSandboxProps = {
  exercise: Exercise;
};

export const ExerciseDoubleSandbox = ({
  exercise,
}: ExerciseDoubleSandboxProps) => {
  return (
    <div>
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

      <Tabs defaultValue="practice" className="">
        <center>
          <TabsList>
            <TabsTrigger value="practice">Practice</TabsTrigger>
            <TabsTrigger value="solution">Solution</TabsTrigger>
          </TabsList>
        </center>
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
    </div>
  );
};
