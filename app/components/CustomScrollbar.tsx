"use client";
import { useEffect, useState, useCallback } from "react";

const CustomScrollbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(0);
  const [thumbTop, setThumbTop] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const updateScrollbar = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

    setScrollProgress(progress);

    // Calculate thumb dimensions
    const viewportHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const thumbHeightRatio = viewportHeight / documentHeight;
    const calculatedThumbHeight = Math.max(
      40,
      viewportHeight * thumbHeightRatio
    );

    setThumbHeight(calculatedThumbHeight);

    // Calculate thumb position
    const trackHeight = viewportHeight - calculatedThumbHeight;
    const thumbPosition = (scrollTop / scrollHeight) * trackHeight;
    setThumbTop(thumbPosition);
  }, []);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      setIsDragging(true);
      setDragStart(e.clientY - thumbTop);
      document.body.classList.add("scrollbar-dragging");
      e.preventDefault();
    },
    [thumbTop]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;

      const trackHeight = window.innerHeight - thumbHeight;
      const newThumbTop = Math.max(
        0,
        Math.min(trackHeight, e.clientY - dragStart)
      );

      const scrollRatio = newThumbTop / trackHeight;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const newScrollTop = scrollRatio * maxScroll;

      window.scrollTo(0, newScrollTop);
    },
    [isDragging, thumbHeight, dragStart]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    document.body.classList.remove("scrollbar-dragging");
  }, []);

  const handleTrackClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        const rect = e.currentTarget.getBoundingClientRect();
        const clickY = e.clientY - rect.top;
        const trackHeight = window.innerHeight - thumbHeight;
        const scrollRatio = (clickY - thumbHeight / 2) / trackHeight;
        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight;
        const newScrollTop = Math.max(
          0,
          Math.min(maxScroll, scrollRatio * maxScroll)
        );

        window.scrollTo({ top: newScrollTop, behavior: "smooth" });
      }
    },
    [thumbHeight]
  );

  useEffect(() => {
    // Set mounted to true after component mounts
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => updateScrollbar();
    const handleResize = () => updateScrollbar();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    // Initial calculation
    updateScrollbar();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isMounted, updateScrollbar, handleMouseMove, handleMouseUp]);

  // Don't render until component is mounted (prevents hydration issues)
  if (!isMounted) {
    return null;
  }

  // Don't render if content doesn't scroll
  if (document.documentElement.scrollHeight <= window.innerHeight) {
    return null;
  }

  return (
    <>
      {/* Progress bar at top */}
      <div className="scroll-progress">
        <div
          className="scroll-progress-bar"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Rocket Scrollbar */}
      <div className="custom-scrollbar" onClick={handleTrackClick}>
        <div
          className={`custom-scrollbar-thumb ${isDragging ? "dragging" : ""}`}
          style={{
            top: `${thumbTop}px`,
          }}
          onMouseDown={handleMouseDown}
        />
      </div>
    </>
  );
};

export default CustomScrollbar;
