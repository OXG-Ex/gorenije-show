import {Slide} from "@mui/material";
import type {TransitionProps} from "@mui/material/transitions";
import React from "react";

export const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown, string>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
