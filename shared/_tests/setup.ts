import {
    TestAPI,
    afterEach,
    beforeEach,
    test as vitest
} from "vitest"
import * as mocks from "./mocks"

// empty-pattern to avoid the following error:
//  Error: the first argument must use object destructuring pattern
// eslint-disable-next-line no-empty-pattern
const bindFn = (fn: Function): Object => ({
    [fn.name]: async (
        {},
        use: (f: Function) => Promise<Function>
    ): Promise<Function> => use(fn)
})
export const bindFns = (...fns: Function[]): Object => fns.reduce(
    (obj, fn) => Object.assign(obj, bindFn(fn))
    , {}
)

const _CONTEXTS = {}

beforeEach(({ task }) => {
    task._CONTEXTS = _CONTEXTS
    _CONTEXTS[task.id] = {
        input: {}
    }
})

afterEach(({ task }) => {
    const context = _CONTEXTS[task.id]
    const result = task.result
    // Do something depending on test result
    delete _CONTEXTS[task.id]
})

async function contextFixture({ task }, use) {
    return use(_CONTEXTS[task.id])
}

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
    contextFixture,
    mocks,
    extendedTest as it,
    extendedTest as test
}
