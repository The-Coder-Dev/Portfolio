"use client";

import React, { useEffect, useRef, useState } from "react";
import { Blobatar } from "@blobatar/react";
import "blobatar/motion.css";
import "blobatar/gaze.css";
import { gaze } from "blobatar/gaze";
import { happy, wink, surprised, love, smug, thinking, Expression } from "blobatar/expression";

interface InteractiveBlobatarProps {
  name?: string;
  hue?: number;
  size?: number;
  color?: string;
  className?: string;
}

const expressionsList: Expression[] = [happy, wink, surprised, love, smug, thinking];

export default function InteractiveBlobatar({
  name = "devs",
  hue = 275,
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

    // Attach gaze tracking so the eyes follow the pointer across the screen
    const gazeInstance = gaze(svg as SVGSVGElement, { target: "pointer" });

    return () => {
      gazeInstance.stop();
    };
  }, []);

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

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`inline-block cursor-pointer transition-transform duration-200 hover:scale-110 active:scale-95 select-none ${className}`}
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
