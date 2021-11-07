import Meal from "./Meal";
import "../../App.css"
export default function MealList({mealData}){
    const nutrients = mealData.nutrients;
    return(
        <main>
            <section className = "nutrients">
                <h2>{nutrients.title}</h2>
                <ul>
                    <li>calories: {nutrients.calories}</li>
                    <li>protein: {nutrients.protein}</li>
                    <li>fat: {nutrients.fat}</li>
                    <li>carbohydrates: {nutrients.carbohydrates}</li>
                </ul>
            </section>
            <section className = "meals">
                {mealData.meals.map((meal)=>{
                    return(<Meal key = {meal.id} meal = {meal} />)
                })}
            </section>
        </main>
    )
}