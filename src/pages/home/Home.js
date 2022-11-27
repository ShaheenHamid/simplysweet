import React from "react";
import "./home.css";
import assortmentPic from '/Users/zainab/simplysweet/src/Images/Assortment.JPG';
import blueberryCake from "/Users/zainab/simplysweet/src/Images/BlueberryCake.JPG";
import heartCake from "/Users/zainab/simplysweet/src/Images/HeartCake.jpg"
import sideAssortment from "/Users/zainab/simplysweet/src/Images/sideAssortment.png";
import whiteLogo from "/Users/zainab/simplysweet/src/Images/simplySweetWhiteLogo.png";
export default function TopBar(){
    return(
        <div className = "welcomePage">
            <div className = "pictureCollage">
                
                
                <img src = {assortmentPic} className = "Image1"/>
                <img src = {heartCake} className = "Image2"/>
                <img src =  {sideAssortment} className = "Image3"/>

            </div>

            <div className = "logoDesign"> 

                <img src = {whiteLogo} className = "whiteLogo"/>


                <a  type="button" href = "/menu" class="btn btn-light btn-lg rounded-0 1">
                    Menu
                </a>
            </div>  
           

            


            
        </div>
    )
}

