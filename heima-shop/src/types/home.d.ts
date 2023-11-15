
/**
 * 首页-广告类型-小程序
 */
export type BannerItem = {
    id: string;
    type: number;
    hrefUrl: string,
    imgUrl: string,
}


/**
 * 首页-分类类型-小程序
 */
export type CategoryItem = {
    id: string,
    icon: string,
    name: string,
}

/**
 * 首页-热门推荐类型-小程序
 */
export type HotItem = {
    id: string,
    alt: string, // 说明
    pictures: string[],
    target: string, // 跳转地址
    title: string,
    type: string, // 推荐类型
}

/**
 * 猜你喜欢-商品类型
 */
export type GuessItem = {
    desc: string
    discount: number // 折扣
    id: string
    name: string
    price: number
    orderNum: number // 商品已下单数量
    picture: string
}
