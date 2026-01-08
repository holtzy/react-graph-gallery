'use client';

import { cn } from '@/util/utils';
import React from 'react';

type CourseLogoProps = {
  className?: string;
};

export const CourseLogo = ({ className }: CourseLogoProps) => {
  return (
    <span
      className={cn('text-black font-medium', className)}
      style={{ fontFamily: 'var(--font-spline' }}
    >
      <span className="border-b border-set1-teal py-2 pr-2.5">{'d3'}</span>
      <span className="border-y border-set1-teal bg-set2-teal/50 pl-0.75 pr-0.75 py-2">
        {'loves'}
      </span>
      <span className="border-t border-set1-teal py-2">react</span>
    </span>
  );
};
