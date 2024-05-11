export type Action = {
    type: string,
    payload?: any,
}

export type AppState<T> = {
    loading: boolean,
    data: T[] | null,
    error?: any,
} 
