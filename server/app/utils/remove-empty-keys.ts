export function removeEmptyKeys<T extends Object>(obj: T): Partial<T> {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v !==  undefined && v !== null)) as Partial<T>;
}