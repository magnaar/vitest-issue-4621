export function foo(value?: any) {
    return { foo: value ?? "bar" }
}
