import { http } from "@/utils/http"
import type { BannerItem, CategoryItem, GuessItem, HotItem } from "@/types/home"
import type { PageParams, PageResult } from "@/types/global"


/**
 * 首页-广告轮播-小程序
 * @param distributionSite 广告区域展示位置（投放位置，1为首页，2为分类商品页，默认为1）
 * @returns 
 */
export const getHomeBanner = (distributionSite = 1) => {
    return http<BannerItem[]>({
        method: "GET",
        url: "/home/banner",
        data: {
            distributionSite,
        }
    })
}

/**
 * 首页-前台分类-小程序
 */
export function getHomeCategory() {
    return http<CategoryItem[]>({
        method: "GET",
        url: "/home/category/mutli",
    })
}


/**
 * 首页-热门推荐-小程序
 */
export function getHomeHot() {
    return http<HotItem[]>({
        url: "/home/hot/mutli",
    })
}

/**
 * 
 * 猜你喜欢-小程序
 */
export function getHomeGoodsGuessLike(data?: PageParams) {
    return http<PageResult<GuessItem>>({
        url: "/home/goods/guessLike",
        data,
    })
}