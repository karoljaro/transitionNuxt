export function firstScreenAnimation({ parent }: { parent: string }) {
    const parentEl = document.querySelector(parent);
    if (parentEl === null) throw new Error('parentEl has no value specified in animation');
    const header = parentEl.querySelector('.header');
    const title = parentEl.querySelector('.default-title_wrap');
    const mask = parentEl.querySelector('.page-mask');

    const tl = gsap.timeline();

    tl.to(mask, {
        opacity: 0,
    })

    tl.from(title, {
        yPercent: 100,
        opacity: 0,
        clearProps: 'all',
    });
    tl.from(header, {
        yPercent: -100,
        clearProps: 'all',
    }, '<');
}