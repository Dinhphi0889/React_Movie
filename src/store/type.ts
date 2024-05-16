export type Action = {
  type: string;
  payload?: any;
};
export type Appstate<T> = {
  loading: boolean;
  data: T[] | null;
  error: any;
};
export type AppStateDetail<K> = {
  loading: boolean;
  data: K | null;
  error: any;
};
