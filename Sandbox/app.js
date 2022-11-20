const $ = document.querySelector.bind(document);

const modal = $('.modal');
const openModalBtn = $('.openbtn button');
const closei = $('.header i');
const closebtn = $('.footer button');

function toggle() {
    modal.classList.toggle('hide');
}

openModalBtn.addEventListener('click', toggle);
closei.addEventListener('click', toggle);
closebtn.addEventListener('click', toggle);

modal.addEventListener("click", (e) => {
  
    if (e.target == e.currentTarget)
  
    toggle();
    console.log(e.target);
    console.log( '1' ,e.currentTarget);
}); 


