"use client";
import React from "react";
import { LucideIcon } from "lucide-react";

interface NeonFlickerIconProps {
  icon: LucideIcon;
  className?: string;
  color?: "spiritual" | "adventure" | "leisure";
}

const colorMap = {
  spiritual: "#B8860B",
  adventure: "#1A8A7D",
  leisure: "#E07A5F",
};

export default function NeonFlickerIcon({ icon: Icon, className, color = "spiritual" }: NeonFlickerIconProps) {
  return (
    <span className={className} style={{ color: colorMap[color] }}>
      <Icon className="w-full h-full" />
    </span>
  );
}
