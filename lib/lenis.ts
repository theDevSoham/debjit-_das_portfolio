import Lenis from "@studio-freight/lenis";

export let lenis: Lenis | null = null;

export function setLenis(instance: Lenis) {
  lenis = instance;
}
