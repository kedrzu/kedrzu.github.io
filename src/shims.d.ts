declare module '*.module.scss' {
    const styles: { [className: string]: string };
    export = styles;
}

declare module '*.svg' {
    const svg: typeof React.Component;
    export default svg;
}
