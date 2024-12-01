import React from "react";
import { FormBlock } from "@/@types/form-block.type";
import { Button } from "./ui/button";
import { useDraggable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";

const BlockBtnElement = ({ formBlock }: { formBlock: FormBlock }) => {
  const { icon: Icon, label } = formBlock.blockBtnElement;
  const draggable = useDraggable({
    id: `block-btn-${formBlock.blockType}`,
    data: {
      blockType: formBlock.blockType,
      isBlockBtnElement: true,
    },
  });
  return (
    <Button
      variant="outline"
      ref={draggable.setNodeRef}
      className={cn(
        `flex flex-col gap-2 
    h-20 w-20  cursor-grab border hover:!bg-white hover:ring-1 hover:!ring-primary`,
        draggable.isDragging && "ring-2 ring-primary shadow-xl"
      )}
      {...draggable.listeners}
      {...draggable.attributes}
    >
      <Icon className="!w-10 !h-10 !stroke-[0.9] text-gray-400 !cursor-grab" />
      <span className="text-[11.4px] -mt-1 font-semibold text-gray-500">
        {label}
      </span>
    </Button>
  );
};

export default BlockBtnElement;