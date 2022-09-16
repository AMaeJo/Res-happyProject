import React, { useState, useEffect } from "react";
import {useNavigate, Link, useParams} from 'react-router-dom';
import axios from "axios";
import '../App.css';

const GetOne = (props) => {
    const { id } = useParams();
    const [oneRecipe, setOneRecipe] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/reshappyDB/${id}`)
            .then((res) => { setOneRecipe(res.data); })
            .catch((err) => { console.log(err); });
    }, [id]);

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/reshappyDB/${id}`)
            .then((res) => {navigate(`/recipe/all`);})
            .catch((err) => {console.log(err);});
    };

    return (
        <div className="showRec">
            <div className="Banner-2">
                <div className="text-2">
                    <h1 style={{color:'white', margin:'0px'}}>Recipe Page</h1>
                    <Link to={`/`} style={{paddingTop:'4px'}}>
                        <button>Homepage</button>
                    </Link>
                </div>
                
            </div>

            <div className="allRecipes">
                <h1 style={{color:'lightseagreen'}}>{oneRecipe.name}</h1>
                <div className="showRecPage">
                    <div style={{marginRight:'5px', marginLeft:'10px'}}>
                        <div style={{color:'lightseagreen'}}>Creator:</div>
                        <div>{oneRecipe.creator}</div>
                        <br/>
                        <div style={{color:'lightseagreen'}}>Category:</div>
                        <div>{oneRecipe.category}</div>
                        <br/>
                        <div style={{color:'lightseagreen'}}>Time:</div>
                        <div>{oneRecipe.time}</div>
                        <br/>
                        <div style={{color:'lightseagreen'}}>Calories:</div> 
                        <div>{oneRecipe.calories}</div>
                    </div>
                    <div style={{width:'300px', marginLeft:'50px'}}>
                        <div style={{color:'lightseagreen'}}>Ingredients:</div>
                        <div>{oneRecipe.ingredient}</div>
                        <br/>
                        {/* <p>Measurement: {oneRecipe.measurement}</p> */}
                        <div style={{color:'lightseagreen'}}>Instructions:</div> <div>{oneRecipe.instructions}</div>
                    </div>
                </div>
                <br/>
                <div className='showButtons'>
                    <button onClick={() => navigate(`/recipe/all`)} style={{height:'30px', fontSize:'15px', margin:'5px'}}>Back</button>
                    <button onClick={() => navigate(`/recipe/edit/${id}`)} style={{height:'30px', fontSize:'15px', margin:'5px'}}>Edit Recipe</button>
                    <button onClick={deleteHandler} style={{backgroundColor:'red', height:'30px', fontSize:'15px', margin:'5px'}}>Delete Recipe</button>
                </div>
            </div>
        </div>
    );
};

export default GetOne;