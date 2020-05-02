import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./constants";

/**
 * Your Component
 */
export default function Module({ isDragging, name, id }) {
  const [{ opacity }, dragRef] = useDrag({
    item: { type: ItemTypes.CORE_MODULE, name, id },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    })
  });
  return (
    <div
      ref={dragRef}
      style={{ opacity, height: 30, width: 30, backgroundColor: "yellow" }}
    >
      {name}
    </div>
  );
}
