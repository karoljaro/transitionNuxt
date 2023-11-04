export function useAnimateImage(el: unknown) {
    const element = (typeof el === "string") ?
        document.querySelector(el) : el;
    const tl = gsap.timeline();

    if (element) {
        tl.set(element, {
            overflow: 'hidden',
        });

        tl.fromTo(element, {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'
        }, {
            transition: 'unset',
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            duration: 0.7,
            delay: 0.1,
            clear: 'all'
        });

        return tl;
    }
}