"use client";

import { useEffect, useRef } from "react";

export default function Header({ title, subtitle }: { title: string, subtitle: string }) {

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.9;
        }
    }, []);
  return (
    <div className="w-full">
        <div className="w-full rounded-xl overflow-hidden relative">
            <div className="absolute top-10 left-10 right-10 text-white z-20">
                <div className="text-4xl font-bold uppercase">{title}</div>
                <div className="text-sm  font-extralight">{subtitle}</div>
            </div>
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[3px] backdrop-filter z-10" />
            <video ref={videoRef} src="https://paulg.ittybitcdn.com/live/space.mp4" muted autoPlay loop />
        </div>
    </div>
  );
}
