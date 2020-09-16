export interface ITodo {
  id: number;
  content: string;
  completed: boolean;
}

export type visibilityFilterType = 'all' | 'completed' | 'incomplete'

export interface VisibilityFiltersDictionary {
  [key: string]: visibilityFilterType;
}
