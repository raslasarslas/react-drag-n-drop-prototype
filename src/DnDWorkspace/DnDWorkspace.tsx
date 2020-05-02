import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../constants";
import Instance from "./Instance/Instance";

const DnDWorkspace = () => {
  const [instances, setInstance] = useState({});

  const [collectedProps, drop] = useDrop({
    accept: [ItemTypes.CORE_MODULE, ItemTypes.MODULE_INSTANCE],
    collect: (monitor, props) => {
      //console.log(monitor);
    },
    drop: (item, monitor) => {
      console.log("Drop item ", item, monitor.getClientOffset());
      // Add intance module with his coordinate
      const position = monitor.getClientOffset();
      const instanceToken = Math.floor(Math.random() * 100000000 + 1);

      setInstance({
        ...instances,
        [instanceToken]: {
          ...item,
          x: position.x,
          y: position.y,
          instanceToken: `${instanceToken}`
        }
      });
    }
  });

  // Handle instance position change
  const changeInstancePositionChange = (newX, newY, instanceId) => {
    setInstance({
      ...instances,
      [instanceId]: { ...instances[instanceId], x: newX, y: newY }
    });
  };

  return (
    <div>
      <div ref={drop} style={{ height: "100%", backgroundColor: "blue" }}>
        <svg style={{ width: "100%", height: "100%" }}>
          {Object.keys(instances).map(key => {
            const { name, y, x, id, instanceToken } = instances[key];
            return (
              <Instance
                key={key}
                changeInstancePositionChange={changeInstancePositionChange}
                name={name}
                instanceToken={instanceToken}
                yInit={y}
                itemId={id}
                xInit={x}
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default DnDWorkspace;
