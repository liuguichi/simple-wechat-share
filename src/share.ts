export interface IShareInfo {
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

export interface ISignatureInfo {
  appId: string
  timestamp: string,
  nonceStr : string,
  signature: string,
  jsApiList: string[],
  debug?: boolean
}

export function initWechatShare(sign: ISignatureInfo, data: IShareInfo, debug=false): void {
  window.wx.config({
    debug,
    ...sign,
  })
  window.wx.ready(() => {
    // 自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0）
    window.wx.updateAppMessageShareData(data)
    // 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容（1.4.0）
    window.wx.updateTimelineShareData(data)
  })
}
