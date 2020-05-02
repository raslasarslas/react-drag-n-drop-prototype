import React from "react";
import Grid from "@material-ui/core/Grid";
import Module from "./Module";
import DnDWorkspace from "./DnDWorkspace/DnDWorkspace";

/**
 * Your Component
 */
export default function Card({ isDragging, text }) {
  return (
    <Grid container>
      <Grid item md={8} style={{ width: "50%" }}>
        <DnDWorkspace />
      </Grid>
      <Grid item md={4} style={{ backgroundColor: "grey", width: "50%" }}>
        <Module name="ML" id={"id1"} />
        <Module name="DL" id={"id2"} />
      </Grid>
    </Grid>
  );
}
