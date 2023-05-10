// 类型声明文件
/// <reference types="react-scripts" />

// 增加提示
declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_BASE_URL: string
  }
}
