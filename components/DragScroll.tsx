"use client";

import { useRef, useState, type ReactNode, type PointerEvent } from "react";

type DragState = { startX: number; scrollLeft: number };

// Horizontal drag-to-scroll row: mouse drag via pointer capture, native
// scrolling on touch (touch-action: pan-x), scroll-snap when idle.
const DragScroll = ({ children }: { children: ReactNode }) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const dragState = useRef<DragState>({ startX: 0, scrollLeft: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = scrollerRef.current;
    if (!el) return;
    setIsDragging(true);
    dragState.current = { startX: e.clientX, scrollLeft: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollLeft = dragState.current.scrollLeft - (e.clientX - dragState.current.startX);
  };

  const endDrag = (e: PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    if (scrollerRef.current?.hasPointerCapture(e.pointerId)) {
      scrollerRef.current.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <div
      ref={scrollerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      className={`flex gap-6 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide touch-pan-x cursor-grab active:cursor-grabbing ${
        isDragging ? "snap-none" : "snap-x snap-mandatory"
      }`}
    >
      {children}
    </div>
  );
};

export default DragScroll;
