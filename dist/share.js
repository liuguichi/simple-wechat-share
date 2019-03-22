var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function initWechatShare(sign, data, debug) {
        if (debug === void 0) { debug = false; }
        window.wx.config(__assign({ debug: debug }, sign));
        window.wx.ready(function () {
            // 自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0）
            window.wx.updateAppMessageShareData(data);
            // 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容（1.4.0）
            window.wx.updateTimelineShareData(data);
        });
    }
    exports.initWechatShare = initWechatShare;
});
