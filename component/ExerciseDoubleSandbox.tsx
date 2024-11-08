import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/component/UI/tabs';
import { ReactNode, useEffect, useState } from 'react';
import { CodeSandbox } from './CodeSandbox';
import { Badge } from './UI/badge';
import { Button } from './UI/button';

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
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsFullScreen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const practiceSandbox = (
    <CodeSandbox
      vizName={exercise.practiceSandbox}
      height={isFullScreen ? '100%' : '500px'}
      fileToOpen={exercise.fileToOpen}
    />
  );

  const solutionSandbox = (
    <CodeSandbox
      vizName={exercise.solutionSandbox}
      height={isFullScreen ? '100%' : '500px'}
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
          {isFullScreen ? (
            <FullScreenSandbox
              setIsFullScreen={setIsFullScreen}
              sandbox={practiceSandbox}
            />
          ) : (
            <div className="my-4">{practiceSandbox}</div>
          )}
        </TabsContent>
        <TabsContent value="solution">
          {isFullScreen ? (
            <FullScreenSandbox
              setIsFullScreen={setIsFullScreen}
              sandbox={solutionSandbox}
            />
          ) : (
            <div className="my-4">{solutionSandbox}</div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

type FullScreenSandboxProps = {
  sandbox: JSX.Element;
  setIsFullScreen: (y: boolean) => void;
};

const FullScreenSandbox = ({
  sandbox,
  setIsFullScreen,
}: FullScreenSandboxProps) => {
  return (
    <div className="fixed h-screen inset-0 flex justify-center items-center">
      <div className="absolute inset-0 w-full h-full bg-white/80" />
      <div className="relative w-11/12 h-4/5">
        {sandbox}
        <div className="w-full mt-2 flex justify-center items-center gap-2">
          <div className="relative">
            <Button
              onClick={() => setIsFullScreen(false)}
              variant={'destructive'}
            >
              Leave Fullscreen mode
            </Button>
            <span className="absolute w-96 ml-2 text-gray-500 text-xs mt-3">
              You can also press <code>Esc</code>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
