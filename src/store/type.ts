export type Action = {
  type: string;
  payload?: any;
};

export type AppState<T> = {
  loading: boolean;
  data: T[] | null;
  error?: any;
};
export type AppStateDetail<T> = {
    loading: boolean,
    data: T | null,
    error?: any,
}
export type AppStateBanner<T> = {
    loading: boolean,
    banner: T[] | null,
    error?: any,
} 
