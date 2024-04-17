// Add your code here
// Add your code here
function submitData(name,email){

    let body = document.querySelector("body")

    const  formData = {
        name : name,
        email: email,
    }
    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      };
   return fetch("http://localhost:3000/users", configurationObject)
    .then( response => response.json())
    .then(data => {
    let rando = document.createElement("div")
        rando.innerHTML = data.id
        body.appendChild(rando)
    })
    .catch(function (e) {
        let error = document.createElement("div")
        error.innerHTML = "814 Unauthorized Access"
        body.appendChild(error);
        alert("Action Could not be completed!");
        console.log(e);
      });
}
submitData("john","johndoe@gmail.com")