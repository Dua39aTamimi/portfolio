
$(document).ready(function( ){
    $('.toggle-collapse').click(function(){
    $('.navbar-ul').toggleClass("collapse");
    $('.nav-item').toggleClass("nav-item-col");
    })
})
function install(){
    window.open("https://drive.google.com/file/d/1bMeKNr_Byo1D4wnWroi5emUN7v0x7Brk/view?usp=sharing");
}
const scrollAnimations = document.querySelectorAll(".sk");

function handleScroll() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    scrollAnimations.forEach((element) => {
        const elementOffset = element.getBoundingClientRect().top;

        if (elementOffset < windowHeight ) {
            element.classList.add("animate");
        }
    });
}

window.addEventListener("scroll", handleScroll);
/* 
document.addEventListener("DOMContentLoaded", function () {
    const dataList = document.getElementById("data-list");
    const items = dataList.getElementsByTagName("li");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    let currentPage = 1;
    const itemsPerPage = 3;

    function showPage(page) {
        for (let i = 0; i < items.length; i++) {
            items[i].style.display = "none";
           
        }

        for (let i = (page - 1) * itemsPerPage; i < page * itemsPerPage; i++) {
            if (items[i]) {
                items[i].style.display = "flex";
                
            }
        }
    }

    function handlePagination(direction) {
        if (direction === "prev" && currentPage > 1) {
            currentPage--;
        } else if (direction === "next" && currentPage < Math.ceil(items.length / itemsPerPage)) {
            currentPage++;
        }
        showPage(currentPage);
    }

    showPage(currentPage);

    prevButton.addEventListener("click", () => {
        handlePagination("prev");
    });

    nextButton.addEventListener("click", () => {
        handlePagination("next");
    });
});
 */