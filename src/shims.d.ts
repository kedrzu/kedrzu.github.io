declare module '*.module.scss' {
    const styles: { [className: string]: string };
    export = styles;
}

declare module '*.svg' {
    const path: string;
    export default path;
}

declare module '*.png' {
    const path: string;
    export default path;
}
