declare interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}

declare module "*.css" {
  const src: string;
  export default src;
}

declare module "*.scss" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "Config" {
  export const PUBLIC_URL: string;
  export const TITLE: string;
  export const firebaseConfig: any;
}
