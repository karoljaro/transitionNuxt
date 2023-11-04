export function useAnimateText(el: unknown) {
    const element = (typeof el === "string") ?
        document.querySelector(el) : el;
    const tl = gsap.timeline();

    if (element) {
        return tl.from(element, {
            opacity: 0,
            y: 50,
            duration: 0.7,
            delay: 0.1,
        })
    }
}