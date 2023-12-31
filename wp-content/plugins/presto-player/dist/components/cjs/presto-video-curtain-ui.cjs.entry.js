'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7c213f46.js');

const prestoVideoCurtainUiCss = ":host{font-size:16px}.curtain{position:relative;font-family:var(--presto-curtain-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\");background-color:var(--presto-curtain-background-color, #000);text-align:var(--presto-curtain-text-align, center);color:var(--presto-curtain-text-color, #fff);padding-bottom:var(--presto-curtain-size, 56.25%);font-size:var(--presto-curtain-font-size, 1.5em)}::slotted(:not(:first-child)){margin-top:14px}.content{position:absolute;inset:0;display:flex;justify-content:center;align-items:center;flex-direction:column;padding:48px}";

let CurtainUI = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { class: "curtain", part: "base" }, index.h("div", { class: "content", part: "curtain-content" }, index.h("slot", null))));
  }
};
CurtainUI.style = prestoVideoCurtainUiCss;

exports.presto_video_curtain_ui = CurtainUI;
