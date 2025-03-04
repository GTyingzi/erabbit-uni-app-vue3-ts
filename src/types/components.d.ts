/// <reference types="@dcloudio/types" />
import XtxSwiper from './XtxSwiper.vue'
import XtxGuess from '@/components/XtxGuess.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    button: typeof import('@uni-helper/uni-app-types')['Button']
    view: typeof import('@uni-helper/uni-app-types')['View']
    XtxSwiper: typeof XtxSwiper
    XtxGuess: typeof XtxGuess
  }
}
// 组件实例类型
export type XtxGuessInstance = InstanceType<typeof XtxGuess>
