const array = [];

class Employee {
  constructor(img, firstName, lastName, email, city, phone, address, birthday) {
    this.img = img;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.city = city;
    this.phone = phone;
    this.address = address;
    this.birthday = birthday;
  }
}

// FETCH FUNCTIONS

function fetchData(url) {
  return fetch(url)
    .then(response => response.json())
    .then(data => data.results[0])
    .catch(err => console.log(err));
}

fetchData("https://randomuser.me/api/").then(data => generateArray(data));

// HELPER FUNCTIONS

function generateArray(data) {
  const userObject = new Employee(
    `${data.picture.medium}`,
    `${data.name.first.capitalize()}`,
    `${data.name.first.capitalize()}`,
    `${data.email}`,
    `${data.location.city.capitalize()}`,
    `${data.phone}`,
    `${data.location.street.capitalize()}, ${data.location.state.capitalize()}, ${
      data.location.postcode
    }`,
    `${data.dob.date.substring(2, 10)}`
  );
  array.push(userObject);
}

function generateHTML(arr) {
  const container = document.getElementsByClassName("container")[0];
  arr.forEach(employee => {
    const htmlTag = `
        <div class="card">
        <img
        id="card-image"
        src="${employee.img}"
        />
        <div class="card-inner">
        <h2 class="card-name">${employee.firstName} ${employee.lastName}</h2>
        <p class="card-email">${employee.email}</p>
        <p class="card-city">${employee.city}</p>
        </div>
    </div>
    `;
    container.innerHTML += htmlTag;
  });
}

// MODAL
// const modal = document.getElementById("simpleModal");
// const modalBtn = document.getElementById("modalBtn");
// const closeBtn = document.getElementsByClassName("closeBtn")[0];

// modalBtn.addEventListener("click", openModal);
// closeBtn.addEventListener("click", closeModal);
// window.addEventListener("click", clickOutside);

// function openModal() {
//   modal.style.display = "block";
// }

// function closeModal() {
//   modal.style.display = "none";
// }

// function clickOutside(e) {
//   if (e.target == modal) {
//     modal.style.display = "none";
//   }
// }

// CAPITALIZE FUNCTION capitalize()
String.prototype.capitalize = function() {
  return this.replace(/(?:^|\s)\S/g, function(a) {
    return a.toUpperCase();
  });
};
