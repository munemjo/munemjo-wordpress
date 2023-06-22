import { Component, Host, h } from '@stencil/core';
export class PrestoModernSkin {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "presto-modern-skin"; }
  static get originalStyleUrls() { return {
    "$": ["presto-modern-skin.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["presto-modern-skin.css"]
  }; }
}
