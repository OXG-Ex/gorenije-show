import {IconButton} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";

import * as React from "react";

interface Props {
  children?: React.ReactElement<{elevation?: number}>;
}

function ElevationScroll(props: Props) {
  const {children} = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window,
  });

  return children
    ? React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
      })
    : null;
}

export const AppHeader = (props: Props) => {
  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar className="flex justify-between">
            <Typography variant="h6" component="div">
              ГОРЕНЬЕ ЛОГО
            </Typography>
            <div className="flex gap-2">
              <IconButton size="large" className="w-10">
                <WhatsAppIcon />
              </IconButton>

              <IconButton>
                <TelegramIcon />
              </IconButton>

              <IconButton>
                <YouTubeIcon />
              </IconButton>

              <div className="flex flex-col gap-1.5 pt-2">
                <Typography variant="h5" component="div">
                  8-800-555-35-35
                </Typography>
                <Typography variant="body1" component="div">
                  Заказать звонок
                </Typography>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
};
