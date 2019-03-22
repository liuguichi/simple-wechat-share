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
export declare function initWechatShare(sign: ISignatureInfo, data: IShareInfo, debug?: boolean): void;
