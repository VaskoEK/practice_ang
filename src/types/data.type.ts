export type Person = {
    surname: string,
    firstname: string,
    age: number,
    nrs: Nrs
}

export type Nrs = {
    a: number[],
    b: number[]
}