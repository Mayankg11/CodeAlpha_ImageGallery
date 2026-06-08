let btns = document.querySelectorAll(".filter-btn");
let cards = document.querySelectorAll(".image");

for(let i = 0; i < btns.length; i++){

    btns[i].addEventListener("click", function(){

        document.querySelector(".active").classList.remove("active");
        this.classList.add("active");

        let category = this.getAttribute("data-filter");

        for(let j = 0; j < cards.length; j++){

            if(category === "all"){
                cards[j].classList.remove("hide");
            }

            else if(cards[j].classList.contains(category)){
                cards[j].classList.remove("hide");
            }

            else{
                cards[j].classList.add("hide");
            }
        }
    });
}


let pics = document.querySelectorAll(".image img");

let popup = document.querySelector(".lightbox");

let popupImage = document.querySelector(".lightbox-img");

let closeIcon = document.querySelector(".close");

let leftBtn = document.querySelector(".prev");

let rightBtn = document.querySelector(".next");

let index = 0;


for(let i = 0; i < pics.length; i++){

    pics[i].addEventListener("click", function(){

        index = i;

        popup.style.display = "flex";

        popupImage.src = pics[i].src;
    });
}


closeIcon.addEventListener("click", function(){

    popup.style.display = "none";
});


rightBtn.addEventListener("click", function(){

    index++;

    if(index >= pics.length){

        index = 0;
    }

    popupImage.src = pics[index].src;
});


leftBtn.addEventListener("click", function(){

    index--;

    if(index < 0){

        index = pics.length - 1;
    }

    popupImage.src = pics[index].src;
});


popup.addEventListener("click", function(event){

    if(event.target === popup){

        popup.style.display = "none";
    }
});
