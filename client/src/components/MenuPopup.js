import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { IconButton } from "@material-ui/core";
import { MoreVert, ExitToApp } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { useHistory } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#20c464",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  iconColor: { color: "#fff" },
  buttonColor: { color: "#111" },
}));

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const MenuPopup = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <IconButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.iconColor}
      >
        <MoreVert />
      </IconButton>

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={() => history.push("/join")}>
          <ListItemIcon>
            <ExitToApp fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Leave Room" />
        </StyledMenuItem>
        <StyledMenuItem onClick={() => console.log("here i")}>
          <ListItemIcon>
            <ExitToApp fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </StyledMenuItem>
      </StyledMenu>
    </ThemeProvider>
  );
};

export default MenuPopup;
