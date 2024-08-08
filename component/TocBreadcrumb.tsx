import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/component/UI/breadcrumb';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from './UI/dropdown-menu';
import { Button, buttonVariants } from '@/component/UI/button';
import { moduleList } from '@/util/moduleList';
import { Lesson, lessonList } from '@/util/lessonList';
import { Circle } from 'lucide-react';
import { LessonBadge } from './LessonBadge';
import Link from 'next/link';

type TocBreadcrumbProps = {
  selectedLesson: Lesson;
};

export const TocBreadcrumb = ({ selectedLesson }: TocBreadcrumbProps) => {
  const selectedModuleId = selectedLesson.moduleId;
  const selectedModule = moduleList.find((m) => m.id === selectedModuleId);

  if (!selectedModule) {
    return null;
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* ////////////// Most left = back to course home page */}
        <BreadcrumbItem>
          <BreadcrumbLink
            href="/react-d3-dataviz-course"
            className={
              buttonVariants({ variant: 'outline', size: 'sm' }) +
              ' ' +
              'no-underline text-xs border-gray-200 h-8 text-gray-500'
            }
          >
            Course
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        {/* ////////////// Middle = list of modules */}
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size={'sm'}
                className="text-xs border-gray-200 h-8"
              >
                {selectedModule.name}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {moduleList.map((module, i) => {
                return (
                  <DropdownMenuSub key={i}>
                    <DropdownMenuSubTrigger>
                      <Circle
                        fill="black"
                        size={8}
                        className="mr-2"
                        opacity={module.id === selectedModuleId ? 1 : 0}
                      />
                      <span>{module.name}</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        {lessonList
                          .filter((lesson) => lesson.moduleId === module.id)
                          .map((lesson, i) => {
                            return (
                              <Link
                                className="no-underline text-black"
                                href={lesson.link}
                              >
                                <DropdownMenuItem key={i}>
                                  <Circle
                                    fill="black"
                                    size={8}
                                    className="mr-2"
                                    opacity={
                                      lesson.name === selectedLesson.name
                                        ? 1
                                        : 0
                                    }
                                  />
                                  <span>{lesson.name}</span>
                                </DropdownMenuItem>
                              </Link>
                            );
                          })}
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        {/* ////////////// Right = list of lessons */}
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size={'sm'}
                className="text-xs border-gray-200 h-8"
              >
                {selectedLesson.name}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {lessonList
                .filter((lesson) => lesson.moduleId === selectedModuleId)
                .map((lesson, i) => {
                  return (
                    <Link
                      className="no-underline text-black"
                      href={lesson.link}
                    >
                      <DropdownMenuItem
                        key={i}
                        className="flex justify-between gap-4"
                      >
                        <div className="flex items-center">
                          <Circle
                            fill="black"
                            size={8}
                            className="mr-2"
                            opacity={
                              lesson.name === selectedLesson.name ? 1 : 0
                            }
                          />
                          {lesson.name}
                        </div>
                        <LessonBadge lessonStatus={lesson.status} />
                      </DropdownMenuItem>
                    </Link>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
