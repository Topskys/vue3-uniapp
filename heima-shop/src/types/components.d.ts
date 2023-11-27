/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
// import 'vue'
// declare module 'vue' {
//   export interface GlobalComponents {
//     //
//   }
// }


import XtsSwiper from "@/components/XtsSwiper.vue"
import XtsGuess from "@/components/XtsGuess.vue"


declare module "@vue/runtime-core" {
    export interface GlobalComponents {
        XtsSwiper: typeof XtsSwiper
        XtsGuess: typeof XtsGuess
    }
}


/**
 * 获取组件实例类型
 */
export type XtsGuessInstance = InstanceType<typeof XtsGuess>