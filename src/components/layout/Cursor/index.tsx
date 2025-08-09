import { useEffect, useRef, useState } from "react";

const Cursor = () => {
  const cursorDotOutline = useRef<HTMLDivElement | null>(null);
  const cursorDot = useRef<HTMLDivElement | null>(null);
  const requestRef = useRef<number>(0);
  const previousTimeRef = useRef<number>(0);
  let [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);
  let cursorVisible = useRef<boolean>(false);
  let cursorEnlarged = useRef<boolean>(false);

  /**
   * Mouse Moves
   */
  const onMouseMove = (event: MouseEvent) => {
    const { pageX: x, pageY: y } = event;
    setMousePosition({ x, y });
    positionDot(event);
  };
  const onMouseEnter = () => {
    cursorVisible.current = true;
    toggleCursorVisibility();
  };
  const onMouseLeave = () => {
    cursorVisible.current = false;
    toggleCursorVisibility();
  };
  const onMouseDown = () => {
    cursorEnlarged.current = true;
    toggleCursorSize();
  };
  const onMouseUp = () => {
    cursorEnlarged.current = false;
    toggleCursorSize();
  };
  const onResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  /**
   * Hooks
   */
  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    window.addEventListener("resize", onResize);
    requestRef.current = requestAnimationFrame(animateDotOutline);

    // Handle Link Hovers
    // handleLinkHovers();
    // handleButtonHovers();
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  useEffect(() => {
    handleLinkHovers();
    handleColorChange();
  }, [cursorEnlarged]);

  let { x, y } = mousePosition;
  const winDimensions = { width, height };
  let endX = winDimensions.width / 2;
  let endY = winDimensions.height / 2;

  /**
   * Position Dot (cursor)
   * @param {event}
   */
  function positionDot(e: MouseEvent) {
    cursorVisible.current = true;
    toggleCursorVisibility();
    // Position the dot
    endX = e.pageX;
    endY = e.pageY;
    if (cursorDot.current) {
      cursorDot.current.style.top = endY + "px";
      cursorDot.current.style.left = endX + "px";
    }
  }

  /**
   * Toggle Cursor Visiblity
   */
  function toggleCursorVisibility() {
    if (cursorVisible.current) {
      if (cursorDot.current) cursorDot.current.style.opacity = "1";
      if (cursorDotOutline.current)
        cursorDotOutline.current.style.opacity = "1";
    } else {
      if (cursorDot.current) cursorDot.current.style.opacity = "0";
      if (cursorDotOutline.current)
        cursorDotOutline.current.style.opacity = "0";
    }
  }

  /**
   * Toggle Cursor Size
   */
  function toggleCursorSize() {
    if (cursorEnlarged.current) {
      if (cursorDot.current)
        cursorDot.current.style.transform = "translate(-50%, -50%) scale(0.7)";
      if (cursorDotOutline.current)
        cursorDotOutline.current.style.transform =
          "translate(-50%, -50%) scale(4)";
    } else {
      if (cursorDot.current)
        cursorDot.current.style.transform = "translate(-50%, -50%) scale(1)";
      if (cursorDotOutline.current)
        cursorDotOutline.current.style.transform =
          "translate(-50%, -50%) scale(1)";
    }
  }

  function toggleCursorColor() {
    if (cursorEnlarged.current) {
      if (cursorDot.current)
        cursorDot.current.style.transform = "translate(-50%, -50%) scale(0.7)";
      if (cursorDotOutline.current) {
        cursorDotOutline.current.style.transform =
          "translate(-50%, -50%) scale(3)";
        cursorDotOutline.current.style.backgroundColor = "rgba(0,0,0,0.25)";
      }
    } else {
      if (cursorDot.current)
        cursorDot.current.style.transform = "translate(-50%, -50%) scale(1)";
      if (cursorDotOutline.current) {
        cursorDotOutline.current.style.transform =
          "translate(-50%, -50%) scale(1)";
        cursorDotOutline.current.style.backgroundColor =
          "rgba(126, 116, 241, 0.25)";
      }
    }
  }

  /**
   * Handle LInks
   * Applies mouseover/out hooks on all links
   * to trigger cursor animation
   */
  function handleLinkHovers() {
    document.querySelectorAll("a, button, .hover_size").forEach((el) => {
      el.addEventListener("mouseover", () => {
        cursorEnlarged.current = true;
        toggleCursorSize();
      });
      el.addEventListener("mouseout", () => {
        cursorEnlarged.current = false;
        toggleCursorSize();
      });
    });
  }

  function handleColorChange() {
    document.querySelectorAll(".hover_color").forEach((el) => {
      el.addEventListener("mouseover", () => {
        cursorEnlarged.current = true;
        toggleCursorColor();
      });
      el.addEventListener("mouseout", () => {
        cursorEnlarged.current = false;
        toggleCursorColor();
      });
    });
  }

  /**
   * Animate Dot Outline
   * Aniamtes cursor outline with trailing effect.
   * @param {number} time
   */
  const animateDotOutline = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      x += (endX - x) / 8;
      y += (endY - y) / 8;
      if (cursorDotOutline.current) {
        cursorDotOutline.current.style.top = y + "px";
        cursorDotOutline.current.style.left = x + "px";
      }
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animateDotOutline);
  };

  return (
    <>
      <div ref={cursorDotOutline} id="cursor-dot-outline" />
      <div ref={cursorDot} id="cursor-dot" />
    </>
  );
};

export default Cursor;
