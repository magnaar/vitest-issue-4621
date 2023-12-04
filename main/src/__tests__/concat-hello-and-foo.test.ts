import { beforeEach, describe, expect } from "vitest"
import { test } from "tests/setup"
import { concatHelloAndFoo } from "../concat-hello-and-foo"

function systemUnderTest(context: any) {
    const { objA, objB } = context.input
    return concatHelloAndFoo(objA, objB)
}

describe(`Concat Hello and Foo`, function () {
    beforeEach(({ context }) => {
        const input = context.input
        input.objA = undefined
        input.objB = undefined
    })

    test(`should return an empty string when hello and foo are not found`, ({ context }) => {
        const expected = ""
        const result = systemUnderTest(context)
        expect(result).toEqual(expected)
    })

    test(`should return a string with hello value and foo value when hello and foo are found`, ({ context, mocks, createObject }) => {
        const expected = `${mocks.hello().hello} ${mocks.foo().foo}`
        context.input.objA = mocks.hello()
        context.input.objB = mocks.foo()
        console.log(createObject())
        const result = systemUnderTest(context)
        expect(result).toEqual(expected)
    })
})
