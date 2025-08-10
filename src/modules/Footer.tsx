import {Container, Dialog, Link, Toolbar, Typography} from "@mui/material";

import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import {useState, type FC} from "react";
import {ContactUsForm} from "../components/ContactUsForm";
import {Transition} from "../components/Transition";
import {dataPolitic} from "../lib/consts";

export const Footer: FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Container className="pb-6">
        <div className="flex gap-15">
          <div className=" flex flex-col gap-4">
            <Typography variant="h3">КОНТАКТЫ</Typography>

            <div className="flex flex-col gap-2">
              <Link
                href="tel:88005553535"
                className="flex gap-4 items-center"
                target="_blank"
                rel="noref"
              >
                <div className="w-14 h-14 rounded-4xl border-4 flex items-center justify-center transition-colors duration-300">
                  <PhoneAndroidIcon />
                </div>
                <Typography
                  variant="h4"
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
                <div className="w-14 h-14 rounded-4xl border-4 flex items-center justify-center transition-colors duration-300">
                  <TelegramIcon />
                </div>
                <Typography
                  variant="h4"
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
                <div className="w-14 h-14 rounded-4xl border-4 flex items-center justify-center transition-colors duration-300">
                  <WhatsAppIcon />
                </div>
                <Typography
                  variant="h4"
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
