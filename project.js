let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

// a for loop that remove active class name from all the class name
// hide li when you click on new tab (tab-titles)
function opentab(tabname){
  for(tablink of tablinks){
        tablink.classList.remove("active-link");
  }
  for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
 
let sidemenu = document.getElementById("sidemenu")

function openmenu(){
  sidemenu.style.right = "0"
};

function closemenu(){
  sidemenu.style.right = "-200px"
};

const scriptURL = 'https://script.google.com/macros/s/AKfycbwrjqsxJ5IC1Lb7KKzg7y95V2ZwZxppO3xHtYx60Y1X8pNmyqdGxo6DLZLazenuPW7woQ/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent"
        setTimeout(function(){
          msg.innerHTML = ""
        },4000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
    })


