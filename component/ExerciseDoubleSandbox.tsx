import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/component/UI/tabs';
import { ReactNode, useEffect, useState } from 'react';
import { CodeSandbox } from './CodeSandbox';
import { Badge } from './UI/badge';
import { Sidenote } from './SideNote';
import { Button } from './UI/button';

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
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsFullScreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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
          <div className="absolute right-0">
            <Button
              size={'sm'}
              variant={'outline'}
              onClick={() => setIsFullScreen(true)}
            >
              Show full screen
            </Button>
          </div>
        </div>

        <TabsContent value="practice">
          <div
            className={
              isFullScreen
                ? 'fixed h-screen inset-0 flex justify-center items-center'
                : 'my-4'
            }
          >
            {isFullScreen && (
              <div className="absolute inset-0 w-full h-full bg-white/80" />
            )}
            <div className={isFullScreen ? 'relative w-4/5 h-4/5' : ''}>
              <CodeSandbox
                vizName={exercise.practiceSandbox}
                height={isFullScreen ? '100%' : '500px'}
              />
              {isFullScreen && (
                <div className="w-full mt-2 flex justify-center">
                  <Button
                    onClick={() => setIsFullScreen(false)}
                    variant={'destructive'}
                  >
                    Leave Fullscreen mode
                  </Button>
                </div>
              )}
            </div>
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
