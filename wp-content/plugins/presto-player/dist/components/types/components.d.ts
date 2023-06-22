/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
import { ActionBarConfig, blockAttributes, BunnyConfig, ButtonLinkObject, CTA, DynamicOverlay, EmailCollection, i18nConfig, MutedOverlay, presetAttributes, prestoBranding, prestoChapters, PrestoConfig, YoutubeConfig } from "./interfaces";
export namespace Components {
    interface PrestoActionBar {
        "config": ActionBarConfig;
        "direction"?: 'rtl';
        "player": any;
        "youtube"?: YoutubeConfig;
    }
    interface PrestoActionBarController {
        "config": ActionBarConfig;
        "currentTime": number;
        "direction"?: 'rtl';
        "duration": number;
        "ended": boolean;
        "youtube"?: YoutubeConfig;
    }
    interface PrestoActionBarUi {
        "open"?: boolean;
    }
    interface PrestoAudio {
        "audioAttributes": object;
        "autoplay": boolean;
        "getRef"?: (elm?: HTMLAudioElement) => void;
        "mediaTitle": string;
        "player": any;
        "poster": string;
        "preload": string;
        "preset": presetAttributes;
        "provider": string;
        "src": string;
        "tracks": { label: string; src: string; srcLang: string }[];
    }
    interface PrestoBunny {
        "autoplay": boolean;
        "getRef"?: (elm?: HTMLVideoElement) => void;
        "player": any;
        "playsinline": boolean;
        "poster": string;
        "preload": string;
        "previewUrl": string;
        "provider": string;
        "src": string;
        "thumbnail": string;
        "tracks": { label: string; src: string; srcLang: string }[];
        "videoAttributes": object;
    }
    interface PrestoBusinessSkin {
    }
    interface PrestoCtaOverlay {
        "direction"?: 'rtl';
        "i18n": i18nConfig;
        "player": any;
        "preset": presetAttributes;
        "provider": string;
    }
    interface PrestoCtaOverlayController {
        "cta"?: CTA;
        "currentTime": number;
        "direction"?: 'rtl';
        "duration": number;
        "ended": boolean;
        "i18n": i18nConfig;
        "provider": string;
    }
    interface PrestoCtaOverlayUi {
        "allowRewatch": boolean;
        "allowSkip": boolean;
        "bottomText": string;
        "buttonLink": ButtonLinkObject;
        "buttonText": string;
        "buttonType": 'link' | 'time';
        "defaultHeadline": string;
        "direction"?: 'rtl';
        /**
          * Props
         */
        "headline": string;
        "i18n": i18nConfig;
        "provider": string;
        "showButton": boolean;
        "type": string;
    }
    interface PrestoDynamicOverlayUi {
        /**
          * When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`.
         */
        "href": string;
        "position": 'top-left' | 'top-right';
        /**
          * Tells the browser where to open the link. Only used when `href` is set.
         */
        "target": '_blank' | '_parent' | '_self' | '_top';
    }
    interface PrestoDynamicOverlays {
        "enabled": boolean;
        "overlays": Array<DynamicOverlay>;
        "player": any;
        "preset": presetAttributes;
    }
    interface PrestoEmailOverlay {
        "direction"?: 'rtl';
        "i18n": i18nConfig;
        "player": any;
        "preset": presetAttributes;
        "provider": string;
        "videoId": number;
    }
    interface PrestoEmailOverlayController {
        "currentTime": number;
        "direction"?: 'rtl';
        "duration": number;
        "emailCollection"?: EmailCollection;
        "ended": boolean;
        "i18n": i18nConfig;
        "presetId": number;
        "provider": string;
        "videoId": number;
    }
    interface PrestoEmailOverlayUi {
        "allowSkip": boolean;
        "borderRadius": number;
        "bottomText": string;
        "buttonText": string;
        "direction"?: 'rtl';
        "errorMessage": string;
        /**
          * Props
         */
        "headline": string;
        "i18n": i18nConfig;
        "isLoading": boolean;
        "provider": string;
        "type": string;
    }
    interface PrestoModernSkin {
    }
    interface PrestoMutedOverlay {
        "mutedOverlay": MutedOverlay;
        "mutedPreview": boolean;
        "preset": presetAttributes;
    }
    interface PrestoPlayer {
        "actionBar": ActionBarConfig;
        "analytics": boolean;
        "audioAttributes": object;
        "automations": boolean;
        "autoplay": boolean;
        "blockAttributes": blockAttributes;
        "branding": prestoBranding;
        "bunny": BunnyConfig;
        "chapters": prestoChapters;
        "classes": string;
        "config": PrestoConfig;
        "css"?: string;
        "currentTime": number;
        "direction"?: 'rtl';
        /**
          * Toggle Fullscreen
          * @returns Plyr
         */
        "fullscreenToggle": (open: boolean) => Promise<any>;
        /**
          * Go to and play
          * @param time number
         */
        "goToAndPlay": (time: number) => Promise<void>;
        "iconUrl": string;
        "isAdmin": boolean;
        "mediaTitle": string;
        /**
          * Remove an event listener for the specified event.
          * @param event String
          * @param func Function
          * @returns Plyr
         */
        "off": (event: string, func: Function) => Promise<any>;
        /**
          * Add an event listener for the specified event.
          * @param event String
          * @param func Function
          * @returns Plyr
         */
        "on": (event: string, func: Function) => Promise<any>;
        /**
          * Add an event listener for the specified event.
          * @param event String
          * @param func Function
          * @returns Plyr
         */
        "once": (event: string, func: Function) => Promise<any>;
        "overlays": Array<DynamicOverlay>;
        /**
          * Pause video
          * @returns Plyr
         */
        "pause": () => Promise<any>;
        /**
          * Play video
          * @returns Plyr
         */
        "play": (unmute?: boolean) => Promise<void>;
        "playsinline": boolean;
        "poster": string;
        "preload": 'metadata' | 'none' | 'auto';
        "preset": presetAttributes;
        "provider": string;
        "provider_video_id": string;
        /**
          * Play video
          * @returns Plyr
         */
        "restart": () => Promise<any>;
        "src": string;
        /**
          * Pause video
          * @returns Plyr
         */
        "stop": () => Promise<any>;
        "tracks": { label: string; src: string; srcLang: string }[];
        "type": string;
        "videoAttributes": object;
        "video_id": number;
        "youtube": YoutubeConfig;
    }
    interface PrestoPlayerButton {
        /**
          * Disables the button.
         */
        "disabled"?: boolean;
        /**
          * Tells the browser to download the linked file as this filename. Only used when `href` is set.
         */
        "download": string;
        /**
          * Draws the button with a caret for use with dropdowns, popovers, etc.
         */
        "full"?: boolean;
        /**
          * When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`.
         */
        "href": string;
        /**
          * An optional name for the button. Ignored when `href` is set.
         */
        "name": string;
        /**
          * The button's size.
         */
        "size": 'small' | 'medium' | 'large';
        /**
          * Indicates if activating the button should submit the form. Ignored when `href` is set.
         */
        "submit"?: boolean;
        /**
          * Tells the browser where to open the link. Only used when `href` is set.
         */
        "target": '_blank' | '_parent' | '_self' | '_top';
        /**
          * The button's type.
         */
        "type": 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'text';
        /**
          * An optional value for the button. Ignored when `href` is set.
         */
        "value": string;
    }
    interface PrestoPlayerSkeleton {
        "effect": 'pulse' | 'sheen' | 'none';
    }
    interface PrestoPlayerSpinner {
    }
    interface PrestoStackedSkin {
    }
    interface PrestoTimestamp {
        "time": string;
    }
    interface PrestoVideo {
        "autoplay": boolean;
        "getRef"?: (elm?: HTMLVideoElement) => void;
        "player": any;
        "playsinline": boolean;
        "poster": string;
        "preload": string;
        "provider": string;
        "src": string;
        "tracks": { label: string; src: string; srcLang: string }[];
        "videoAttributes": object;
    }
    interface PrestoVideoCurtainUi {
        /**
          * Props
         */
        "actionUrl": string;
    }
    interface PrestoVimeo {
        "getRef"?: (elm?: HTMLIFrameElement) => void;
        "player": any;
        "poster": string;
        "src": string;
    }
    interface PrestoYoutube {
        "getRef"?: (elm?: HTMLIFrameElement | HTMLVideoElement | HTMLDivElement) => void;
        "lazyLoad": boolean;
        "player": any;
        "poster": string;
        "src": string;
    }
    interface PrestoYoutubeSubscribeButton {
        "channel": string;
        "layout": string;
        "showCount": boolean;
    }
}
declare global {
    interface HTMLPrestoActionBarElement extends Components.PrestoActionBar, HTMLStencilElement {
    }
    var HTMLPrestoActionBarElement: {
        prototype: HTMLPrestoActionBarElement;
        new (): HTMLPrestoActionBarElement;
    };
    interface HTMLPrestoActionBarControllerElement extends Components.PrestoActionBarController, HTMLStencilElement {
    }
    var HTMLPrestoActionBarControllerElement: {
        prototype: HTMLPrestoActionBarControllerElement;
        new (): HTMLPrestoActionBarControllerElement;
    };
    interface HTMLPrestoActionBarUiElement extends Components.PrestoActionBarUi, HTMLStencilElement {
    }
    var HTMLPrestoActionBarUiElement: {
        prototype: HTMLPrestoActionBarUiElement;
        new (): HTMLPrestoActionBarUiElement;
    };
    interface HTMLPrestoAudioElement extends Components.PrestoAudio, HTMLStencilElement {
    }
    var HTMLPrestoAudioElement: {
        prototype: HTMLPrestoAudioElement;
        new (): HTMLPrestoAudioElement;
    };
    interface HTMLPrestoBunnyElement extends Components.PrestoBunny, HTMLStencilElement {
    }
    var HTMLPrestoBunnyElement: {
        prototype: HTMLPrestoBunnyElement;
        new (): HTMLPrestoBunnyElement;
    };
    interface HTMLPrestoBusinessSkinElement extends Components.PrestoBusinessSkin, HTMLStencilElement {
    }
    var HTMLPrestoBusinessSkinElement: {
        prototype: HTMLPrestoBusinessSkinElement;
        new (): HTMLPrestoBusinessSkinElement;
    };
    interface HTMLPrestoCtaOverlayElement extends Components.PrestoCtaOverlay, HTMLStencilElement {
    }
    var HTMLPrestoCtaOverlayElement: {
        prototype: HTMLPrestoCtaOverlayElement;
        new (): HTMLPrestoCtaOverlayElement;
    };
    interface HTMLPrestoCtaOverlayControllerElement extends Components.PrestoCtaOverlayController, HTMLStencilElement {
    }
    var HTMLPrestoCtaOverlayControllerElement: {
        prototype: HTMLPrestoCtaOverlayControllerElement;
        new (): HTMLPrestoCtaOverlayControllerElement;
    };
    interface HTMLPrestoCtaOverlayUiElement extends Components.PrestoCtaOverlayUi, HTMLStencilElement {
    }
    var HTMLPrestoCtaOverlayUiElement: {
        prototype: HTMLPrestoCtaOverlayUiElement;
        new (): HTMLPrestoCtaOverlayUiElement;
    };
    interface HTMLPrestoDynamicOverlayUiElement extends Components.PrestoDynamicOverlayUi, HTMLStencilElement {
    }
    var HTMLPrestoDynamicOverlayUiElement: {
        prototype: HTMLPrestoDynamicOverlayUiElement;
        new (): HTMLPrestoDynamicOverlayUiElement;
    };
    interface HTMLPrestoDynamicOverlaysElement extends Components.PrestoDynamicOverlays, HTMLStencilElement {
    }
    var HTMLPrestoDynamicOverlaysElement: {
        prototype: HTMLPrestoDynamicOverlaysElement;
        new (): HTMLPrestoDynamicOverlaysElement;
    };
    interface HTMLPrestoEmailOverlayElement extends Components.PrestoEmailOverlay, HTMLStencilElement {
    }
    var HTMLPrestoEmailOverlayElement: {
        prototype: HTMLPrestoEmailOverlayElement;
        new (): HTMLPrestoEmailOverlayElement;
    };
    interface HTMLPrestoEmailOverlayControllerElement extends Components.PrestoEmailOverlayController, HTMLStencilElement {
    }
    var HTMLPrestoEmailOverlayControllerElement: {
        prototype: HTMLPrestoEmailOverlayControllerElement;
        new (): HTMLPrestoEmailOverlayControllerElement;
    };
    interface HTMLPrestoEmailOverlayUiElement extends Components.PrestoEmailOverlayUi, HTMLStencilElement {
    }
    var HTMLPrestoEmailOverlayUiElement: {
        prototype: HTMLPrestoEmailOverlayUiElement;
        new (): HTMLPrestoEmailOverlayUiElement;
    };
    interface HTMLPrestoModernSkinElement extends Components.PrestoModernSkin, HTMLStencilElement {
    }
    var HTMLPrestoModernSkinElement: {
        prototype: HTMLPrestoModernSkinElement;
        new (): HTMLPrestoModernSkinElement;
    };
    interface HTMLPrestoMutedOverlayElement extends Components.PrestoMutedOverlay, HTMLStencilElement {
    }
    var HTMLPrestoMutedOverlayElement: {
        prototype: HTMLPrestoMutedOverlayElement;
        new (): HTMLPrestoMutedOverlayElement;
    };
    interface HTMLPrestoPlayerElement extends Components.PrestoPlayer, HTMLStencilElement {
    }
    var HTMLPrestoPlayerElement: {
        prototype: HTMLPrestoPlayerElement;
        new (): HTMLPrestoPlayerElement;
    };
    interface HTMLPrestoPlayerButtonElement extends Components.PrestoPlayerButton, HTMLStencilElement {
    }
    var HTMLPrestoPlayerButtonElement: {
        prototype: HTMLPrestoPlayerButtonElement;
        new (): HTMLPrestoPlayerButtonElement;
    };
    interface HTMLPrestoPlayerSkeletonElement extends Components.PrestoPlayerSkeleton, HTMLStencilElement {
    }
    var HTMLPrestoPlayerSkeletonElement: {
        prototype: HTMLPrestoPlayerSkeletonElement;
        new (): HTMLPrestoPlayerSkeletonElement;
    };
    interface HTMLPrestoPlayerSpinnerElement extends Components.PrestoPlayerSpinner, HTMLStencilElement {
    }
    var HTMLPrestoPlayerSpinnerElement: {
        prototype: HTMLPrestoPlayerSpinnerElement;
        new (): HTMLPrestoPlayerSpinnerElement;
    };
    interface HTMLPrestoStackedSkinElement extends Components.PrestoStackedSkin, HTMLStencilElement {
    }
    var HTMLPrestoStackedSkinElement: {
        prototype: HTMLPrestoStackedSkinElement;
        new (): HTMLPrestoStackedSkinElement;
    };
    interface HTMLPrestoTimestampElement extends Components.PrestoTimestamp, HTMLStencilElement {
    }
    var HTMLPrestoTimestampElement: {
        prototype: HTMLPrestoTimestampElement;
        new (): HTMLPrestoTimestampElement;
    };
    interface HTMLPrestoVideoElement extends Components.PrestoVideo, HTMLStencilElement {
    }
    var HTMLPrestoVideoElement: {
        prototype: HTMLPrestoVideoElement;
        new (): HTMLPrestoVideoElement;
    };
    interface HTMLPrestoVideoCurtainUiElement extends Components.PrestoVideoCurtainUi, HTMLStencilElement {
    }
    var HTMLPrestoVideoCurtainUiElement: {
        prototype: HTMLPrestoVideoCurtainUiElement;
        new (): HTMLPrestoVideoCurtainUiElement;
    };
    interface HTMLPrestoVimeoElement extends Components.PrestoVimeo, HTMLStencilElement {
    }
    var HTMLPrestoVimeoElement: {
        prototype: HTMLPrestoVimeoElement;
        new (): HTMLPrestoVimeoElement;
    };
    interface HTMLPrestoYoutubeElement extends Components.PrestoYoutube, HTMLStencilElement {
    }
    var HTMLPrestoYoutubeElement: {
        prototype: HTMLPrestoYoutubeElement;
        new (): HTMLPrestoYoutubeElement;
    };
    interface HTMLPrestoYoutubeSubscribeButtonElement extends Components.PrestoYoutubeSubscribeButton, HTMLStencilElement {
    }
    var HTMLPrestoYoutubeSubscribeButtonElement: {
        prototype: HTMLPrestoYoutubeSubscribeButtonElement;
        new (): HTMLPrestoYoutubeSubscribeButtonElement;
    };
    interface HTMLElementTagNameMap {
        "presto-action-bar": HTMLPrestoActionBarElement;
        "presto-action-bar-controller": HTMLPrestoActionBarControllerElement;
        "presto-action-bar-ui": HTMLPrestoActionBarUiElement;
        "presto-audio": HTMLPrestoAudioElement;
        "presto-bunny": HTMLPrestoBunnyElement;
        "presto-business-skin": HTMLPrestoBusinessSkinElement;
        "presto-cta-overlay": HTMLPrestoCtaOverlayElement;
        "presto-cta-overlay-controller": HTMLPrestoCtaOverlayControllerElement;
        "presto-cta-overlay-ui": HTMLPrestoCtaOverlayUiElement;
        "presto-dynamic-overlay-ui": HTMLPrestoDynamicOverlayUiElement;
        "presto-dynamic-overlays": HTMLPrestoDynamicOverlaysElement;
        "presto-email-overlay": HTMLPrestoEmailOverlayElement;
        "presto-email-overlay-controller": HTMLPrestoEmailOverlayControllerElement;
        "presto-email-overlay-ui": HTMLPrestoEmailOverlayUiElement;
        "presto-modern-skin": HTMLPrestoModernSkinElement;
        "presto-muted-overlay": HTMLPrestoMutedOverlayElement;
        "presto-player": HTMLPrestoPlayerElement;
        "presto-player-button": HTMLPrestoPlayerButtonElement;
        "presto-player-skeleton": HTMLPrestoPlayerSkeletonElement;
        "presto-player-spinner": HTMLPrestoPlayerSpinnerElement;
        "presto-stacked-skin": HTMLPrestoStackedSkinElement;
        "presto-timestamp": HTMLPrestoTimestampElement;
        "presto-video": HTMLPrestoVideoElement;
        "presto-video-curtain-ui": HTMLPrestoVideoCurtainUiElement;
        "presto-vimeo": HTMLPrestoVimeoElement;
        "presto-youtube": HTMLPrestoYoutubeElement;
        "presto-youtube-subscribe-button": HTMLPrestoYoutubeSubscribeButtonElement;
    }
}
declare namespace LocalJSX {
    interface PrestoActionBar {
        "config"?: ActionBarConfig;
        "direction"?: 'rtl';
        "player"?: any;
        "youtube"?: YoutubeConfig;
    }
    interface PrestoActionBarController {
        "config"?: ActionBarConfig;
        "currentTime"?: number;
        "direction"?: 'rtl';
        "duration"?: number;
        "ended"?: boolean;
        "onActionBarStateChange"?: (event: CustomEvent<boolean>) => void;
        "youtube"?: YoutubeConfig;
    }
    interface PrestoActionBarUi {
        "open"?: boolean;
    }
    interface PrestoAudio {
        "audioAttributes"?: object;
        "autoplay"?: boolean;
        "getRef"?: (elm?: HTMLAudioElement) => void;
        "mediaTitle"?: string;
        "onPauseVideo"?: (event: CustomEvent<true>) => void;
        "onPlayVideo"?: (event: CustomEvent<void>) => void;
        "player"?: any;
        "poster"?: string;
        "preload"?: string;
        "preset"?: presetAttributes;
        "provider"?: string;
        "src"?: string;
        "tracks"?: { label: string; src: string; srcLang: string }[];
    }
    interface PrestoBunny {
        "autoplay"?: boolean;
        "getRef"?: (elm?: HTMLVideoElement) => void;
        "player"?: any;
        "playsinline"?: boolean;
        "poster"?: string;
        "preload"?: string;
        "previewUrl"?: string;
        "provider"?: string;
        "src"?: string;
        "thumbnail"?: string;
        "tracks"?: { label: string; src: string; srcLang: string }[];
        "videoAttributes"?: object;
    }
    interface PrestoBusinessSkin {
    }
    interface PrestoCtaOverlay {
        "direction"?: 'rtl';
        "i18n"?: i18nConfig;
        "player"?: any;
        "preset"?: presetAttributes;
        "provider"?: string;
    }
    interface PrestoCtaOverlayController {
        "cta"?: CTA;
        "currentTime"?: number;
        "direction"?: 'rtl';
        "duration"?: number;
        "ended"?: boolean;
        "i18n"?: i18nConfig;
        "onCtaStateChange"?: (event: CustomEvent<boolean>) => void;
        "onPauseVideo"?: (event: CustomEvent<boolean>) => void;
        "onPlayVideo"?: (event: CustomEvent<void>) => void;
        "onRestartVideo"?: (event: CustomEvent<void>) => void;
        "provider"?: string;
    }
    interface PrestoCtaOverlayUi {
        "allowRewatch"?: boolean;
        "allowSkip"?: boolean;
        "bottomText"?: string;
        "buttonLink"?: ButtonLinkObject;
        "buttonText"?: string;
        "buttonType"?: 'link' | 'time';
        "defaultHeadline"?: string;
        "direction"?: 'rtl';
        /**
          * Props
         */
        "headline"?: string;
        "i18n"?: i18nConfig;
        "onRewatch"?: (event: CustomEvent<void>) => void;
        /**
          * Events
         */
        "onSkip"?: (event: CustomEvent<void>) => void;
        "provider"?: string;
        "showButton"?: boolean;
        "type"?: string;
    }
    interface PrestoDynamicOverlayUi {
        /**
          * When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`.
         */
        "href"?: string;
        "position"?: 'top-left' | 'top-right';
        /**
          * Tells the browser where to open the link. Only used when `href` is set.
         */
        "target"?: '_blank' | '_parent' | '_self' | '_top';
    }
    interface PrestoDynamicOverlays {
        "enabled"?: boolean;
        "onReloadComponent"?: (event: CustomEvent<void>) => void;
        "overlays"?: Array<DynamicOverlay>;
        "player"?: any;
        "preset"?: presetAttributes;
    }
    interface PrestoEmailOverlay {
        "direction"?: 'rtl';
        "i18n"?: i18nConfig;
        "player"?: any;
        "preset"?: presetAttributes;
        "provider"?: string;
        "videoId"?: number;
    }
    interface PrestoEmailOverlayController {
        "currentTime"?: number;
        "direction"?: 'rtl';
        "duration"?: number;
        "emailCollection"?: EmailCollection;
        "ended"?: boolean;
        "i18n"?: i18nConfig;
        "onEmailStateChange"?: (event: CustomEvent<boolean>) => void;
        "onPauseVideo"?: (event: CustomEvent<true>) => void;
        "onPlayVideo"?: (event: CustomEvent<void>) => void;
        "onRestartVideo"?: (event: CustomEvent<void>) => void;
        "presetId"?: number;
        "provider"?: string;
        "videoId"?: number;
    }
    interface PrestoEmailOverlayUi {
        "allowSkip"?: boolean;
        "borderRadius"?: number;
        "bottomText"?: string;
        "buttonText"?: string;
        "direction"?: 'rtl';
        "errorMessage"?: string;
        /**
          * Props
         */
        "headline"?: string;
        "i18n"?: i18nConfig;
        "isLoading"?: boolean;
        "onSkip"?: (event: CustomEvent<object>) => void;
        /**
          * Events
         */
        "onSubmitForm"?: (event: CustomEvent<object>) => void;
        "provider"?: string;
        "type"?: string;
    }
    interface PrestoModernSkin {
    }
    interface PrestoMutedOverlay {
        "mutedOverlay"?: MutedOverlay;
        "mutedPreview"?: boolean;
        "onPlayVideo"?: (event: CustomEvent<void>) => void;
        "preset"?: presetAttributes;
    }
    interface PrestoPlayer {
        "actionBar"?: ActionBarConfig;
        "analytics"?: boolean;
        "audioAttributes"?: object;
        "automations"?: boolean;
        "autoplay"?: boolean;
        "blockAttributes"?: blockAttributes;
        "branding"?: prestoBranding;
        "bunny"?: BunnyConfig;
        "chapters"?: prestoChapters;
        "classes"?: string;
        "config"?: PrestoConfig;
        "css"?: string;
        "currentTime"?: number;
        "direction"?: 'rtl';
        "iconUrl"?: string;
        "isAdmin"?: boolean;
        "mediaTitle"?: string;
        "onCurrentMediaPlayer"?: (event: CustomEvent<object>) => void;
        /**
          * Component loaded
         */
        "onLoaded"?: (event: CustomEvent<boolean>) => void;
        "overlays"?: Array<DynamicOverlay>;
        "playsinline"?: boolean;
        "poster"?: string;
        "preload"?: 'metadata' | 'none' | 'auto';
        "preset"?: presetAttributes;
        "provider"?: string;
        "provider_video_id"?: string;
        "src"?: string;
        "tracks"?: { label: string; src: string; srcLang: string }[];
        "type"?: string;
        "videoAttributes"?: object;
        "video_id"?: number;
        "youtube"?: YoutubeConfig;
    }
    interface PrestoPlayerButton {
        /**
          * Disables the button.
         */
        "disabled"?: boolean;
        /**
          * Tells the browser to download the linked file as this filename. Only used when `href` is set.
         */
        "download"?: string;
        /**
          * Draws the button with a caret for use with dropdowns, popovers, etc.
         */
        "full"?: boolean;
        /**
          * When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`.
         */
        "href"?: string;
        /**
          * An optional name for the button. Ignored when `href` is set.
         */
        "name"?: string;
        /**
          * Emitted when the button loses focus.
         */
        "onPrestoBlur"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when the button gains focus.
         */
        "onPrestoFocus"?: (event: CustomEvent<void>) => void;
        /**
          * The button's size.
         */
        "size"?: 'small' | 'medium' | 'large';
        /**
          * Indicates if activating the button should submit the form. Ignored when `href` is set.
         */
        "submit"?: boolean;
        /**
          * Tells the browser where to open the link. Only used when `href` is set.
         */
        "target"?: '_blank' | '_parent' | '_self' | '_top';
        /**
          * The button's type.
         */
        "type"?: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'text';
        /**
          * An optional value for the button. Ignored when `href` is set.
         */
        "value"?: string;
    }
    interface PrestoPlayerSkeleton {
        "effect"?: 'pulse' | 'sheen' | 'none';
    }
    interface PrestoPlayerSpinner {
    }
    interface PrestoStackedSkin {
    }
    interface PrestoTimestamp {
        "time"?: string;
    }
    interface PrestoVideo {
        "autoplay"?: boolean;
        "getRef"?: (elm?: HTMLVideoElement) => void;
        "player"?: any;
        "playsinline"?: boolean;
        "poster"?: string;
        "preload"?: string;
        "provider"?: string;
        "src"?: string;
        "tracks"?: { label: string; src: string; srcLang: string }[];
        "videoAttributes"?: object;
    }
    interface PrestoVideoCurtainUi {
        /**
          * Props
         */
        "actionUrl"?: string;
    }
    interface PrestoVimeo {
        "getRef"?: (elm?: HTMLIFrameElement) => void;
        "player"?: any;
        "poster"?: string;
        "src"?: string;
    }
    interface PrestoYoutube {
        "getRef"?: (elm?: HTMLIFrameElement | HTMLVideoElement | HTMLDivElement) => void;
        "lazyLoad"?: boolean;
        /**
          * Events
         */
        "onReload"?: (event: CustomEvent<string>) => void;
        "player"?: any;
        "poster"?: string;
        "src"?: string;
    }
    interface PrestoYoutubeSubscribeButton {
        "channel"?: string;
        "layout"?: string;
        "showCount"?: boolean;
    }
    interface IntrinsicElements {
        "presto-action-bar": PrestoActionBar;
        "presto-action-bar-controller": PrestoActionBarController;
        "presto-action-bar-ui": PrestoActionBarUi;
        "presto-audio": PrestoAudio;
        "presto-bunny": PrestoBunny;
        "presto-business-skin": PrestoBusinessSkin;
        "presto-cta-overlay": PrestoCtaOverlay;
        "presto-cta-overlay-controller": PrestoCtaOverlayController;
        "presto-cta-overlay-ui": PrestoCtaOverlayUi;
        "presto-dynamic-overlay-ui": PrestoDynamicOverlayUi;
        "presto-dynamic-overlays": PrestoDynamicOverlays;
        "presto-email-overlay": PrestoEmailOverlay;
        "presto-email-overlay-controller": PrestoEmailOverlayController;
        "presto-email-overlay-ui": PrestoEmailOverlayUi;
        "presto-modern-skin": PrestoModernSkin;
        "presto-muted-overlay": PrestoMutedOverlay;
        "presto-player": PrestoPlayer;
        "presto-player-button": PrestoPlayerButton;
        "presto-player-skeleton": PrestoPlayerSkeleton;
        "presto-player-spinner": PrestoPlayerSpinner;
        "presto-stacked-skin": PrestoStackedSkin;
        "presto-timestamp": PrestoTimestamp;
        "presto-video": PrestoVideo;
        "presto-video-curtain-ui": PrestoVideoCurtainUi;
        "presto-vimeo": PrestoVimeo;
        "presto-youtube": PrestoYoutube;
        "presto-youtube-subscribe-button": PrestoYoutubeSubscribeButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "presto-action-bar": LocalJSX.PrestoActionBar & JSXBase.HTMLAttributes<HTMLPrestoActionBarElement>;
            "presto-action-bar-controller": LocalJSX.PrestoActionBarController & JSXBase.HTMLAttributes<HTMLPrestoActionBarControllerElement>;
            "presto-action-bar-ui": LocalJSX.PrestoActionBarUi & JSXBase.HTMLAttributes<HTMLPrestoActionBarUiElement>;
            "presto-audio": LocalJSX.PrestoAudio & JSXBase.HTMLAttributes<HTMLPrestoAudioElement>;
            "presto-bunny": LocalJSX.PrestoBunny & JSXBase.HTMLAttributes<HTMLPrestoBunnyElement>;
            "presto-business-skin": LocalJSX.PrestoBusinessSkin & JSXBase.HTMLAttributes<HTMLPrestoBusinessSkinElement>;
            "presto-cta-overlay": LocalJSX.PrestoCtaOverlay & JSXBase.HTMLAttributes<HTMLPrestoCtaOverlayElement>;
            "presto-cta-overlay-controller": LocalJSX.PrestoCtaOverlayController & JSXBase.HTMLAttributes<HTMLPrestoCtaOverlayControllerElement>;
            "presto-cta-overlay-ui": LocalJSX.PrestoCtaOverlayUi & JSXBase.HTMLAttributes<HTMLPrestoCtaOverlayUiElement>;
            "presto-dynamic-overlay-ui": LocalJSX.PrestoDynamicOverlayUi & JSXBase.HTMLAttributes<HTMLPrestoDynamicOverlayUiElement>;
            "presto-dynamic-overlays": LocalJSX.PrestoDynamicOverlays & JSXBase.HTMLAttributes<HTMLPrestoDynamicOverlaysElement>;
            "presto-email-overlay": LocalJSX.PrestoEmailOverlay & JSXBase.HTMLAttributes<HTMLPrestoEmailOverlayElement>;
            "presto-email-overlay-controller": LocalJSX.PrestoEmailOverlayController & JSXBase.HTMLAttributes<HTMLPrestoEmailOverlayControllerElement>;
            "presto-email-overlay-ui": LocalJSX.PrestoEmailOverlayUi & JSXBase.HTMLAttributes<HTMLPrestoEmailOverlayUiElement>;
            "presto-modern-skin": LocalJSX.PrestoModernSkin & JSXBase.HTMLAttributes<HTMLPrestoModernSkinElement>;
            "presto-muted-overlay": LocalJSX.PrestoMutedOverlay & JSXBase.HTMLAttributes<HTMLPrestoMutedOverlayElement>;
            "presto-player": LocalJSX.PrestoPlayer & JSXBase.HTMLAttributes<HTMLPrestoPlayerElement>;
            "presto-player-button": LocalJSX.PrestoPlayerButton & JSXBase.HTMLAttributes<HTMLPrestoPlayerButtonElement>;
            "presto-player-skeleton": LocalJSX.PrestoPlayerSkeleton & JSXBase.HTMLAttributes<HTMLPrestoPlayerSkeletonElement>;
            "presto-player-spinner": LocalJSX.PrestoPlayerSpinner & JSXBase.HTMLAttributes<HTMLPrestoPlayerSpinnerElement>;
            "presto-stacked-skin": LocalJSX.PrestoStackedSkin & JSXBase.HTMLAttributes<HTMLPrestoStackedSkinElement>;
            "presto-timestamp": LocalJSX.PrestoTimestamp & JSXBase.HTMLAttributes<HTMLPrestoTimestampElement>;
            "presto-video": LocalJSX.PrestoVideo & JSXBase.HTMLAttributes<HTMLPrestoVideoElement>;
            "presto-video-curtain-ui": LocalJSX.PrestoVideoCurtainUi & JSXBase.HTMLAttributes<HTMLPrestoVideoCurtainUiElement>;
            "presto-vimeo": LocalJSX.PrestoVimeo & JSXBase.HTMLAttributes<HTMLPrestoVimeoElement>;
            "presto-youtube": LocalJSX.PrestoYoutube & JSXBase.HTMLAttributes<HTMLPrestoYoutubeElement>;
            "presto-youtube-subscribe-button": LocalJSX.PrestoYoutubeSubscribeButton & JSXBase.HTMLAttributes<HTMLPrestoYoutubeSubscribeButtonElement>;
        }
    }
}
