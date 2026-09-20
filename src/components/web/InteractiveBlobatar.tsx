"use client";

import React, { useEffect, useRef, useState } from "react";
import { Blobatar } from "@blobatar/react";
import "blobatar/motion.css";
import "blobatar/gaze.css";
import { gaze } from "blobatar/gaze";
import { happy, wink, surprised, love, smug, thinking, Expression, sad, shy, scared } from "blobatar/expression";

interface InteractiveBlobatarProps {
  name?: string;
  hue?: number;
  size?: number;
  color?: string;
  className?: string;
}

const expressionsList: Expression[] = [happy, wink, surprised, love, smug, thinking, sad, shy, scared];

export default function InteractiveBlobatar({
  name = "devs",
  hue = 35,
  size = 40,
  color = "#F94500",
  className = "",
}: InteractiveBlobatarProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentExpression, setCurrentExpression] = useState<Expression | undefined>(undefined);
  const [exprIndex, setExprIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    // Target the SVG rendered by Blobatar
    const svg = containerRef.current.querySelector("svg");
    if (!svg) return;

    // Set --mo-track-travel in CSS pixels for the eye travel radius
    const travelDistance = `${Math.max(3.5, size * 0.05)}px`;
    svg.style.setProperty("--mo-track-travel", travelDistance);
    containerRef.current.style.setProperty("--mo-track-travel", travelDistance);

    // Attach gaze tracking so eyes track pointer movement dynamically across viewport
    const gazeInstance = gaze(svg as SVGSVGElement, { target: "pointer" });
    gazeInstance.lookAt("pointer");

    const timer = setTimeout(() => {
      gazeInstance.remeasure();
    }, 50);

    return () => {
      clearTimeout(timer);
      gazeInstance.stop();
    };
  }, [size, name, hue, color, currentExpression]);

  const handleClick = () => {
    const nextIdx = (exprIndex + 1) % expressionsList.length;
    setExprIndex(nextIdx);
    setCurrentExpression(expressionsList[nextIdx]);
  };

  const handleMouseEnter = () => {
    if (!currentExpression) {
      setCurrentExpression(happy);
    }
  };

  const handleMouseLeave = () => {
    setCurrentExpression(undefined);
  };

  const travelPx = `${Math.max(3.5, size * 0.05)}px`;

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`inline-block cursor-pointer transition-transform duration-200 hover:scale-110 active:scale-95 select-none ${className}`}
      style={{ "--mo-track-travel": travelPx } as React.CSSProperties}
      title="Click or hover to interact with me!"
    >
      <Blobatar
        name={name}
        hue={hue}
        animate="always"
        size={size}
        color={color}
        expression={currentExpression}
      />
    </div>
  );
}
