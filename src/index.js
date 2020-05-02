import React from "react";
import ReactDOM from "react-dom";
import DndContext from "./DnDContext";
import { DndProvider } from "react-dnd";
import MouseBackEnd from "react-dnd-mouse-backend";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <DndProvider backend={MouseBackEnd}>
      <DndContext />
    </DndProvider>
  </React.StrictMode>,
  rootElement
);
