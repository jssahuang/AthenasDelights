function search() {
    console.log("search clicked");
    let userInput = document.getElementById("search").value;
    var text = document.getElementById("sweet-tod");
    text.style.display = "block";
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

// function clicked() {
//     console.log("clicked")
//     let userInput = document.getElementById("user-input").value;
//     fetch("http://127.0.0.1:5000/input/" + userInput).then(response => response.json()).then(response => {
//         console.log(response);
//         document.getElementById('display').innerHTML = response.user;
//     })
// }