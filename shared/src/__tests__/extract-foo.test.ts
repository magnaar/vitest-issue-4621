import { beforeEach, describe, expect } from "vitest"
import { test } from "tests/setup"
import { extractFoo } from "../extract-foo"

function systemUnderTest(context: any) {
    const { object } = context.input
    return extractFoo(object)
}

describe(`Extract Foo`, function () {
    beforeEach(({ context }) => {
        context.input.object = {}
    })

    test(`should return an empty string when foo is not found`, ({ context }) => {
        const expected = ""
        const result = systemUnderTest(context)
        expect(result).toEqual(expected)
    })

    test(`should return the content of foo when foo is found`, ({ context, mocks }) => {
        const expected = mocks.foo().foo
        context.input.object = mocks.foo()
        const result = systemUnderTest(context)
        expect(result).toEqual(expected)
    })
})
