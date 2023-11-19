

/**
 * 商品详情
 * @param id 商品编号
 */
export function getGoodsById(id:string ){
    return http({
        url:"/goods",
        data:{id} , // 小程序参数均从data传
    })
}