import {
  Button,
  Dialog,
  Paper,
  Slide,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import type {TransitionProps} from "@mui/material/transitions";
import React, {useState, type FC, type ReactNode} from "react";
import VideoPlayer from "../components/VideoPlayer";

type ShowOption = {
  type: string;
  timing: string;
  price: string;
};

interface ShowBlockProps {
  title: string;
  subtitles: string[];
  options: ShowOption[];
  riderText?: ReactNode;
  videoSrc: string;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown, string>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ShowBlock: FC<ShowBlockProps> = ({
  options,
  subtitles,
  title,
  riderText,
  videoSrc,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Paper elevation={8} className="w-[80vw]">
      <div className="flex flex-col gap-7">
        <div className="w-full flex items-center justify-center bg-amber-500 rounded-t-2xl">
          <Typography variant="h4" fontWeight={600}>
            {title.toUpperCase()}
          </Typography>
        </div>

        <div className="flex w-full gap-9 items-center p-4">
          <VideoPlayer src={videoSrc} />
          <div className="flex flex-col gap-6 w-[50%] shrink-0">
            <div className="flex flex-col gap-2">
              {subtitles.map((item) => (
                <Typography variant="h6" key={item}>{`• ${item}`}</Typography>
              ))}
            </div>

            <div>
              {options.map((row) => (
                <TableRow
                  key={row.type}
                  sx={{"&:last-child td, &:last-child th": {border: 0}}}
                >
                  <TableCell component="h5" scope="row">
                    {row.type}
                  </TableCell>
                  <TableCell align="right">{row.timing}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                </TableRow>
              ))}
            </div>

            <Button variant="outlined" onClick={handleOpen}>
              Открыть технический райдер
            </Button>

            <Dialog
              open={open}
              slots={{
                transition: Transition,
              }}
              onClose={handleClose}
            >
              <div className="flex flex-col px-4 py-6 gap-6">
                <Typography variant="h5" className=" flex items-center">
                  Технический райдер
                </Typography>
                {riderText}
              </div>
            </Dialog>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default ShowBlock;
