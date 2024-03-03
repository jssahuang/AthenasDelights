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

    fetch("https://athena-sdelights.wl.r.appspot.com/upload/", {
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
//
function clicked() {
    console.log("clicked")
    let userInput = document.getElementById("user-input").value;
    fetch("https://athena-sdelights.wl.r.appspot.com/input/" + userInput).then(response => response.json()).then(response => {
        console.log(response);
        document.getElementById('display').innerHTML = response.user;
    })
}