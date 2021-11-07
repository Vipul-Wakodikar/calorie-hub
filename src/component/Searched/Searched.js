import React, { useState } from "react";
import MealList from "./MealList";
import "../../App.css"
function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);
  const [api_url, setApi_Url] = useState('');
  const [isVeg,setIsVeg] = useState(false);
  function getMealData() {
    setApi_Url(`https://api.spoonacular.com/mealplanner/generate?apiKey=a60c615ee6064d6e856d775e2c075b59&timeFrame=day&veg=${isVeg}&targetCalories=${calories}`)
    fetch(
      api_url
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function handleChange(e) {
    setCalories(e.target.value);
  }
  function checkBoxHandler(){
    setIsVeg(!isVeg);
    console.log(isVeg + api_url);
  }
  return (
    <div className="App">
      <h1>Welcome to Calorie Hub</h1>
      <section className="controls">
        <input
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChange}
          className = "searchInput"
        />
        <button onClick={getMealData}>Get Daily Meal Plan</button>
        
        
      </section>
      <div>
      <input type="checkbox" value="Only Vegetarian food" onClick={getMealData} checked= {isVeg} onChange = {checkBoxHandler} className = "checkbox-style"></input>
      <label>Only veg</label>
      </div>
      {mealData && <MealList mealData={mealData} />}
    </div>
  );
}

export default App;
