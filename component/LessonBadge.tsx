import { LessonStatus } from '@/util/lessonList';
import { Badge } from './UI/badge';

type LessonBadgeProps = {
  lessonStatus: LessonStatus;
};

export const LessonBadge = ({ lessonStatus }: LessonBadgeProps) => {
  if (lessonStatus === 'free') {
    return (
      <Badge variant={'outlineGreen'} className="font-extralight opacity-90">
        Free
      </Badge>
    );
  }
  if (lessonStatus === 'wip') {
    return (
      <Badge variant={'outlineOrange'} className="font-extralight opacity-90">
        Wip
      </Badge>
    );
  }
  if (lessonStatus === 'membersOnly') {
    return <Badge className="font-extralight opacity-90">Members Only</Badge>;
  }
  if (lessonStatus === 'not available') {
    return (
      <Badge
        variant={'outlineDestructive'}
        className="font-extralight opacity-90"
      >
        Unavail.
      </Badge>
    );
  }
  return null;
};
