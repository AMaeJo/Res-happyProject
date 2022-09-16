import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GetAll = (props) => {
    const [recipeList, setRecipeList] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/reshappyDB`)
            .then((res) => { setRecipeList(res.data); })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="allRecContainer">
            <div className="Banner-2">
                <div className="text-2">
                    <h1 style={{color:'white', margin:'0px'}}>All Recipes</h1>
                    <Link to={`/`} style={{paddingTop:'4px'}}>
                        <button>Homepage</button>
                    </Link>
                </div>
            </div>

            <div className="allRecipes">
                <h2 style={{color:'lightseagreen'}}>Look at all our delicious recipes....</h2>
                { recipeList.map((recipe, index) => (
                    <div key={index}>
                        <Link to={`/recipe/${recipe._id}`} style={{textDecoration:'none', color:'black'}}><h3>{recipe.name} - created by {recipe.creator}</h3></Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GetAll;