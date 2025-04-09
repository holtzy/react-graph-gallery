export type Subgroup = 'Consumer' | 'Corporate' | 'Home Office';
export type Group = 'West' | 'East' | 'Central' | 'South';

export type DataItem = {
  group: Group;
} & Record<Subgroup, number>;

export const data: DataItem[] = [
  {
    group: 'West',
    Consumer: 364,
    Corporate: 232,
    'Home Office': 143,
  },
  {
    group: 'East',
    Consumer: 357,
    Corporate: 204,
    'Home Office': 131,
  },
  {
    group: 'Central',
    Consumer: 254,
    Corporate: 158,
    'Home Office': 91,
  },
  {
    group: 'South',
    Consumer: 196,
    Corporate: 122,
    'Home Office': 74,
  },
];
