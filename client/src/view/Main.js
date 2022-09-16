import React, { useState } from "react";
import Homepage from "../components/homepage";

const Main = (props) => {
    const [recipeList, setRecipeList] = useState([]);

    return (
        <div>
            <Homepage
                recipeList={recipeList}
                setRecipeList={setRecipeList}
            />
        </div>
    );
};

export default Main;