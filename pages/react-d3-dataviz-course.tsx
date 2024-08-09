import React from 'react';
import { Layout } from '../component/Layout';
import TitleAndDescription from '../component/TitleAndDescription';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/component/UI/accordion';
import { Lesson, lessonList } from '@/util/lessonList';
import { Badge } from '@/component/UI/badge';
import { moduleList } from '@/util/moduleList';
import { LessonBadge } from '@/component/LessonBadge';
import { buttonVariants } from '@/component/UI/buttonFromShadcnUI';

const graphDescription = (
  <>
    <p>
      Mastering chart creation with React and D3 involves understanding a{' '}
      <b>multitude</b> of concepts. It took me 5 years to get them.
    </p>
    <p>
      The gallery offers <Link href="/all">hundreds</Link> of examples and
      several ready-to-use components to help you get started.
    </p>
    <p>
      However, to truly grasp the <b>big picture</b>, guidance is essential. It
      took me thousands of hours to achieve this understanding, and I'm here to
      guide you!
    </p>
  </>
);

export default function Articles() {
  const allCards = moduleList.map((module, i) => {
    const allLessons = lessonList.filter(
      (lesson) => lesson.moduleId === module.id
    );
    return (
      <div
        key={module.id}
        className="border border-gray-200 p-8 rounded-md mt-20 bg-slate-50 hover:border-black"
      >
        <div>
          <Badge variant={'outline'}>{'Module ' + i}</Badge>
          <h2 className="mt-2">{module.name}</h2>
        </div>
        {module.description}
        <LessonAccordion lessonList={allLessons} />
      </div>
    );
  });

  return (
    <Layout
      title="Dataviz with react online course"
      seoDescription="An online course explaining how to create any charts using react and d3"
    >
      <TitleAndDescription
        title="Dataviz with react course"
        description={graphDescription}
      />

      <div className="w-full grid grid-cols-2 gap-4">
        <div className="col-span-1">
          {allCards.filter((c, i) => i % 2 === 0)}
        </div>
        <div className="col-span-1 pt-80">
          {allCards.filter((c, i) => i % 2 === 1)}
        </div>
      </div>

      <div className="mt-20" />
    </Layout>
  );
}

type LessonAccordionProps = {
  lessonList: Lesson[];
};
const LessonAccordion = ({ lessonList }: LessonAccordionProps) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {lessonList.map((lesson, i) => {
        return (
          <AccordionItem value={'item-' + i} key={i}>
            <AccordionTrigger className="text-sm no-underline hover:no-underline">
              <div className="flex w-full justify-between items-center mr-1 ">
                <span className="hover:underline text-left">{lesson.name}</span>
                <LessonBadge lessonStatus={lesson.status} />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {lesson.description}
              {
                <Link
                  href={lesson.link}
                  className={
                    buttonVariants({ variant: 'default', size: 'sm' }) +
                    ' ' +
                    'no-underline text-black'
                  }
                >
                  Read
                </Link>
              }
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
