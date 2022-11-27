import "./menu.css"
import React from "react"
import blueberryCake from "/Users/zainab/simplysweet/src/Images/BlueberryCake.JPG"
import naankhatai from "/Users/zainab/simplysweet/src/Images/naankhatai.png"
import pineappleFreshCream from "/Users/zainab/simplysweet/src/Images/pineappleFreshCream.png"
import blackForest from "/Users/zainab/simplysweet/src/Images/blackForest.png"
import chocolateChip from "/Users/zainab/simplysweet/src/Images/chocolateChip.png"

export default function Menu(){
    return(
        <div className = "menuPage">
            <div className="heading">
                Menu
            </div>

            <div className = "food-items">
                <div class="card">
                    <img class="card-img-top" src= {blueberryCake} alt="Card image cap" height = "170vh" ></img>
                    <div class="card-body">
                        Blueberry Bundt Cake
                    </div>
                </div>

                <div class="card">
                    <img class="card-img-top" src= {pineappleFreshCream} alt="Card image cap" height = "170vh"></img>
                    <div class="card-body">
                        Pineapple Fresh Cream Cake
                    </div>
                </div>


                <div class="card">
                    <img class="card-img-top" src= {blackForest} alt="Card image cap" height = "170vh"></img>
                    <div class="card-body">
                        Black Forest Cake
                    </div>
                </div>

                <div class="card">
                    <img class="card-img-top" src= {naankhatai} alt="Card image cap" height = "170vh"></img>
                    <div class="card-body">
                        Naankhatai
                    </div>
                </div>



                <div class="card">
                    <img class="card-img-top" src= {chocolateChip} alt="Card image cap" height = "170vh"></img>
                    <div class="card-body">
                        Chocolate Chip Cookies
                    </div>
                </div>


                {/* <div class="card">
                    <img class="card-img-top" src="..." alt="Card image cap"></img>
                    <div class="card-body">
                    This is some text within a card body.
                    </div>
                </div>

                <div class="card">
                    <img class="card-img-top" src="..." alt="Card image cap"></img>
                    <div class="card-body">
                    This is some text within a card body.
                    </div>
                </div> */}

            </div>
        </div>
    )
}