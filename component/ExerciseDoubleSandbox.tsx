import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/component/UI/tabs';
import { ReactNode } from 'react';
import { CodeSandbox } from './CodeSandbox';
import { Badge } from './UI/badge';
import { Button, buttonVariants } from './UI/button';
import Link from 'next/link';
import { cn } from '@/util/utils';

export type Exercise = {
  whyItMatters: ReactNode;
  toDo: ReactNode;
  practiceSandbox: string;
  solutionSandbox: string;
  fileToOpen?: string;
};

type ExerciseDoubleSandboxProps = {
  exercise: Exercise;
};

export const ExerciseDoubleSandbox = ({
  exercise,
}: ExerciseDoubleSandboxProps) => {
  const practiceSandbox = (
    <CodeSandbox
      vizName={exercise.practiceSandbox}
      height={'500px'}
      fileToOpen={exercise.fileToOpen}
    />
  );

  const solutionSandbox = (
    <CodeSandbox
      vizName={exercise.solutionSandbox}
      height={'500px'}
      fileToOpen={exercise.fileToOpen}
    />
  );

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

      <Tabs defaultValue="practice" className="relative">
        <div className="flex justify-center items-center">
          <TabsList>
            <TabsTrigger value="practice">Practice</TabsTrigger>
            <TabsTrigger value="solution">Solution</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="practice">
          <div className="my-4">{practiceSandbox}</div>
          <div className="absolute right-0">
            <Link
              className={buttonVariants({ size: 'sm', variant: 'destructive' })}
              href={'/sandbox?vizName=' + exercise.practiceSandbox}
              target="_blank"
            >
              Show full screen
            </Link>
          </div>
        </TabsContent>
        <TabsContent value="solution">
          <div className="my-4">{solutionSandbox}</div>
          <div className="absolute right-0">
            <Link
              className={cn(
                buttonVariants({ size: 'sm', variant: 'destructive' }),
                'no-underline'
              )}
              href={'/sandbox?vizName=' + exercise.solutionSandbox}
              target="_blank"
            >
              Show full screen
            </Link>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
