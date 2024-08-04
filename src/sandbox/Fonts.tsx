import React from "react";
import classes from "./fonts.module.css";
export const Fonts = () => {
     return (
          <div className={classes.wrapper}>
               <div className={classes.thin}>roboto - thin</div>
               <div className={classes.light}>roboto - light</div>
               <div className={classes.regular}>roboto - regular</div>
               <div className={classes.medium}>roboto - medium</div>
               <div className={classes.bold}>roboto - bold</div>
               <div className={classes.black}>roboto - black</div>
          </div>
     );
};
