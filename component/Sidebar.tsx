'use client';

import {
  TocItem,
  bonusBasicRTableOfContent,
  bonusTipsAndTricksTableOfContent,
  courseTableOfContent,
} from '@/util/course-table-of-content';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/component/UI/accordion';
import { SheetClose, SheetContent, SheetTitle } from '@/component/UI/sheet';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/util/utils';
import {
  FreeBadge,
  NewBadge,
  ProjectBadge,
  WipBadge,
} from '@/component/Badges';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { useEffect, useState } from 'react';
import { CourseLogo } from './CourseLogo';
import { Spacing } from './Spacing';
import { EnrollButton } from './EnrollButton';

type ExoState = 'failed' | 'ok' | 'todo';

export const Sidebar = () => {
  // The current module can be retrieved from the URL
  const currentChapterPath = usePathname();
  const moduleSegment = currentChapterPath
    ? currentChapterPath
        .split('/')
        .find((segment) => segment.startsWith('module'))
    : null;

  const currentModuleNumber = moduleSegment
    ? Number(moduleSegment.replace('module', '')) - 1 // In the URL module is user facing thus starting at 1...
    : undefined; // By default, all should be closed

  return (
    <SheetContent
      side={'left'}
      style={{ overflow: 'scroll' }}
      className="text-sm px-5"
    >
      <SheetTitle className="border-none">
        <SheetClose asChild>
          <Link href="/" className="no-underline">
            <CourseLogo className="text-sm font-normal tracking-wide" />
          </Link>
        </SheetClose>
      </SheetTitle>

      <Spacing />

      <p>
        <span className="simple-highlight-teal text-base">
          &nbsp;Main Course&nbsp;
        </span>
      </p>
      <p className="mb-2 max-w-md font-bricolage">
        The main course includes 6 modules, each packed with well-paced,
        interactive lessons — all designed to help you master ggplot2 💎
      </p>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue={'module' + currentModuleNumber}
      >
        {courseTableOfContent.map((module, i) => {
          return (
            <ModuleAccordion
              key={i}
              moduleNumber={i + 1}
              name={module.name}
              toc={module.toc}
            />
          );
        })}
      </Accordion>
      {/* not sure what the conclusion section is about so removing it for now
      <SheetPrimitive.Close asChild>
        <Link href="/conclusion">
          <Badge
            variant="outline"
            className="rounded-sm border-set2-blue font-light mt-4 hover:bg-slate-100"
          >
            <span className="text-transparent bg-gradient-to-l from-set2-red to-set2-blue bg-clip-text tracking-wider font-bold">
              Conclusion
            </span>
          </Badge>
        </Link>
      </SheetPrimitive.Close>
      */}
      <br />
      <p>
        <span className="simple-highlight-gold text-base">
          &nbsp;Bonus Materials&nbsp;
        </span>
      </p>
      <p className="mb-2 max-w-md font-bricolage">
        Whether you're just starting with R or already done with our main course
        — the bonus section gives you helpful extra goodies 🎁
      </p>
      <Accordion type="single" collapsible className="w-full">
        <ModuleAccordion
          moduleNumber={'A'}
          name={'R Fundamentals'}
          toc={bonusBasicRTableOfContent}
        />
        <ModuleAccordion
          moduleNumber={'B'}
          name={'Special Topics'}
          toc={bonusTipsAndTricksTableOfContent}
        />
      </Accordion>
      <div className="mt-20">
        <EnrollButton text="Enroll Now" />
      </div>
    </SheetContent>
  );
};

type ModuleAccordionProps = {
  name: string;
  toc: TocItem[];
  moduleNumber: number | string;
};

const ModuleAccordion = ({ name, toc, moduleNumber }: ModuleAccordionProps) => {
  return (
    <AccordionItem value={'module' + moduleNumber}>
      <AccordionTrigger className="text-lg flex justify-start gap-3 items-center">
        <div className="h-6 w-6 text-white text-[12px] font-normal font-sans leading-none bg-black rounded-full flex items-center justify-center">
          {name !== 'Tips & Tricks 🎁' && name !== 'Foundational concepts' && (
            <span className="pr-[1px] font-bold">{moduleNumber}</span>
          )}
        </div>

        <span className="no-underline font-normal text-lg leading-5 tracking-wide">
          {name}
        </span>
      </AccordionTrigger>
      <AccordionContent>
        <div className="pl-10">
          {toc.map((tocItem, i) => {
            return <UiTocItem tocItem={tocItem} key={i} />;
          })}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

type UiTocItemProps = {
  tocItem: TocItem;
};

const UiTocItem = ({ tocItem }: UiTocItemProps) => {
  const [exoMade, setExoMade] = useState<null | ExoState[]>(null);

  const targetURL = tocItem.url;

  // Weird, I need to update the state after component mounts otherwiser localStorage is not available...
  useEffect(() => {
    const storedStates = localStorage.getItem(targetURL) || '[]';
    setExoMade(JSON.parse(storedStates));
  }, []);

  const exoMadeNumber = exoMade?.filter((exo) => exo === 'ok').length ?? 0;

  const exoProgression =
    tocItem && tocItem.exoNumber
      ? (exoMadeNumber / tocItem.exoNumber) * 100
      : 'na';

  const isDevMode = process.env.NODE_ENV === 'development';

  // Special case: do not show conclusion like another lesson
  if (tocItem.name === 'Conclusion') {
    return null;
  }

  return (
    <SheetPrimitive.Close asChild>
      <Link
        className={cn(
          'no-decoration w-full',
          tocItem.isAvailable || isDevMode ? ' ' : 'pointer-events-none'
        )}
        href={targetURL}
      >
        <div
          className={cn(
            'flex items-center mt-1 mb-3 pb-2 underline-animation relative space-x-2',
            tocItem.isAvailable ? 'opacity-100' : 'opacity-40'
          )}
        >
          {exoProgression !== 'na' && (
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger>
                  <div className="h-4 flex items-center">
                    <Progress value={exoProgression} className="h-1 w-8" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <span className="text-sm font-normal">
                    {exoMadeNumber +
                      ' / ' +
                      tocItem.exoNumber +
                      ' exercises resolved'}
                  </span>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}

          {exoProgression === 'na' && tocItem.name !== 'Project' && (
            <span className="text-xs font-pally text-blue-300 -rotate-6">
              quizz
            </span>
          )}

          {tocItem.name === 'Project' ? (
            <ProjectBadge />
          ) : (
            <span className="text-md font-normal">{tocItem.name}</span>
          )}

          {tocItem.isFree && (
            <div>
              <FreeBadge />
            </div>
          )}
          {tocItem.isNew && (
            <div>
              <NewBadge />
            </div>
          )}
          {!tocItem.isAvailable && (
            <div>
              <WipBadge />
            </div>
          )}
        </div>
      </Link>
    </SheetPrimitive.Close>
  );
};
