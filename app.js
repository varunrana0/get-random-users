const randomImageButton = document.querySelector(".random_image");
const div = document.querySelector(".image_box");

// random user api
// randomuser.me/api/

https: randomImageButton.addEventListener("click", getRandomImage);
function handleErrors(error) {
  throw new Error(error);
}

function getRandomImage() {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => {
      let everyUser = data.results;
      let output = "";

      //loop over every users
      everyUser.forEach((users) => {
        if (users.gender !== "male") {
          output += `<img style="border-color:pink" src="${users.picture.large}"/>
          <h2>${users.name.title} ${users.name.first} ${users.name.last}</h2>
          <a href="tel:+">${users.phone}</a><br/>
          <a href="mailto:">${users.email}</a>`;
        } else {
          output += ` 
          <img style="border-color:green" src="${users.picture.large}"/>
          <h2>${users.name.title} ${users.name.first} ${users.name.last}</h2>
          <a href="tel:+">${users.phone}</a><br/>
          <a href="mailto:">${users.email}</a>
          `;
        }
      });

      div.innerHTML = output;
    })
    .catch(handleErrors);
}
