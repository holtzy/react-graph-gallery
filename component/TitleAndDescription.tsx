import React from 'react';

import { ChartId, chartTypesInfo } from '../util/sectionDescriptions';
import { fullUrlToInternalLink } from '../util/utils';

import { HorizontalSeparator } from './UI/HorizontalSeparator';
import { LinkAsButton } from './LinkAsButton';
import { Tooltip } from './UI/Tooltip';
import SectionLogo from './SectionLogo';

import { LessonStatus } from '@/util/lessonList';
import { LessonBadge } from './LessonBadge';
import { Badge } from './UI/badge';
import { TocBreadcrumb } from './TocBreadcrumb';

type TitleAndDescription = {
  title: string | JSX.Element;
  description: JSX.Element;
  chartType?: ChartId | 'all';
  showSectionLink?: boolean;
  showInspirationLink?: boolean;
  showD3GalleryLink?: boolean;
  lessonStatus?: LessonStatus;
  readTime?: number;
};

export default function TitleAndDescription({
  title,
  description,
  chartType,
  showSectionLink = false, // e.g: link to the scatterplot section
  showInspirationLink = true,
  showD3GalleryLink = true,
  lessonStatus,
  readTime,
}: TitleAndDescription) {
  const chartInfo = chartTypesInfo.find((chart) => chart.id === chartType);

  return (
    <div className="w-full pt-1 sm:pt-28 pb-20 ">
      <TocBreadcrumb />
      {/* Title */}
      <div className="flex justify-start items-center">
        <h1>{title}</h1>
        {chartType && chartInfo && (
          <div className="w-20 ml-4">
            <SectionLogo chartLogo={chartInfo?.logo} />
          </div>
        )}
      </div>
      {/* Horizontal Separator */}
      <HorizontalSeparator />

      {/* Description */}
      <div className="max-w-xxl  py-2">{description}</div>

      {/* Buttons title */}
      {chartType && (
        <span className="text-gray-400 text-sm font-light">Useful links</span>
      )}

      {/* Buttons */}
      {chartInfo && (
        <div className="flex flex-row flex-wrap">
          {showSectionLink && (
            <Tooltip
              text="visit related section in the gallery"
              direction="bottom"
            >
              <LinkAsButton
                href={fullUrlToInternalLink(chartInfo.reactURL)}
                size="sm"
              >
                {chartInfo.label + ' section'}
              </LinkAsButton>
            </Tooltip>
          )}
          {showInspirationLink && (
            <Tooltip
              text="Hundreds of stunning dataviz projects to gather inspiration"
              direction="bottom"
            >
              <LinkAsButton
                href={'https://www.dataviz-inspiration.com/' + chartInfo.id}
                size="sm"
              >
                {'inspiration'}
              </LinkAsButton>
            </Tooltip>
          )}
          {showD3GalleryLink && (
            <Tooltip text="Pure d3 implementation, no React" direction="bottom">
              <LinkAsButton href={chartInfo.d3URL} size="sm">
                {'d3 gallery'}
              </LinkAsButton>
            </Tooltip>
          )}
          <Tooltip text="Dataviz theory about this chart" direction="bottom">
            <LinkAsButton href={chartInfo.dataToVizURL} isFilled size="sm">
              {'About this chart'}
            </LinkAsButton>
          </Tooltip>
        </div>
      )}

      {/* Badge and reading length */}
      {lessonStatus && readTime && (
        <div className="flex flex-row items-center flex-wrap gap-2">
          <LessonBadge lessonStatus={lessonStatus} />
          <span className="text-xs">{readTime + ' minutes read'}</span>
        </div>
      )}
    </div>
  );
}
