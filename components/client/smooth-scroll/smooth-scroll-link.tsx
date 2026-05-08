"use client";

import { usePathname, useRouter } from "next/navigation";

import { lenis } from "@/lib/lenis";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function SmoothScrollLink({ href, children, className }: Props) {
  const pathname = usePathname();

  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const targetId = href.split("#")[1];

    // NOT on homepage → navigate normally
    if (pathname !== "/") {
      router.push(href);

      return;
    }

    // Homepage → smooth scroll
    const element = document.getElementById(targetId);

    if (!element) return;

    lenis?.scrollTo(element, {
      offset: -120,
      duration: 1.6,
    });
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
