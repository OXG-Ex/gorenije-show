import {IconButton, SvgIcon, useMediaQuery, useTheme} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import clsx from "clsx";
import {Logo} from "../components/icons/Logo";
import {VkIcon} from "../components/icons/VkIcon";
import {PhoneNumber} from "../lib/consts";

export const AppHeader = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window,
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar
      color={trigger ? "primary" : "transparent"}
      sx={{boxShadow: "none", transition: "background-color 0.2s linear 0s"}}
    >
      <Toolbar className="flex justify-between">
        <SvgIcon
          className="w-[7rem] h-[7rem]"
          component={Logo}
          inheritViewBox
          color={trigger ? "warning" : "inherit"}
          sx={{
            transition: "background-color 0.2s linear 0s",
            width: "6.25rem",
            height: "4.25rem",
          }}
        />
        <div
          className={clsx(
            "flex gap-2",
            isMobile && "flex-col-reverse items-end"
          )}
        >
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
          </div>

          <div
            className={clsx(
              "flex flex-col gap-1.5 pt-2",
              isMobile && "items-end"
            )}
          >
            <Typography
              variant="h5"
              component="div"
              color={trigger ? "warning" : "default"}
              sx={{transition: "background-color 0.2s linear 0s"}}
            >
              {PhoneNumber}
            </Typography>

            {!isMobile && (
              <Typography
                variant="body1"
                component="div"
                color={trigger ? "warning" : "default"}
                sx={{transition: "background-color 0.2s linear 0s"}}
              >
                Заказать звонок
              </Typography>
            )}
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};
