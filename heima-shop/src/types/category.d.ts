import type { GoodsItem } from "./global"

/**
 * 一级分类项
 */
export type CategoryTopItem={
    id:string
    name:string
    imageBanners:string[]
    picture:string
    // 二级分类项
    children:CategoryTopItem[]
}

/**
 * 二级分类项
 */
export type CategoryChildItem={
    id:string
    name:string
    picture:string
    // 商品集合
    goods:GoodsItem[]
}