export function hello(value?: string) {
    return { hello: value ?? "world" }
}
