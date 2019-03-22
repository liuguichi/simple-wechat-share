interface IShareInfo {
  /** 分享标题 */
  title: string
  /** 分享链接 */
  link: string
  /** 分享logo */
  imgUrl: string
  /** 描述内容 */
  desc?: string
  success: () => void
}

interface ISignatureInfo {
  appId: string
  timestamp: string,
  nonceStr : string,
  signature: string,
  jsApiList: string[],
  debug?: boolean
}

interface IWX {
  config: (info: ISignatureInfo) => void,
  ready: (func: () => void) => void,
  error: () => void,
  updateAppMessageShareData: (data: IShareInfo) => void,
  updateTimelineShareData: (data: IShareInfo) => void,
}

interface Window {
  wx: IWX
}