export type nulltype = undefined | null
export type lonLatArr = [number, number]

export type Partial<T> = {
    [P in keyof T] : T[P]
}

export type Pick<T, K extends keyof T> = {
    [P in K] : T[P]
}