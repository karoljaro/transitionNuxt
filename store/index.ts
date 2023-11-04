import Lenis from "@studio-freight/lenis";
import { reactive } from "vue";

export const general = reactive<{
    pageBg: string,
    isPreloaderVisible: boolean,
    scrollLenis: any,
    isTransitionStart: boolean,
    isTransitionFinish: boolean,
}>({
    pageBg: "page_black",
    isPreloaderVisible: true,
    scrollLenis: null,
    isTransitionStart: true,
    isTransitionFinish: true,
})