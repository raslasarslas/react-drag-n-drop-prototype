import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../constants";

interface IProps {
  name: string;
  yInit: number;
  xInit: number;
  instanceToken: string;
  itemId: string;
  changeInstancePositionChange(
    newX: number,
    newY: number,
    itemId: string
  ): void;
}
const Instance = ({
  name,
  yInit,
  xInit,
  itemId,
  changeInstancePositionChange,
  instanceToken
}: IProps) => {
  const [pr, dragRef] = useDrag({
    item: { type: ItemTypes.MODULE_INSTANCE, name, id: itemId },
    collect: monitor => {
      if (monitor.isDragging()) {
        return null;
      }
      return {};
    },
    begin: monitor => {
      // When drag begin
    },
    end: (dropResult, monitor) => {
      const newPosition = monitor.getClientOffset();
      if (newPosition && newPosition.x && newPosition.y) {
        changeInstancePositionChange(
          newPosition.x,
          newPosition.y,
          instanceToken
        );
        //setPosition({ x: newPosition.x, y: newPosition.y });
      }
    }
  });

  return <rect ref={dragRef} x={xInit} y={yInit} width="80" height="30" />;
};

export default Instance;
