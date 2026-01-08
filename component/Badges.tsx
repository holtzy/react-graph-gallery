import { Badge } from './UI/badge';

export const FreeBadge = () => (
  <span>
    <Badge
      variant="outline"
      className="rounded-sm border-set1-teal text-set1-teal"
    >
      Free
    </Badge>
  </span>
);

export const NewBadge = () => (
  <span>
    <Badge variant="outline" className="rounded-sm border-set1-orange">
      New
    </Badge>
  </span>
);

export const MembersOnlyBadge = () => (
  <span>
    <Badge
      variant="outline"
      className="rounded-sm border-set2-gold/60 font-light"
    >
      <span className="text-transparent bg-gradient-to-l from-set2-gold to-set1-teal bg-clip-text tracking-wider font-bold">
        Members only
      </span>
    </Badge>
  </span>
);

export const WipBadge = () => (
  <span>
    <Badge
      variant="outline"
      className="rounded-sm border-set1-red text-set1-red"
    >
      WIP
    </Badge>
  </span>
);

export const ProjectBadge = () => (
  <span>
    <Badge
      variant="outline"
      className="rounded-sm border-set1-blue/60 font-light"
    >
      <span className="text-transparent bg-gradient-to-l from-set1-blue to-set2-red bg-clip-text tracking-wider font-bold hover:to-red-400">
        Your Turn!
      </span>
    </Badge>
  </span>
);

export const LevelMediumBadge = () => (
  <Badge className="-translate-y-1 ml-10 bg-set2-orange">Medium</Badge>
);

export const LevelEasyBadge = () => (
  <Badge className="-translate-y-1 ml-10 bg-set2-blue">Easy</Badge>
);
