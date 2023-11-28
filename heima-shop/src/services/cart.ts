import type { CartItem } from "@/types/cart";
import { http } from "@/utils/http";



/**
 * 加入购物车
 * @param data 请求体参数
 */
export const postMemberCart = (data: { skuId: string; count: number }) => {
    return http({
        method: 'POST',
        url: '/member/cart',
        data,
    })
}



/**
 * 获取购物车商品列表数据
 */
export function getMemberCart() {
    return http<CartItem[]>({
        url: '/member/cart',
        method: 'GET'
    })
}


/**
 * 删除或清空购物车
 * @param data { ids: string[] } skuId 数组
 */
export function deleteMemberCart(data: { ids: string[] }) {
    return http({
        url: '/member/cart',
        method: 'DELETE',
        data,
    })
}


/**
 * 修改购物车商品
 * @param skuId SKUID
 * @param data selected 选中状态 count 商品数量
 */
export function putMemberCartBySkuId(skuId: string, data: { selected?: boolean, count?: number }) {
    return http({
        method: 'PUT',
        url: `/member/cart/${skuId}`,
        data,
    })
}


/**
 * 修改全部选中状态
 * @param data selected 全部选中状态
 */
export function putMemberCartSelected(data: { selected: boolean }) {
    return http({
        method: 'PUT',
        url: '/member/cart/selected',
        data,
    })
}
