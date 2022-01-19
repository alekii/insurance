const tabs = document.querySelectorAll(".tabs li");
const faq = document.querySelector(".faq-right");
const qa = document.querySelectorAll(".insurancetype-qa");
const question = document.querySelectorAll(".question h4");
const hamburger=document.querySelector('.hamburger'); 
const menu = document.querySelector('.mobilemenu'); 


//Toggles menu icon, opens sidebar menu
hamburger.addEventListener('click', function(){ 
    hamburger.classList.toggle('toggle');  
    menu.classList.toggle('open'); 
}); 


//Displays content in Frequently asked questions section
function click() {
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", function () {
      const icon = tab.children[1];
      const faqs = faq.children[index]; 

      //if class exists in icon then remove it 
      qa.forEach((fa) => fa.classList.remove("open")); 
      tabs.forEach((tab) => {
        //remove previous classes
        tab.children[1].classList.remove("active");
        tab.classList.remove("active");
      }); 
      //Opens the selected index's tab, opens the first h2 content, changes icon color to light blue.
      faqs.classList.add("open");
      tab.classList.add("active");
      icon.classList.add("active");
    }); 
  });

  //change h2 color, show answer class' content which are hidden by default
  question.forEach((quiz) => {
    quiz.addEventListener("click", () => {
      const answer = quiz.nextElementSibling;
      quiz.classList.toggle('color');
      answer.classList.toggle("show");
    });
  });
}

//opens the first tab on initialization
click();
tabs[0].click(); 

//loops through 'question' class, changes h2 color to light blue and opens the first answer class paragraph content
qa.forEach(q=>{ 
    q.firstElementChild.children[1].classList.toggle('show')
    q.firstElementChild.children[0].classList.toggle('color')
     

});
