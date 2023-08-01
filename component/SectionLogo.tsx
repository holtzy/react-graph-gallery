import React from 'react';
import type { ChartLogo } from 'util/sectionDescriptions';

// This component displays a logo representing a chart type of the gallery.
// Example: bar chart

// Note: this component does NOT use the <Image> component of next.js
// Because I want to move to a fully static website

type SectionLogoProps = {
  chartLogo: ChartLogo;
  size?: number;
};

export default function SectionLogo({ chartLogo, size }: SectionLogoProps) {
  const isGif = chartLogo === 'Anim150' || chartLogo === 'Time150';
  const logoExtension = isGif ? '.gif' : '.png';

  const logoDescription =
    'Dataviz logo representing a ' + chartLogo.replace('150', '') + ' chart.';

  return (
    <img
      alt={logoDescription}
      src={'/section/' + chartLogo + logoExtension}
      width={size ? size + 'px' : '100%'}
      height={size ? size + 'px' : '100%'}
    />
  );
}
