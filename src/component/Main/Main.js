import { useState, useEffect } from "react";
import axios from "axios";
import "./Main.css"
const Main = () =>{
    const [isLoading,setIsLoading] = useState(true);
    const [foodDesc,setFoodDesc] = useState();
    const [foodArray, setFoodArray] = useState([]);
    useEffect(async () => {
        setIsLoading(true);
    
        try {
          const response = await axios({
            url: `https://api.spoonacular.com/recipes/716429/information?apiKey=a60c615ee6064d6e856d775e2c075b59&includeNutrition=true`,
          });
          const { data } = response;
          console.log(data);
          setFoodDesc(data);
          console.log(`Ing: ${data.dishTypes[1]}`);
          console.log(`Ing: ${"https://spoonacular.com/cdn/ingredients_100x100/"+data.extendedIngredients[1].image}`);
        setIsLoading(false);
        } catch (err) {
          console.log("Some Error occurred" + err);
        setIsLoading(false);
          
        }
      }, []);

    return(
        <>
        {isLoading ? (
            <h3>Loading...</h3>
          ) : (
            <>
                <h2>{foodDesc.title}</h2>
                <img src = {foodDesc.image} width = "auto" height = "auto" />
                <h3>Ingredients and how to prepare:</h3>
                {foodDesc.extendedIngredients.map((elem)=>{
                    return(
                        <>
                        <div className = "recepie">
                            
                                <img src={"https://spoonacular.com/cdn/ingredients_250x250/" + elem.image} className="image-card" />
                                <h3 className = "txt">{elem.nameClean}</h3>
                                <p className = "txt">{elem.originalString}</p>

                        </div>
                        </>
                    )
                    
                })}
                
            </>
          )}
          </>   
    )
}

export default Main;