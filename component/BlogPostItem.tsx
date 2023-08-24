import Link from 'next/link';
import { Pill } from './UI/Pill';

type BlogCategory =
  | 'fundamental'
  | 'animation'
  | 'responsiveness'
  | 'interaction'
  | 'axis'
  | 'advanced'
  | 'canvas';

type CategoryColor = { [topic in BlogCategory]: string };

const categoryColors: CategoryColor = {
  fundamental: '#e07a5f',
  animation: '#3d405b',
  responsiveness: '#81b29a',
  interaction: '#f2cc8f',
  axis: '#15616d',
  advanced: 'red',
  canvas: '#003566',
};

type BlogPostItemProps = {
  title: string;
  children: React.ReactNode;
  link: string;
  isAvailable: boolean;
  timeToRead: number;
  categories?: BlogCategory[];
};

export const BlogPostItem = ({
  title,
  children,
  link,
  isAvailable,
  timeToRead,
  categories,
}: BlogPostItemProps) => {
  const opacity = isAvailable ? 'opacity-100' : 'opacity-25';

  const pills = categories?.map((category, i) => (
    <Pill
      key={i}
      label={category}
      color={categoryColors[category]}
      opacity={0.5}
    />
  ));

  return (
    <div className={opacity + ' cursor-pointer'}>
      {isAvailable ? (
        <Link href={link}>
          <h2 className="cursor-pointer">{title}</h2>
        </Link>
      ) : (
        <h2>{title}</h2>
      )}
      {children}
      {isAvailable && (
        <Link href={link}>
          <span className="ml-4">Read more</span>
        </Link>
      )}
      <p className="text-gray-400 font-light mt-2">
        {timeToRead + ' minutes read'}
      </p>
      {pills}
    </div>
  );
};
