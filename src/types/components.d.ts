/// <reference types="@dcloudio/types" />

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    button: typeof import('@uni-helper/uni-app-types')['Button']
    view: typeof import('@uni-helper/uni-app-types')['View']
  }
}

export {}
