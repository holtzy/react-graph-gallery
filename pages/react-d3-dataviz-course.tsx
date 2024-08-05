import React from 'react';
import { Layout } from '../component/Layout';
import TitleAndDescription from '../component/TitleAndDescription';
import Link from 'next/link';
import { BlogPostItem } from '../component/BlogPostItem';
import { SubscribeForm } from 'component/SubscribeForm';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/component/UI/accordion';
import { Lesson, lessonList } from '@/util/lessonList';
import { Badge } from '@/component/UI/badge';
import { moduleList } from '@/util/moduleList';

const graphDescription = (
  <>
    <p>
      Mastering chart creation with React and D3 involves understanding a{' '}
      <b>multitude</b> of concepts.
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
  return (
    <Layout
      title="Dataviz with react online course"
      seoDescription="An online course explaining how to create any charts using react and d3"
    >
      <TitleAndDescription
        title="Dataviz with react course"
        description={graphDescription}
      />

      <div>
        {moduleList.map((module, i) => {
          const allLessons = lessonList.filter(
            (lesson) => lesson.moduleId === module.id
          );
          return (
            <div key={module.id} className="mb-24">
              <div>
                <Badge variant={'outline'}>{'Module ' + i}</Badge>
                <h2 className="mt-2">{module.name}</h2>
              </div>
              {module.description}
              <LessonAccordion lessonList={allLessons} />
            </div>
          );
        })}
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
            <AccordionTrigger className="text-sm">
              <div className="flex w-full justify-between mr-10">
                {lesson.name}
                {!lesson.isAvailable && (
                  <Badge variant={'destructive'} className="opacity-30">
                    WIP
                  </Badge>
                )}
              </div>
            </AccordionTrigger>
            <AccordionContent>{lesson.description}</AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
