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
    page?: number
    pageSize?: number
}

/**
 * 商品类型
 */
export type GoodsItem = {
    desc: string
    discount: number // 折扣
    id: string
    name: string
    price: number
    orderNum: number // 商品已下单数量
    picture: string

}