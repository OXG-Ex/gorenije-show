import {
  Container,
  Dialog,
  Link,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import clsx from "clsx";
import {useState, type FC} from "react";
import {ContactUsForm} from "../components/ContactUsForm";
import {Transition} from "../components/Transition";
import {dataPolitic} from "../lib/consts";

export const Footer: FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Container className="pb-6">
        <div className={clsx("flex gap-15", isMobile && "flex-col")}>
          <div className=" flex flex-col gap-4">
            <Typography
              variant="h3"
              className={clsx(
                isMobile && "flex w-full items-center justify-center"
              )}
            >
              КОНТАКТЫ
            </Typography>

            <div
              className={clsx(
                "flex flex-col gap-4",
                isMobile && "items-center"
              )}
            >
              <Link
                href="tel:88005553535"
                className="flex gap-4 items-center"
                target="_blank"
                rel="noref"
              >
                <div
                  className={clsx(
                    " flex rounded-4xl items-center justify-center transition-colors duration-300",
                    isMobile ? "w-12 h-12 border-2" : "w-14 h-14 border-4"
                  )}
                >
                  <PhoneAndroidIcon />
                </div>
                <Typography
                  variant={isMobile ? "h5" : "h4"}
                  fontWeight={600}
                  className="transition-colors duration-300"
                >
                  +7 (800) 555-35-35
                </Typography>
              </Link>

              <Link
                href="https://t.me/oxgex"
                className="flex gap-4 items-center"
                target="_blank"
                rel="noref"
              >
                <div
                  className={clsx(
                    " flex rounded-4xl items-center justify-center transition-colors duration-300",
                    isMobile ? "w-12 h-12 border-2" : "w-14 h-14 border-4"
                  )}
                >
                  <TelegramIcon />
                </div>
                <Typography
                  variant={isMobile ? "h5" : "h4"}
                  fontWeight={600}
                  className="transition-colors duration-300"
                >
                  Мы в Telegram
                </Typography>
              </Link>

              <Link
                href="https://wa.me/88005553535"
                className="flex gap-4 items-center"
                target="_blank"
                rel="noref"
              >
                <div
                  className={clsx(
                    " flex rounded-4xl items-center justify-center transition-colors duration-300",
                    isMobile ? "w-12 h-12 border-2" : "w-14 h-14 border-4"
                  )}
                >
                  <WhatsAppIcon />
                </div>
                <Typography
                  variant={isMobile ? "h5" : "h4"}
                  fontWeight={600}
                  className="transition-colors duration-300"
                >
                  Мы в WhatsApp
                </Typography>
              </Link>
            </div>
          </div>
          <div className=" flex flex-col gap-4 self-stretch max-w-full grow">
            <ContactUsForm />
          </div>
        </div>
      </Container>
      <Toolbar className="border-t ">
        <Container className="flex items-center justify-between">
          <Typography>© 2025 www.gorenije-show.ru</Typography>
          {/* <Typography>Политика конфиденциальности</Typography> */}

          <Link component={"button"} onClick={handleOpen}>
            {/* Открыть технический райдер */}
            <Typography>Политика конфиденциальности</Typography>
          </Link>

          <Dialog
            open={open}
            slots={{
              transition: Transition,
            }}
            onClose={handleClose}
          >
            <div className="flex flex-col px-4 py-6 gap-6">
              <Typography variant="h5" className=" flex items-center">
                Политика в отношении обработки персональных данных
              </Typography>
              {dataPolitic}
            </div>
          </Dialog>
        </Container>
      </Toolbar>
    </>
  );
};
