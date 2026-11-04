"use client";

import { useEffect } from "react";
import Lenis from "lenis";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

export { gsap, ScrollTrigger, SplitText, useGSAP };


export default function SmoothScrollWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	useEffect(() => {
		const lenis = new Lenis({
			lerp: 0.1,
		});

		const unsubscribeScroll = lenis.on("scroll", ScrollTrigger.update);

		const ticker = (time: number) => {
			lenis.raf(time * 1000);
		};

		gsap.ticker.add(ticker);

		const syncScrollLock = () => {
			const isLocked = document.body.dataset.scrollLocked === "1";

			if (isLocked) {
				lenis.stop();
			} else {
				lenis.start();
			}
		};

		syncScrollLock();

		const observer = new MutationObserver(syncScrollLock);

		observer.observe(document.body, {
			attributes: true,
			attributeFilter: ["data-scroll-locked"],
		});

		return () => {
			observer.disconnect();
			unsubscribeScroll();
			gsap.ticker.remove(ticker);
			lenis.destroy();
		};
	}, []);

	return children;
}
