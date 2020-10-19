import React from 'react';
import style from "./recipe.module.css";
const Recipe=({title,calorie,image,ingredients})=>{
    return(
        <div className={style.recipe}>
<h1>{title}</h1>
<p>{calorie}</p>
<ol>
    {ingredients.map(ingredient=>(
        <li>
            {ingredient.text}
        </li>
    ))}
</ol>
<img src={image} alt=""/>
        </div>
    );
    
}
export default Recipe;