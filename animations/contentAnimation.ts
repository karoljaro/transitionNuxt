type CONTENT_ANIMATION_TYPE = {
    type: 'text' | 'image',
    element: string,
}

export default function contentAnimation({ type, element }: CONTENT_ANIMATION_TYPE) {
    const elements = document.querySelectorAll(element);
    
    elements.forEach((el) => {
        ScrollTrigger.create({
            trigger: el,
            animation: type === 'text' ? useAnimateText(el) : useAnimateImage(el),
        })
    })
}