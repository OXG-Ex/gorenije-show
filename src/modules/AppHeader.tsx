import {IconButton, SvgIcon} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import {FlameIcon} from "../components/icons/FlameIcon";
import {VkIcon} from "../components/icons/VkIcon";

export const AppHeader = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window,
  });

  return (
    <AppBar
      color={trigger ? "warning" : "transparent"}
      sx={{boxShadow: "none", transition: "background-color 0.2s linear 0s"}}
    >
      <Toolbar className="flex justify-between">
        <SvgIcon
          component={FlameIcon}
          inheritViewBox
          fontSize="large"
          color={trigger ? "warning" : "inherit"}
          sx={{transition: "background-color 0.2s linear 0s"}}
        />
        <div className="flex gap-2">
          <IconButton
            size="large"
            className="w-10"
            color={trigger ? "warning" : "default"}
            sx={{transition: "background-color 0.2s linear 0s"}}
          >
            <WhatsAppIcon />
          </IconButton>

          <IconButton
            color={trigger ? "warning" : "default"}
            sx={{transition: "background-color 0.2s linear 0s"}}
          >
            <TelegramIcon />
          </IconButton>

          <IconButton
            color={trigger ? "warning" : "default"}
            sx={{transition: "background-color 0.2s linear 0s"}}
          >
            <SvgIcon component={VkIcon} inheritViewBox />
          </IconButton>

          <div className="flex flex-col gap-1.5 pt-2">
            <Typography
              variant="h5"
              component="div"
              color={trigger ? "warning" : "default"}
              sx={{transition: "background-color 0.2s linear 0s"}}
            >
              8-800-555-35-35
            </Typography>
            <Typography
              variant="body1"
              component="div"
              color={trigger ? "warning" : "default"}
              sx={{transition: "background-color 0.2s linear 0s"}}
            >
              Заказать звонок
            </Typography>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};
