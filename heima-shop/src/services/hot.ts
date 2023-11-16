import type { PageParams } from "@/types/global";
import type { HotResult } from "@/types/hot";
import { http } from "@/utils/http";


type HotParams = PageParams & { subType?: string }

/**
 * 热门推荐-获取热门推荐数据
 * @param url 请求地址
 * @param data 请求参数
 * @returns 
 */
export function getHotRecommend(url: string, data?: HotParams) {
    return http<HotResult>({
        url,
        data,
    })
}