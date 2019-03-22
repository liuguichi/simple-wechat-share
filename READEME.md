### 引入官方JSSDK文件

npm i simple-wechat-share

import { initWechatShare } from 'simple-wechat-share'

export interface IShareInfo {
    /** 分享标题 */
    title: string;
    /** 分享链接 */
    link: string;
    /** 分享logo */
    imgUrl: string;
    /** 描述内容 */
    desc?: string;
    success: () => void;
}
export interface ISignatureInfo {
    appId: string;
    timestamp: string;
    nonceStr: string;
    signature: string;
    jsApiList: string[];
    debug?: boolean;
}

initWechatShare(sign: ISignatureInfo, data: IShareInfo, debug?: boolean)