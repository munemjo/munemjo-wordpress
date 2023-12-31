'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7c213f46.js');

const prestoSkeletonCss = ":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{--border-radius:var(--presto-player-border-radius-pill);--color:#e5e7eb;--sheen-color:#f3f4f6;display:block;position:relative}.skeleton{display:flex;width:100%;height:100%;min-height:1rem}.skeleton__indicator{flex:1 1 auto;background:var(--color);border-radius:var(--border-radius)}.skeleton--sheen .skeleton__indicator{background:linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));background-size:400% 100%;background-size:400% 100%;animation:sheen 8s ease-in-out infinite}.skeleton--pulse .skeleton__indicator{animation:pulse 2s ease-in-out 0.5s infinite}@keyframes sheen{0%{background-position:200% 0}to{background-position:-200% 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}";

let PrestoSkeleton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.effect = 'sheen';
  }
  render() {
    return (index.h("div", { part: "base", class: {
        'skeleton': true,
        'skeleton--pulse': this.effect === 'pulse',
        'skeleton--sheen': this.effect === 'sheen',
      }, "aria-busy": "true", "aria-live": "polite" }, index.h("div", { part: "indicator", class: "skeleton__indicator" })));
  }
};
PrestoSkeleton.style = prestoSkeletonCss;

exports.presto_player_skeleton = PrestoSkeleton;
