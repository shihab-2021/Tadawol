import React from "react";
import PropTypes from "prop-types";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

// Define a custom theme

const DialogLayout = ({
  children,
  open,
  setOpen,
  title,
  bgColor,
  width,
  borderRadius,
  close,
  iconColor,
  iconBg,
}) => {
  const theme = createTheme({
    components: {
      MuiDialog: {
        styleOverrides: {
          paper: {
            backgroundColor: bgColor, // Set your desired background color here
            borderRadius: borderRadius,
            padding: "0px",
            width: width,
          },
        },
      },
    },
  });

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

  function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle sx={{ m: 0, p: 0 }} {...other}>
        {children}
        {!close && (
          <>
            {onClose ? (
              <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                  position: "absolute",
                  right: 20,
                  top: 20,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <div
                  style={{
                    backgroundColor: iconBg,
                  }}
                  className={` rounded-full border-[1px] border-gray-500 w-[35px] h-[35px] flex items-center justify-center`}
                >
                  <CloseIcon sx={{ color: iconColor }} />
                </div>
              </IconButton>
            ) : null}
          </>
        )}
      </DialogTitle>
    );
  }

  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };
  const DialogContentWrapper = styled(DialogContent)(({ theme }) => ({
    // width: "300px",
    // height: "300px",
    padding: theme.spacing(2),
  }));
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <ThemeProvider theme={theme}>
      <BootstrapDialog onClose={handleClose} open={open} maxWidth="900px">
        {title && (
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          >
            {title}
          </BootstrapDialogTitle>
        )}
        {!title && (
          <>
            {!close && (
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                }}
              >
                <div
                  style={{
                    backgroundColor: iconBg,
                  }}
                  className={` rounded-full border-[1px] border-gray-500 w-[35px] h-[35px] flex items-center justify-center`}
                >
                  <CloseIcon sx={{ color: iconColor }} />
                </div>
              </IconButton>
            )}
          </>
        )}
        <DialogContentWrapper>{children}</DialogContentWrapper>
      </BootstrapDialog>
    </ThemeProvider>
  );
};

export default DialogLayout;
