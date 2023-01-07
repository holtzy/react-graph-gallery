import { ReactElement } from "react";
import styles from "./graphLinkImage.module.css";

// All images passed to this component are first formatted with image magick
// Their dimension is 480 x 480 px

type GraphLinkImageProps = {
  img: string;
  title: string;
  description: ReactElement;
  link: string;
  alt: string;
};

export const GraphLinkImage = ({
  img,
  title,
  description,
  link,
  alt,
}: GraphLinkImageProps) => {
  return (
    <figure className={styles.container}>
      <img src={"/chart/" + img} className={styles.image} alt={alt} />
      <figcaption>
        <p className={styles.title}>
          <b>{title}</b>
        </p>
        <div className="font-light">{description}</div>
        <a href={link}></a>
      </figcaption>
    </figure>
  );
};
