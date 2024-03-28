export type Variable =
  | 'ML Ops'
  | 'Data Pipelines'
  | 'Database'
  | 'Data Viz'
  | 'Storytelling'
  | 'Business Insights'
  | 'Reporting'
  | 'Experimentation'
  | 'Stats'
  | 'ML Modeling'
  | 'Deployment';

export type DataItem<T extends string> = {
  [key in T]: number;
} & {
  name: string;
};

export type Data = DataItem<Variable>[];

export const data: Data = [
  {
    'ML Ops': 3.9,
    'Data Pipelines': 5,
    Database: 5,
    'Data Viz': 2,
    Storytelling: 1.5,
    'Business Insights': 1.5,
    Reporting: 2.2,
    Experimentation: 1.5,
    Stats: 1.5,
    'ML Modeling': 2,
    Deployment: 2.8,
    name: 'Data Engineer',
  },
  {
    'ML Ops': 5,
    'Data Pipelines': 3,
    Database: 3,
    'Data Viz': 1.5,
    Storytelling: 1.5,
    'Business Insights': 1.5,
    Reporting: 2,
    Experimentation: 4,
    Stats: 4,
    'ML Modeling': 4.8,
    Deployment: 5,
    name: 'ML Engineer',
  },
  {
    'ML Ops': 3,
    'Data Pipelines': 1.9,
    Database: 2.8,
    'Data Viz': 3.5,
    Storytelling: 3.3,
    'Business Insights': 3.3,
    Reporting: 3.3,
    Experimentation: 4.7,
    Stats: 5,
    'ML Modeling': 5,
    Deployment: 3.5,
    name: 'Data Scientist',
  },
  {
    'ML Ops': 1.5,
    'Data Pipelines': 1.5,
    Database: 2.5,
    'Data Viz': 5,
    Storytelling: 5,
    'Business Insights': 5,
    Reporting: 5,
    Experimentation: 3.5,
    Stats: 3,
    'ML Modeling': 2.5,
    Deployment: 1.5,
    name: 'Data Analyst',
  },
];
