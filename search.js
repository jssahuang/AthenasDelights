function search() {
    console.log("search clicked");
    let userInput = document.getElementById("search").value;
    var text = document.getElementById("sweet-tod");
    text.style.display = "block";
    fetch("http://127.0.0.1:5000/search/" + userInput).then(response => response.json()).then(response => {
//    fetch("http://127.0.0.1:5000/search/" + userInput).then(jsonResp => jsonResp.json()).then(jsonResp => {
        console.log(response);
      let val = (response);
//        let edamamResp = jsonResp.edamam_resp;
//        let ninjasResp = jsonRes.ninjas_resp;
//        console.log("Edamam response:", edamamResp);
//        console.log("Ninjas response:", ninjasResp);
        let myRecipe_label = val.hits[0].recipe.label;
       console.log(myRecipe_label);
       // changing everything at val to edamamResp
       let myRecipe_ingredients = val.hits[0].recipe.ingredientLines;
       console.log(myRecipe_ingredients);
        let myRecipe_image = val.hits[0].recipe.image;
        console.log(myRecipe_image);
        let myRecipe_cuisine = val.hits[0].recipe.cuisineType;
        console.log(myRecipe_cuisine);
        let myRecipe_dietLabels = val.hits[0].recipe.dietLabels;
        console.log(myRecipe_dietLabels);
        let myRecipe_health = val.hits[0].recipe.healthLabels;
        console.log(myRecipe_health);
        let myRecipe_calories = val.hits[0].recipe.calories;
        console.log(myRecipe_calories);

//        let iframe = document.createElement('iframe');
//        iframe.src = myRecipe_url;
//        iframe.width = '100%';
//        iframe.height = '600';
//        iframe.frameBorder = '0';

        let myName = document.getElementById("name");
        myName.innerHTML = '';
        myName.innerHTML = "<p>" + myRecipe_label + "</p>";
        let myIngredients = document.getElementById("ingredients");
        myIngredients.innerHTML = '';
//        let ingredHTML = "<p>";
//        for (let i = 0; i < myRecipe_ingredients.length; i++) {
//            console.log(myRecipe_ingredients[i]);
//            ingredHTML+= (i+1) + '. ' + myRecipe_ingredients[i] + "<br>";
//        }
//        ingredHTML += "</p>";
       // myIngredients.innerHTML = ingredHTML;
        myIngredients.innerHTML = "<p>" + myRecipe_ingredients.join(', ') + "</p>";

        let myPic = document.getElementById("pic-of-recipe");
        myPic.innerHTML = '';
        myPic.innerHTML = "<p>" + "<img src='"+ myRecipe_image + "' alt= 'it is a dessert.'>" + "</p>";
        let myKeywrd = document.getElementById("keywords");
        myKeywrd.innerHTML = '';
        let keywrdHTML = "<p>";
        keywrdHTML += 'Dietary information: '+ "<br>" + myRecipe_cuisine + ', ' + myRecipe_dietLabels + ', '+ myRecipe_health.join(', ') + "<br>" + 'Calories: ' + myRecipe_calories + "</p>";
        myKeywrd.innerHTML = keywrdHTML;

        // myDisplay.appendChild(iframe);
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