function search() {
    console.log("search clicked");
    let userInput = document.getElementById("search").value;
    var text = document.getElementById("sweet-tod");
    text.style.display = "block";
    fetch("http://127.0.0.1:5000/search/" + userInput).then(response => response.json()).then(response => {
        console.log(response);
        let myDisplay = document.getElementById("display");
        let val = (response);
        let myRecipe = val.hits[0].recipe.label;
        console.log(myRecipe);
        myDisplay.innerHTML = myRecipe;

    })

}

// function clicked() {
//     console.log("clicked")
//     let userInput = document.getElementById("user-input").value;
//     fetch("http://127.0.0.1:5000/input/" + userInput).then(response => response.json()).then(response => {
//         console.log(response);
//         document.getElementById('display').innerHTML = response.user;
//     })
// }