import React from "react";
import { graphExampleList } from "util/graphExampleList";
import { GraphLinkImage } from "./UI/GraphLinkImage";
import { ImageGrid } from "./UI/ImageGrid";

// Provide a list of png image names that are stored in the public folder and referenced in the graphExampleList file
// It will create a grid of images with description, linking to appropriate URL

type GraphGalleryProps = {
  images: string[];
};

export default function GraphGallery({ images }: GraphGalleryProps) {
  const allImages = graphExampleList
    .filter((example) => images.includes(example.img))
    .map((example, i) => (
      <GraphLinkImage
        key={i}
        link={example.link}
        title={example.title}
        description={<p>{example.description}</p>}
        img={example.img}
        alt={example.alt}
      />
    ));

  return <ImageGrid>{allImages}</ImageGrid>;
}
