export interface IMPayload {
    notification: {
        title?: string,
        body?: string,
    },
    data?: any
}

export interface IMOptions {
    ttl?: number,
    priority?: string
    collapseKey?: string
}