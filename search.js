function search() {
    console.log("search clicked");
    let userInput = document.getElementById("search").value;
    var myDisplay = document.getElementById("sweet-tod-id");
    myDisplay.style.display = "block";
    fetch("https://athena-sdelights.wl.r.appspot.com/search/" + userInput).then(response => response.json()).then(response => {
        console.log(response);
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
        myDisplay.innerHTML = '';
        myDisplay.innerHTML =  `<div class="sweet-tod-content"><img src="${myRecipe_image}" id="resultsImg" /><div id="name"><p>${myRecipe_label}</p></div><div class="ingredients"><p>${myRecipe_ingredients}</p></div><div class="recipe"><p>${val.hits[0].recipe.url}</p></div></div> </div>`
        // myDisplay.innerHTML = "<p>" + myRecipe_label + "<br>" + myRecipe_ingredients + "<br>"
        // + "<img src='"+ myRecipe_image + "' alt= 'it is a dessert.'>" + "<br>"
        // + myRecipe_cuisine + "<br>" + myRecipe_dietLabels + "<br>" + "</p>";
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
            let likes = document.createElement("div");
            likes.className = "likes";
            likes.innerHTML = "<p>" + response[i].likes + " likes</p>";
            let button = document.createElement("button");
            button.innerHTML = "Like this recipe";
            button.addEventListener("click", function() {

                fetch("http://127.0.0.1:5000/like/", {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(response[i].name)
            })
                .then(response => response.json())
                .then(response => {

                    document.getElementsByClassName("likes")[i].innerHTML = response.likes + " likes";
                    }
                )
            })
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
            content.appendChild(likes);
            content.appendChild(button);
            myDisplay.appendChild(content);
        }
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