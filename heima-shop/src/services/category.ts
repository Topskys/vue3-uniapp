import { http } from "@/utils/http";

/**
 * 分类列表-小程序
 */
export function getCategoryTop() {
    return http<CategoryTopItem[]>({
        method: 'GET',
        url: '/category/top',
    });
}