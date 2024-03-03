function clicked() {
    console.log("clicked")
    let userInput = document.getElementById("user-input").value;
    fetch("http://127.0.0.1:5000/input/" + userInput).then(response => response.json()).then(response => {
        console.log(response);
        document.getElementById('display').innerHTML = response.user;
    })
}
function like() {
    console.log("liking the recipe");
    fetch("https://athena-sdelights.wl.r.appspot.com/getRecipes/").then(response => response.json()).then(response => {
        if (Object.keys(response).length >= 1) {
            fetch("https://athena-sdelights.wl.r.appspot.com/getRecipes/like/", {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(response[0].name)
            })
                .then(response => response.json())
                .then(response => {

                    document.getElementById("likes").innerHTML = response.likes + " likes";
                    }
                )
        }

    })
}



function display() {
    fetch("https://athena-sdelights.wl.r.appspot.com/getRecipes/").then(response => response.json()).then(response => {
        if (Object.keys(response).length >= 1) {
            let name = document.getElementById("name");
            name.innerHTML = "<p>" + response[0].name + "</p>";
            let ingredients = document.getElementById("ingredients");
            ingredients.innerHTML = "<p>Ingredients</p><p>" + response[0].ingredients + "</p>"
            let recipe = document.getElementById("recipe");
            recipe.innerHTML = "<p>Recipe</p><p>" + response[0].instructions + "</p>"
            let likes = document.getElementById("likes");
            likes.innerHTML = response[0].likes + " likes";

        }

    })
}

display();