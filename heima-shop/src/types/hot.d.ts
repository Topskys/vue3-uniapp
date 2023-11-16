import type { GoodsItem, PageResult } from "./global"

/**
 * 热门推荐-子类选项
 */
export type SubTypeItem = {
    id: string
    title: string
    /* 子类对用的商品子集合 */
    goodsItems: PageResult<GoodsItem>
}


/**
 * 热门推荐
 */
export type HotResult = {
    id: string
    // 活动图片
    bannerPicture: string
    // 活动标题
    title: string
    // 子选项
    subTypes: SubTypeItem[];
}