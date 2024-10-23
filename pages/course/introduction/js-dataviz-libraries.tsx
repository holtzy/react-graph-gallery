import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';

// import { ResponsiveBar } from '@nivo/bar';
import { CodeBlock } from '@/component/UI/CodeBlock';
import { Caption } from '@/component/UI/Caption';
import { Sidenote } from '@/component/SideNote';
import { ResponsiveBar } from '@nivo/bar';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/component/UI/table';

const data = [
  { country: 'USA', value: 100 },
  { country: 'UK', value: 80 },
  { country: 'Canada', value: 60 },
  { country: 'Germany', value: 50 },
  { country: 'Japan', value: 70 },
];

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
              When creating a chart, your first instinct is usually to reach for
              a JavaScript library. While that’s a <b>great starting point</b>,
              it often leads to unnecessary <b>complications</b>.
            </p>
            <p>Let’s explore why. 🤓</p>
          </>
        }
      />
      <h2>In a hurry</h2>
      <p>
        You're building an impressive app and need to add a{' '}
        <a href="https://www.data-to-viz.com/graph/barplot.html">barplot</a>.
        You'll need rectangles, axes, labels, a title, and maybe even a
        tooltip—all responsive and well-designed.
      </p>
      <p>The good news?</p>
      <p>
        There are <b>plenty of JavaScript dataviz libraries</b> that can handle
        this perfectly 🔥:
      </p>
      <p>
        <br />
      </p>
      <center>
        <Table className="max-w-96">
          <TableCaption>
            List of the biggest javascript libraries
            <br />
            for data visualization
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
      </center>
      <p>
        <br />
      </p>
      <p>
        Let's try with <code>Nivo</code> (I used it for a client recently 🙃).
      </p>
      <p>
        All you have to do is to <code>npm install</code> the lib, import it{' '}
        <code>ResponsiveBar</code> component and use it with the 3 required
        arguments: <code>data</code>, <code>keys</code> and <code>indexBy</code>
        .
      </p>
      <CodeBlock
        code={`
// Import lib
import { ResponsiveBar } from '@nivo/bar';

// Make a barchart
<ResponsiveBar data={data} keys={['value']} indexBy="country"/>
      `}
      />
      <p>
        <br />
      </p>
      <p>
        <strong>Just like that</strong>, you’ve created a fantastic barplot!
        Time to celebrate 🎉.
      </p>
      <div className="full-bleed bg-muted/50">
        <div className="wrapper" style={{ height: 400 }}>
          <ResponsiveBar
            data={data}
            keys={['value']}
            indexBy="country"
            margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
            padding={0.3}
            colors={'#69b3a2'}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Country',
              legendPosition: 'middle',
              legendOffset: 32,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Value',
              legendPosition: 'middle',
              legendOffset: -40,
            }}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <Caption>
          A basic barplot made using the Nivo library in 3 minutes.
        </Caption>
      </div>
      <h2>Yes, But...</h2>
      <p>
        The excitement fades, and it’s time to <b>elevate your chart</b> to the
        next level. Here’s a list of common tweaks you’ll likely need:
      </p>
      <h3 className="text-sm mt-4">📊 Chart type</h3>
      <p>
        The user actually needs a diverging bar chart, with individual data
        points overlayed.
      </p>
      <h3 className="text-sm mt-4">🎨 Design</h3>
      <p>
        Enhanced colors, labels on top, subtle arrows, custom gridlines, and a
        unique font.
      </p>
      <h3 className="text-sm mt-4">🎮 Interactivity</h3>
      <p>
        Smooth hover effect to highlight specific groups which also triggers a
        change on a minimap elsewhere in the app. Oh, and clicking on text
        should also highlight certain dots/rectangles.
      </p>
      <p>
        <br />
      </p>
      <p>Essentially, you’re aiming for something like this:</p>
      <div className="relative">
        <Sidenote
          text={
            <p>
              I made{' '}
              <a
                href="https://holtzy.github.io/pacific-challenge/"
                target="_blank"
              >
                this app
              </a>{' '}
              to win a dataviz competition: the Pacific Dataviz{' '}
              <a href="https://pacificdatavizchallenge.org/en" target="_blank">
                Challenge
              </a>
            </p>
          }
        />
        <center>
          {' '}
          <video controls width="600">
            <source src="/video/miror-barplot-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Caption>
            Interactive barplot made to win a dataviz challenge.{' '}
            <a href="https://holtzy.github.io/pacific-challenge/">
              Check it out
            </a>
            .
          </Caption>
        </center>
      </div>

      <h2>Now, you're in trouble!</h2>
      <p>
        Some of the features listed above can be achieved with a dataviz
        library, but they will require <b>endless tweaks</b> beyond what the
        library is designed to do.
      </p>
      <p>
        Others <b>simply aren’t possible</b>, meaning you’ll have to convince
        the product manager to let them go. 😞
      </p>
      <p>
        <br />
      </p>
      <blockquote className="bg-fuchsia-50 py-8">
        JavaScript libraries are <b>great for quick visualizations</b>, but{' '}
        <b>their limitations will stop you</b> from winning a dataviz challenge
        or meeting your PM's complex needs.
      </blockquote>
      <p>
        <br />
      </p>
      <p>
        To take data visualization seriously, you should move away from those
        JavaScript libraries and <b>switch to D3.js</b>.
      </p>
      <p>Let’s explore what D3.js is and how it stands apart. ➡️</p>
    </LayoutCourse>
  );
}

const datavizLibs = [
  {
    name: 'Chart.js',
    stars: '64k',
    link: 'https://github.com/chartjs/Chart.js',
  },
  {
    name: 'ECharts',
    stars: '60k',
    link: 'https://github.com/apache/echarts',
  },
  {
    name: 'Recharts',
    stars: '24k',
    link: 'https://github.com/recharts/recharts',
  },
  {
    name: 'Nivo',
    stars: '13k',
    link: 'https://github.com/plouc/nivo',
  },

  {
    name: 'HighCharts',
    stars: '12k',
    link: 'https://github.com/highcharts/highcharts',
  },
  {
    name: 'Vega',
    stars: '11k',
    link: 'https://github.com/vega/vega',
  },
  {
    name: 'ObservablePlot',
    stars: '4k',
    link: 'https://github.com/observablehq/plot',
  },
  {
    name: 'ChartKick',
    stars: '1k',
    link: 'https://github.com/ankane/chartkick.js',
  },
];
