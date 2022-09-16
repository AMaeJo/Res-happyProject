import React from "react";
import { Link } from "react-router-dom";
import '../App.css';


const Homepage = (props) => {

    return (
        <div className="container-1">
            <div className="banner">
                <div className="text-1">
                    <h1 style={{color:'white', fontSize:'70px', margin:'0px'}}>Res-happy</h1>
                    <h1 style={{color:'white', margin:'0px'}}>Let's get cooking!</h1>
                    <br/>
                    <h3 style={{ marginTop:'80px'}}>The place to store all your happy recipes!</h3>
                </div>

            </div>
            <div className="RecBox">
                <div className="newRec">
                    <h1>Already have 
                    <br/>
                    a Recipe?</h1>
                    <Link to={`/recipe/new`}>
                        <button>Add it!</button>
                    </Link>
                </div>
                <div className="allRec">
                    <h1>Looking for
                    <br/>
                    a Recipe?</h1>
                    <Link to={`/recipe/all`}>
                        <button>Come Take a Look!</button>
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default Homepage;

//TO-DO: Make a recipe randomizer to click on that gives you a random recipe from the database