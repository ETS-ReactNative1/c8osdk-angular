/*
 * Public API Surface of c8osdkangular
 */

export * from "./lib/c8o.service";
export * from "./lib/c8oUtils.service";
export * from "./lib/c8oHttpInterface.service";
//export * from "c8osdkjscore";
export * from "./c8osdk-js-core/src/index";
(window as any).global = window;
(window as any).process = window;