import React,{useState,useEffect} from "react"
import "../../App.css"
export default function Meal({meal}){
    const [imageUrl,setImageUrl] = useState("");
    useEffect(()=>{
        fetch(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=a60c615ee6064d6e856d775e2c075b59&includeNutrition=false`)
        .then((response) => response.json())
        .then((data) =>{
            setImageUrl(data.image);
        }).catch(()=>{
            console.log("error")
        })
    },[meal.id])
    return(
        <article>
            <img src = {imageUrl} alt = "recepie" />
            <h1>{meal.title}</h1>
            <ul className = "instruction">
                <li>Preparation time: {meal.readyInMinutes}{" minutes"}</li>
                <li>Number of servings: {meal.servings}</li>
            </ul>
            <a href = {meal.sourceUrl} target = "_blank">Go to Recepie</a>
        </article>
    )
}