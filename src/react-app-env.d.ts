declare module '*.jpg' {
  const path: string;
  export default path;
}
declare module '*.png' {
  export const path: string;
  export default path;
}
declare module '*.svg' {
  const path: string;
  export default path;
}

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
};