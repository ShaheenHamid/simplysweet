import React from 'react';
import "./aboutus.css";
import assortmentPic from "/Users/zainab/simplysweet/src/Images/Assortment.JPG";
export default function About(){
    return(
       

            <div className = "aboutUsFlex">
            <img className = "topImage" src = {assortmentPic}/>

                <p className = 'aboutUsText'>
                    <div className = "body">
                        <h1 className = "heading">
                            Simply Sweets: Our Story
                        </h1>
                        <p>
                                    
                            Simply Sweets is the best place to get tasty and beautiful homemade desserts. Warm chocolate chip and sugar cookies. Delectable and beautiful cakes. Flavorful and authentic South Asian Sweets. Founded by Shaheen Hamid in 2022, Simply Sweets only uses the finest ingredients and has a wide variety of flavors and options for any event. 
                                
                            Shaheen Hamid has been baking delicious treats for her family and friends for many years now. Her favorite confection to bake is 
                        </p>
                    </div>
                </p>
            </div>     
                
                
            
       

        
    )
}