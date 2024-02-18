"use client";

import { LucideIcon } from "lucide-react";

import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";

interface ToolButtonProps {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
  isActve?: boolean;
  isDisabled?: boolean;
}

export const ToolButton = ({
  label,
  icon: Icon,
  onClick,
  isActve = false,
  isDisabled = false,
}: ToolButtonProps) => {
  return (
    <Hint label={label} side="right" sideOffset={14}>
      <Button
        onClick={onClick}
        disabled={isDisabled}
        size={"icon"}
        variant={isActve ? "boardActive" : "board"}
      >
        <Icon />
      </Button>
    </Hint>
  );
};
