import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '../../../component/ui/table';

const previousURL = '/course/introduction/introduction-to-react';
const currentURL = '/course/introduction/js-dataviz-libraries';
const nextURL = '/course/introduction/introduction-to-d3';
const seoDescription = '';

export default function Home() {
  const currentLesson = lessonList.find((l) => l.link === currentURL);

  if (!currentLesson) {
    return null;
  }

  return (
    <LayoutCourse
      title={currentLesson.name}
      seoDescription={seoDescription}
      nextTocItem={lessonList.find((l) => l.link === nextURL)}
      previousTocItem={lessonList.find((l) => l.link === previousURL)}
    >
      <TitleAndDescription
        title={currentLesson.name}
        lessonStatus={currentLesson.status}
        readTime={currentLesson.readTime}
        selectedLesson={currentLesson}
        description={
          <>
            <p>
              When you want to create a chart, using a js library is usually the
              first thing that comes to your mind.
            </p>
            <p>
              While it is definitely a good idea to start with, it often ends
              with making your life complicated. Let's see why.
            </p>
          </>
        }
      />

      <h2>In a hurry</h2>
      <p>Explain the usual story</p>
      <p>
        You start with a lib with NIVO. In a few minutes you have your chart.
        Great!
      </p>

      <Table>
        <TableCaption>
          List of the biggest javascript libraries for data visualization
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Stars</TableHead>
            <TableHead>Link</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {datavizLibs.map((lib) => (
            <TableRow key={lib.name}>
              <TableCell className="font-medium">{lib.name}</TableCell>
              <TableCell>{lib.stars}</TableCell>
              <TableCell>
                <a href={lib.link}>link</a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <p>
        <br />
      </p>
      <p>Now your boss ask for X, Y, Z. Doable.</p>
      <p>
        Now he asks for something new. That's doable but hard. Your code starts
        to be hard to read.
      </p>
      <p>And it ends by not being doable.</p>

      <p>&rarr; Better to use d3 directly and understand what you do!</p>
    </LayoutCourse>
  );
}

const datavizLibs = [
  {
    name: 'Nivo',
    stars: '13',
    link: 'https://github.com/plouc/nivo',
  },
  {
    name: 'Chart.js',
    stars: '64',
    link: 'https://github.com/chartjs/Chart.js',
  },
  {
    name: 'HighCharts',
    stars: '12',
    link: 'https://github.com/highcharts/highcharts',
  },
  {
    name: 'Recharts',
    stars: '24',
    link: 'https://github.com/recharts/recharts',
  },
  {
    name: 'ChartKick',
    stars: '1',
    link: 'https://github.com/ankane/chartkick.js',
  },
  {
    name: 'Vega',
    stars: '11',
    link: 'https://github.com/vega/vega',
  },
  {
    name: 'ECharts',
    stars: '60',
    link: 'https://github.com/apache/echarts',
  },
];
