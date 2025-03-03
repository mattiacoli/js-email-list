// node dom element
const listEl = document.querySelector('.user_mail_list')
const buttonEl = document.querySelector('button')

// get 10 random mail using for loop 

for (let i = 0; i < 10; i++) {

  // using fetch and Boolean API
  fetch('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(response => response.json())
    .then(data => {
      // log data
      console.log(data.response);

      // save data in a constant
      const mail = data.response

      // add mail in dom using Web API
      listEl.insertAdjacentHTML("beforeend", `<li class="list-group-item" >${mail}</li>`)
    })
    .catch(error => {
      console.error(error)
    });
}

// add event listener to button

buttonEl.addEventListener('click', () => {

  // reset list
  listEl.innerHTML = " "

  // get 10 random mails
  for (let i = 0; i < 10; i++) {

    // using fetch and Boolean API
    fetch('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(response => response.json())
      .then(data => {
        // log data
        console.log(data.response);

        // save data in a constant
        const mail = data.response

        // add mail in dom using Web API
        listEl.insertAdjacentHTML("beforeend", `<li class="list-group-item" >${mail}</li>`)


      })
      .catch(error => {
        console.error(error)
      });
  }
})




