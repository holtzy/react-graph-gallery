export interface Node extends d3.SimulationNodeDatum {
  id: string;
  group: string;
  value: number;
}

export const data: Node[] = [
  { id: 'Myriel', group: 'team1', value: 90 },
  { id: 'Anne', group: 'team1', value: 10 },
  { id: 'Gabriel', group: 'team1', value: 34 },
  { id: 'Mel', group: 'team1', value: 9 },
  { id: 'Yan', group: 'team2', value: 16 },
  { id: 'Tom', group: 'team2', value: 93 },
  { id: 'Cyril', group: 'team2', value: 23 },
  { id: 'Tuck', group: 'team2', value: 54 },
  { id: 'Antoine', group: 'team3', value: 9 },
  { id: 'Rob', group: 'team3', value: 78 },
  { id: 'Napoleon', group: 'team3', value: 45 },
  { id: 'Toto', group: 'team4', value: 78 },
  { id: 'Tutu', group: 'team4', value: 98 },
  { id: 'Titi', group: 'team4', value: 9 },
  { id: 'Tata', group: 'team4', value: 5 },
  { id: 'Turlututu', group: 'team4', value: 45 },
  { id: 'Tita', group: 'team4', value: 59 },
];
