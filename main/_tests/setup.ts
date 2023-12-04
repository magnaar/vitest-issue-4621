import {
    TestAPI,
    test as vitest
} from "vitest"
import { bindFns, contextFixture } from "shared/tests/setup"
import { mocks } from "./mocks"

function createObject() {
    return {}
}

const extendedTest: TestAPI = vitest.extend({
    context: contextFixture,
    mocks: ({}, use) => use(mocks),
    ...bindFns(
        createObject
    )
})

export {
    extendedTest as it,
    extendedTest as test
}
