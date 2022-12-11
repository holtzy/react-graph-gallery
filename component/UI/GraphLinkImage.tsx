import { ReactElement } from "react";
import styles from "./graphLinkImage.module.css";

// All images passed to this component are first formatted with image magick
// Their dimension is 480 x 480 px

type GraphLinkImageProps = {
  img: string;
  title: string;
  description: ReactElement;
  link: string;
};

export const GraphLinkImage = ({
  img,
  title,
  description,
  link,
}: GraphLinkImageProps) => {
  return (
    <figure className={styles.container}>
      <img src={"/chart/" + img} className={styles.image} />
      <figcaption>
        <p className={styles.title}>
          <b>{title}</b>
        </p>
        <p className="font-light">{description}</p>
        <a href={link}></a>
      </figcaption>
    </figure>
  );
};
