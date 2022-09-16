import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import '../App.css';

const CreateRecipe = (props) => {
    const [name, setName] = useState("");
    const [creator, setCreator] = useState("");
    const [category, setCategory] = useState("");
    const [time, setTime] = useState("");
    const [calories, setCalories] = useState("");
    const [ingredient, setIngredient] = useState("");
    // const [measurement, setMeasurement] = useState("");
    const [instructions, setInstructions] = useState("");
    // const [ingredientList, setIngredientList] = useState([]);
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/reshappyDB", {
            name,
            creator,
            category,
            time,
            calories,
            ingredient,
            // measurement,
            instructions,
            // ingredient_list: ingredientList
        })
            .then((res) => {
                console.log(res.data);
                setName("");
                setCreator("");
                setCategory("");
                setTime("");
                setCalories("");
                setIngredient("");
                // setMeasurement("");
                setInstructions("");
            })
            .then((res) => {navigate(`/recipe/all`);})
            .catch((err) => {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            });
    };



    // const addIngredient = () => {
    //     setIngredientList([...ingredientList, {ingredient, measurement}]);
    //     setIngredient("");
    //     setMeasurement("");
    // }

    return (
        <div className="createRec">
            <div className="Banner-2">
                <div className="text-2">
                    <h1 style={{color:'white', margin:'0px'}}>Create Recipe</h1>
                    <Link to={`/`} style={{paddingTop:'4px'}}>
                        <button>Homepage</button>
                    </Link>
                </div>
            </div>

            <form className="RecForm" onSubmit={submitHandler}>
                <div className="form-1">
                    <div className="form-fields">
                        <label>Recipe Name: </label>
                    </div>
                    <p/>
                    <div className="form-fields">
                        <input onChange={(e) => setName(e.target.value)} value={name} name="name" type="text" />
                    </div>
                    {errors.name ? <p style={{color:'red'}}>{errors.name.message}</p> : null}
                    <br/>
                    <div className="form-fields">
                        <label>Creator: </label>
                    </div>
                    <p/>
                    <div className="form-fields">
                        <input onChange={(e) => setCreator(e.target.value)} value={creator} name="creator" type="text" />
                    </div>
                    {errors.creator ? <p style={{color:'red'}}>{errors.creator.message}</p> : null}
                    <br/>
                    <div className="form-fields">
                        <label>Category: </label>
                    </div>
                    <p/>
                    <div className="form-fields">
                        <input onChange={(e) => setCategory(e.target.value)} value={category} name="category" type="text" />
                    </div>
                    {errors.category ? <p style={{color:'red'}}>{errors.category.message}</p> : null}
                    <br/>
                    <div className="form-fields">
                        <label>Prep Time: </label>
                        <input style={{marginLeft:'7px', marginTop:'15px'}} onChange={(e) => setTime(e.target.value)} value={time} name="time" size="7" type="text" />
                    </div>
                    {errors.time ? <p style={{color:'red'}}>{errors.time.message}</p> : null}
                    <p/>
                    <div className="form-fields">
                        <label>Calories: </label>
                        <input style={{marginLeft:'22px'}} onChange={(e) => setCalories(e.target.value)} value={calories} name="calories" size="7" type="text" />
                    </div>
                    {errors.calories ? <p style={{color:'red'}}>{errors.calories.message}</p> : null}
                    <br/>
                </div>

                <div className="form-2">
                    <div className="form-fields">
                        <label>Ingredients with Measurment: </label> 
                    </div>
                        <br/>
                    <div>
                        <textarea onChange={(e) => setIngredient(e.target.value)} value={ingredient} name="ingredient" rows={5} cols={50} type="text"/> 
                    </div>
                    {errors.ingredient ? <p style={{color:'red'}}>{errors.ingredient.message}</p> : null}
                        {/* <label>Measurement: </label>
                        <input onChange={(e) => setMeasurement(e.target.value)} value={measurement} name="measurement" type="text" />
                        <br/> */}
                        {/* <button type="button" onClick={addIngredient}>Add</button> */}
                    
                    {/* {ingredientList.map((item, index) => {
                        console.log(ingredientList);
                        // console.log(item);
                        // console.log(ingredientList.length);
                        return (
                            <div key={index}>{`${item.measurement} ${item.ingredient}`}</div>
                        );
                    })} */}
                    <br/>
                    <div className="form-fields">
                        <label>Instructions: </label>
                    </div>
                    <br/>
                    <div>
                        <textarea onChange={(e) => setInstructions(e.target.value)} value={instructions} name="instructions" rows={5} cols={50} type="text" />
                    </div>
                    {errors.instructions ? <p style={{color:'red'}}>{errors.instructions.message}</p> : null}
                    <br/>
                    <div style={{display:'flex'}}>
                        <input className="submitButton" style={{margin:'10px'}} type="submit" value="create recipe"/>
                        <p/>
                        <Link to={`/`} style={{margin:'10px'}}><button>back</button></Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateRecipe;


//TO-DO: Add a drop-down menu for choosing Categories, post array of ingredients to the database, edit the edit_recipe page to reflect that