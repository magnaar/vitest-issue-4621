export function extractFoo<TFoo>(obj: { foo?: TFoo }): TFoo | string {
    return obj?.foo ?? ""
}
