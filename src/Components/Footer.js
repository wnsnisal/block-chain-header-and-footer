import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography, Button } from '@material-ui/core';
import footerLogo from '../images/footerLogo.png';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import RoomIcon from '@material-ui/icons/Room';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundImage: "linear-gradient(#1C1C1C, #000000)",
    width: "100%",
    zIndex: 1392,
    position: "relative"
  },
  footerLink: {
    color: "rgba(255,255,255,0.5)",
    marginTop: "10px",
    fontSize: "0.8em"
  },
  footerHeding: {
    color: "white",
    fontSize: "1em",
    marginTop: "20px"
  },
  footerLogo: {
    width: "100%"
  },
  footerIcon: {
    color: "rgba(255,255,255,0.5)",
    fontSize: "1em"
  },
  footerContactLinks: {
    color: "rgba(255,255,255,0.8)",
    marginLeft: "20px",
    fontSize: "0.9em"
  },
  SocialLogo: {
    color: "#364FC7",
    marginRight: "10px"
  },
  subscribeText: {
    backgroundColor: "rgba(255,255,255)",
    color: "rgba(0,0,0,0.5)",
    fontSize: "0.8em",
    fontWeight: "600",
    border: 0,
    width: "100%",
    borderRadius: "3px",
    marginBottom: "20px",
    padding: "5px 10px",
    boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.5)"
  },
  subscribeButton: {
    color: "white",
    backgroundImage: "linear-gradient(#4263EB, #364FC7);",
    border: 0,
    borderRadius: "3px",
    padding: "5px 30px",
    textTransform: "none"
  }

}))


function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container>
        <Grid container direction="row" justify="space-between" style={{ paddingTop: "50px", paddingBottom: "50px" }}>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Grid container direction="column" style={{ padding: "20px" }}>
              <Grid item><img alt="company logo" src={footerLogo} className={classes.footerLogo} /></Grid>
              <Grid item className={classes.footerLink}>We help our clients to orchestrate their complex supply-chain processes in a simple and agile manner with the latest digital & cloud technologies. </Grid>
              <Grid item className={classes.footerLink}></Grid>
              <Grid item><EmailIcon className={classes.footerIcon} /><Typography className={classes.footerContactLinks} variant="p">info@logisticblocks.com</Typography></Grid>
              <Grid item><CallIcon className={classes.footerIcon} /><Typography className={classes.footerContactLinks} variant="p">(+1) 085 25 255</Typography></Grid>
              <Grid item><RoomIcon className={classes.footerIcon} /><Typography className={classes.footerContactLinks} variant="p">4177  Nancy Street,</Typography></Grid>
              <Grid item><Typography className={classes.footerContactLinks} variant="p" style={{ marginLeft: "35px" }}>Durham,</Typography></Grid>
              <Grid item><Typography className={classes.footerContactLinks} variant="p" style={{ marginLeft: "35px" }}>NC (27703) US.</Typography></Grid>
              <Grid item className={classes.footerLink}>
                <Grid container direction="row">
                  <Grid item><TwitterIcon className={classes.SocialLogo} /></Grid>
                  <Grid item><FacebookIcon className={classes.SocialLogo} /></Grid>
                  <Grid item><InstagramIcon className={classes.SocialLogo} /></Grid>
                  <Grid item><LinkedInIcon className={classes.SocialLogo} /></Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" style={{ padding: "20px" }}>
              <Grid item className={classes.footerHeding}>Quick links</Grid>
              <Grid item className={classes.footerLink} component={Link} to="/">Home</Grid>
              <Grid item className={classes.footerLink} component={Link} to="/about">About us</Grid>
              <Grid item className={classes.footerLink} component={Link} to="/produts">Products</Grid>
              <Grid item className={classes.footerLink} component={Link} to="/services">Services</Grid>
              <Grid item className={classes.footerLink} component={Link} to="/contact">Contact us</Grid>
              <Grid item className={classes.footerLink} component={Link} to="/blog">Blog</Grid>
              <Grid item className={classes.footerLink} component={Link} to="/careers">Careers</Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" style={{ padding: "20px" }}>
              <Grid item className={classes.footerHeding}>Our products</Grid>
              <Grid item className={classes.footerLink}>Agrimart</Grid>
            </Grid>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Grid container direction="column" style={{ padding: "20px" }}>
              <Grid item className={classes.footerHeding}>Subscribe us</Grid>
              <Grid item className={classes.footerHeding}>
                <Grid container direction="column">
                  <form className={classes.root} noValidate autoComplete="off">
                    <Grid item><input className={classes.subscribeText} placeholder="youremail@example.com" /></Grid>
                    <Grid item><textarea className={classes.subscribeText} placeholder="Your message" /></Grid>
                    <Grid item>
                      <Button className={classes.subscribeButton} variant="contained" color="primary">
                        Subscribe
                      </Button>
                    </Grid>
                  </form>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={12} xs={12}>
            <Grid container style={{ paddingLeft: "20px", padingRight: "20px" }}>
              <Grid item style={{ width: "100%", borderTopWidth: "1px", borderTopLength: "50%", borderTopColor: "rgba(255,255,255,0.1)", borderTopStyle: "solid" }}></Grid>
            </Grid>
            {/* <hr style={{ color: "rgba(255,255,255,0.1)", marginTop: 0, marginBottom: 0, marginLeft: "20px", marginRight: "20px", border: "1px solid rgba(255,255,255,0.3)" }} /> */}
            <Grid container direction="column" style={{ padding: "20px" }}>
              <Grid item className={classes.footerLink} style={{ color: "rgba(255,255,255,0.3)", marginTop: 0 }}>Logistics blocks © 2020 All Right Reserved</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </footer>

  );
}

export default Footer;