function clicked() {
    console.log("clicked")
    let userInput = document.getElementById("user-input").value;
    fetch("http://127.0.0.1:5000/input/" + userInput).then(response => response.json()).then(response => {
        console.log(response);
        document.getElementById('display').innerHTML = response.user;
    })
}