type HelloFooContainer<TFoo> = {
    hello?: string,
    foo?: TFoo
}

export function concatHelloAndFoo<TFoo>(
    objA: HelloFooContainer<TFoo>,
    objB: HelloFooContainer<TFoo>
): string {
    const hello = objA?.hello ?? objB?.hello ?? ""
    const foo = objA?.foo ?? objB?.foo ?? ""

    return (`${hello} ${foo}`).trim()
}
