import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Tabs, Tab, Button, Menu, MenuItem, useMediaQuery, SwipeableDrawer, IconButton, List, ListItem, ListItemText } from '@material-ui/core';
import Logo from '../images/logistic-blue-logo-02.png';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import { ArrowDropDown } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import { useTheme } from '@material-ui/core/styles';

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  logo: {
    height: "4em",
    [theme.breakpoints.down("sm")]: {
      height: "3em"
    }
  },
  toolbarMargin: {
    ...theme.mixins.toolbar
  },
  toolbar: {
    minHeight: 0
  },
  tabContainer: {
    marginLeft: "auto"
  },
  tab: {
    ...theme.typography.tab,
    color: "#00000",
    fontWeight: 600,
    textTransform: "none",
    minWidth: 10,
    marginLeft: "25px",
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
      textDecoration: "none",
      color: "black"
    }
  },
  logoContainer: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  Menu: {
    color: "black",
    marginTop: "35px",
    boxShadow: "1px 1px 3px rgba(0,0,0,00.3)"
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.8,
    "&:hover": {
      opacity: 1
    }
  },
  dropButton: {
    minWidth: "20px",
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  appBar: {
    backgroundColor: "rgba(255,255,255,0.9)"
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent"
    }
  }
}))

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  }

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  }

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  }

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        if (value !== 0)
          setValue(0)
        break;
      case "/Aboutus":
        if (value !== 1)
          setValue(1)
        break;
      case "/Products":
        if (value !== 2)
          setValue(2)
        break;
      case "/Services":
        if (value !== 3)
          setValue(3)
        break;
      case "/Contactus":
        if (value !== 4)
          setValue(4)
        break;
      case "/Blogs":
        if (value !== 5)
          setValue(5)
        break;
      case "/Careers":
        if (value !== 6)
          setValue(6)
        break;
      default:
        break;
    }
  })

  const tabs = (
    <React.Fragment>
      <Tabs value={value} indicatorColor="transparent" onChange={handleChange} className={classes.tabContainer}>
        <Tab className={classes.tab} label="Home" component={Link} to="/" />
        <Tab className={classes.tab} label="About us" component={Link} to="/Aboutus" />
        <Tab className={classes.tab} label="Products" component={Link} to="/Products" />
        <Button
          area-owns={anchorEl ? "product-menu" : undefined}
          area-haspopup={anchorEl ? "true" : undefined}
          onClick={event => handleClick(event)}
          className={classes.dropButton}
          disableRipple
        >
          <ArrowDropDown />
        </Button>

        <Tab className={classes.tab} label="Services" component={Link} to="/Services" />
        <Button
          area-owns={anchorEl ? "services-menu" : undefined}
          area-haspopup={anchorEl ? "true" : undefined}
          onClick={event => handleClick(event)}
          className={classes.dropButton}
          disableRipple
        >
          <ArrowDropDown />
        </Button>

        <Tab className={classes.tab} label="Contact" component={Link} to="/Contactus" />
        <Tab className={classes.tab} label="Blogs" component={Link} to="/Blogs" />
        <Tab className={classes.tab} label="Careers" component={Link} to="/Careers" />
      </Tabs>
      <Menu classes={{ paper: classes.Menu }} elevation={0} id="product-menu" anchorEl={anchorEl} open={openMenu} onClose={handleClose} MenuListProps={{ onMouseLeave: handleClose }}>
        <MenuItem onClick={(event) => { handleMenuItemClick(event, 0); handleClose(); setValue(2) }} classes={{ root: classes.menuItem }} selected={0 === selectedIndex && value === 2}>Agrimart</MenuItem>
      </Menu>
      <Menu classes={{ paper: classes.Menu }} elevation={0} id="services-menu" anchorEl={anchorEl} open={openMenu} onClose={handleClose} MenuListProps={{ onMouseLeave: handleClose }}>
        <MenuItem onClick={(event) => { handleMenuItemClick(event, 0); handleClose(); setValue(3) }} classes={{ root: classes.menuItem }} selected={0 === selectedIndex && value === 3}>Block chain salutations</MenuItem>
        <MenuItem onClick={(event) => { handleMenuItemClick(event, 1); handleClose(); setValue(3) }} classes={{ root: classes.menuItem }} selected={1 === selectedIndex && value === 3}>Web and mobile salutations</MenuItem>
        <MenuItem onClick={(event) => { handleMenuItemClick(event, 2); handleClose(); setValue(3) }} classes={{ root: classes.menuItem }} selected={2 === selectedIndex && value === 3}>Productions</MenuItem>
        <MenuItem onClick={(event) => { handleMenuItemClick(event, 3); handleClose(); setValue(3) }} classes={{ root: classes.menuItem }} selected={3 === selectedIndex && value === 3}>Machine learning solutions</MenuItem>
      </Menu>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}>
        <List>
          <ListItem component={Link} to="/">
            <ListItemText disableTypography>Home</ListItemText>
          </ListItem>
          <ListItem component={Link} to="/about">
            <ListItemText disableTypography>About us</ListItemText>
          </ListItem>
          <ListItem component={Link} to="/products">
            <ListItemText disableTypography>Products</ListItemText>
          </ListItem>
          <ListItem component={Link} to="/services">
            <ListItemText disableTypography>Services</ListItemText>
          </ListItem>
          <ListItem component={Link} to="/contact">
            <ListItemText disableTypography>Contact</ListItemText>
          </ListItem>
          <ListItem component={Link} to="/blogs">
            <ListItemText disableTypography>Blogs</ListItemText>
          </ListItem>
          <ListItem component={Link} to="/careers">
            <ListItemText disableTypography>Careers</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon style={{ width: "50px", height: "50px" }} />
      </IconButton>
    </React.Fragment>
  )

  return (
    <>
      <ElevationScroll>
        <AppBar className={classes.appBar} color="light">
          <Toolbar className={classes.toolbar}>
            <Button component={Link} to="/" onClick={() => setValue(0)} disableRipple className={classes.logoContainer}>
              <img alt="company logo" src={Logo} className={classes.logo} />
            </Button>
            {
              matches ? drawer : tabs
            }
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* <div className={classes.toolbarMargin} /> */}
    </>
  );
}

export default Navbar;