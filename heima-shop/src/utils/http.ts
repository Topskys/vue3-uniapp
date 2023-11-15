/**
 * 添加拦截器
 *  拦截 request 请求
 *  拦截 uploadFile 文件上传
 * TODO：
 *  1.拼接请求地址
 *  2.配置超时请求（默认60s）
 *  3.添加请求头标识
 */

import { useMemberStore } from "@/stores";

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net';

// 请求拦截器
const httpInterceptor = {
    // 拦截时触发
    invoke(options: UniApp.RequestOptions) {
        // 拼接请求地址
        if (options.url.indexOf('http') === -1) {
            options.url = `${baseURL}${options.url}`
        }
        options.timeout = 10000;
        // 添加请求头标识
        options.header = {
            ...options?.header,
            // 小程序请求头（小程序：miniapp app端：app）
            'source-client': 'miniapp',
        }
        // 添加Token请求头标识
        const memberStore = useMemberStore();
        const token = memberStore.profile?.token;
        if (token) {
            options.header['Authorization'] = token;
        }
        return options;
    }
}

// 添加拦截器
uni.addInterceptor("request", httpInterceptor);
uni.addInterceptor("uploadFile", httpInterceptor);



interface Data<T> {
    success?: boolean;
    code: number;
    msg: string;
    result: T;
}

/**
 * 请求函数
 * @param options UniApp.RequestOptions
 * @returns Promise
 * 1. 请求成功
 *  1.1 提取核心数据 res.data
 *  1.2 添加类型，支持泛型
 * 2. 请求失败
 *  2.1 通用错误 （有响应需要再success中处理）
 *  2.2 401错误 （有响应需要再success中处理）
 *  2.3 网络错误
 */
export const http = <T>(options: UniApp.RequestOptions) => {
    return new Promise<Data<T>>((resolve, reject) => {
        uni.request({
            ...options,
            // 响应成功
            success: (res) => {
                // 判断状态码
                const status = res.statusCode;
                // 借鉴axios的状态码处于2xx才resolve的设计
                if (status >= 200 && status <= 300) {
                    console.log('请求',res.data);
                    resolve(res.data as Data<T>);
                } else if (status === 401) {
                    // 401 清空认证信息
                    const memberStore = useMemberStore();
                    memberStore.clearProfile();
                    // 跳转登录页
                    uni.navigateTo({ url: "/pages/login/login" });
                    reject(res)
                } else {
                    // 通用错误
                    uni.showToast({
                        icon: 'none',
                        title: (res.data as Data<T>)?.msg || "请求错误",
                    })
                    reject(res)
                }
            },
            // 响应失败
            fail: (err) => {
                uni.showToast({
                    icon: 'none',
                    title: "网络错误",
                })
                reject(err)
            }
        })
    })
}
