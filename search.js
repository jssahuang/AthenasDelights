function search() {
    console.log("search clicked");
    let userInput = document.getElementById("search").value;
    var text = document.getElementById("sweet-tod");
    text.style.display = "block";
    var textx = document.getElementById("image-container");
    textx.style.display = "block";
    fetch("http://127.0.0.1:5000/search/" + userInput).then(response => response.json()).then(response => {
        console.log(response);
        let myDisplay = document.getElementById("display");
        let val = (response);

        let myRecipe_label = val.hits[0].recipe.label;
       console.log(myRecipe_label);
       let myRecipe_ingredients = val.hits[0].recipe.ingredientLines;
       console.log(myRecipe_ingredients);
        let myRecipe_image = val.hits[0].recipe.image;
        console.log(myRecipe_image);
        let myRecipe_cuisine = val.hits[0].recipe.cuisineType;
        console.log(myRecipe_cuisine);
        let myRecipe_dietLabels = val.hits[0].recipe.dietLabels;
        console.log(myRecipe_dietLabels);
        let myRecipe_url = val.hits[0].recipe.url;
        console.log(myRecipe_url);

        let iframe = document.createElement('iframe');
        iframe.src = myRecipe_url;
        iframe.width = '100%';
        iframe.height = '600';
        iframe.frameBorder = '0';


        myDisplay.innerHTML = '';
        myDisplay.innerHTML = "<p>" + myRecipe_label + "<br>" + myRecipe_ingredients + "<br>"
        + "<img src='"+ myRecipe_image + "' alt= 'it is a dessert.'>" + "<br>"
        + myRecipe_cuisine + "<br>" + myRecipe_dietLabels + "<br>" + "</p>";
        myDisplay.appendChild(iframe);
    })
    .catch(error => console.error('Error fetching data:', error));
}

function display() {
    fetch("http://127.0.0.1:5000/getRecipes/").then(response => response.json()).then(response => {
        if (Object.keys(response).length !== 0) {
            document.getElementById("sweet-tod-id").style.display = "block";
            // document.getElementById("sweet-tod-id").innerHTML = "";
            console.log("got here");
        }
        let myDisplay = document.getElementById("sweet-tod-id");
        for (let i = 0; i < Object.keys(response).length; i++) {
            let content = document.createElement("div");
            content.className = "sweet-tod-content";
            let myNameDiv = document.createElement("div");
            myNameDiv.className = "name";
            let myIngredientsDiv = document.createElement("div");
            myIngredientsDiv.className = "ingredients";
            let myRecipesDiv = document.createElement("div");
            myRecipesDiv.className = "recipe";

            let name = document.createElement("p");

            name.innerHTML = response[i].name;
            let ingredients = document.createElement("p");
            ingredients.innerHTML = response[i].ingredients;
            let recipe = document.createElement("p");
            recipe.innerHTML = response[i].instructions;
            myNameDiv.appendChild(name);
            myIngredientsDiv.appendChild(ingredients);
            myRecipesDiv.appendChild(recipe);
            content.appendChild(myNameDiv);
            content.appendChild(myIngredientsDiv);
            content.appendChild(myRecipesDiv);
            myDisplay.appendChild(content);
        //      div sweet-tod, div sweet-tod-content, div name, div ingredients, div recipe,
        }
        // if (Object.keys(response).length >= 1) {
        //     let name = document.getElementById("name");
        //     name.innerHTML = "<p>" + response[0].name + "</p>";
        //     let ingredients = document.getElementById("ingredients");
        //     ingredients.innerHTML = "<p>Ingredients</p><p>" + response[0].ingredients + "</p>"
        //     let recipe = document.getElementById("recipe");
        //     recipe.innerHTML = "<p>Recipe</p><p>" + response[0].instructions + "</p>"
        // }

    })

}



display();

// function clicked() {
//     console.log("clicked")
//     let userInput = document.getElementById("user-input").value;
//     fetch("http://127.0.0.1:5000/input/" + userInput).then(response => response.json()).then(response => {
//         console.log(response);
//         document.getElementById('display').innerHTML = response.user;
//     })
// }