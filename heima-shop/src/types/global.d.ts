/**
 * 通用分页结果类型
 */
export type PageResult<T> = {
    items: T[]
    counts: number // 总条数
    pages: number // 总页数
    page: number
    pageSize: number
}

/**
 * 通用分页参数
 */
export type PageParams = {
    page?:number
    pageSize?:number
}