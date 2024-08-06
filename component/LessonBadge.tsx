import { LessonStatus } from '@/util/lessonList';
import { Badge } from './UI/badge';

type LessonBadgeProps = {
  lessonStatus: LessonStatus;
};

export const LessonBadge = ({ lessonStatus }: LessonBadgeProps) => {
  if (lessonStatus === 'free') {
    return <Badge variant={'outlineGreen'}>Free</Badge>;
  }
  if (lessonStatus === 'wip') {
    return <Badge variant={'outlineOrange'}>Wip</Badge>;
  }
  if (lessonStatus === 'membersOnly') {
    return <Badge>Members Only</Badge>;
  }
  if (lessonStatus === 'not available') {
    return <Badge variant={'outlineDestructive'}>Unavail.</Badge>;
  }
  return null;
};
