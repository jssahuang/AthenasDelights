function upload() {
    console.log("recipe uploaded");
    let recipeName = document.getElementById("name").value;
    let recipeIngredients = document.getElementById("ingredients").value;
    let recipeInstructions = document.getElementById("instructions").value;
    let myRecipe = {
        name: recipeName,
        ingredients: recipeIngredients,
        instructions: recipeInstructions
    }
    fetch("http://127.0.0.1:5000/upload/", {
        method: 'POST',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(myRecipe)
    })
        .then(response => {

            // window.location.replace("./uploadsuccessful.html");
        })
}

function clicked() {
    console.log("clicked")
    let userInput = document.getElementById("user-input").value;
    fetch("http://127.0.0.1:5000/input/" + userInput).then(response => response.json()).then(response => {
        console.log(response);
        document.getElementById('display').innerHTML = response.user;
    })
}