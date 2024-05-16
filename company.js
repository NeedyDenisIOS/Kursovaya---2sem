document.addEventListener("DOMContentLoaded", function() {
    let currentImageIndex = 0;
    const images = document.querySelectorAll(".anim img");
    let interval;

    function switchImage() {
        images[currentImageIndex].classList.remove("active");
        currentImageIndex++;
        if (currentImageIndex >= images.length) {
            currentImageIndex = 0;
        }
        images[currentImageIndex].classList.add("active");
    }

    interval = setInterval(switchImage, 5000);

    images[images.length - 1].addEventListener("transitionend", function() {
        clearInterval(interval);
        interval = setInterval(switchImage, 5000);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const search = document.querySelector('.search');
    const menuOverlay = document.querySelector('.menu-overlay');
    const poisk = document.querySelector('.poisk');

   
    const initialPoiskDisplay = window.getComputedStyle(poisk).getPropertyValue('display');

    burger.addEventListener('click', toggleMenuOverlay);
    search.addEventListener('click', togglePoisk);

    function toggleMenuOverlay() {
        if (menuOverlay.style.display === 'block') {
            menuOverlay.style.display = 'none'; 
        } else {
            menuOverlay.style.display = 'block'; 
        }
        
        poisk.style.display = initialPoiskDisplay;
    }

    function togglePoisk() {
    if (poisk.style.display === 'block' || poisk.style.display === 'flex') {
        poisk.style.display = 'none'; 
    } else {
        poisk.style.display = 'flex'; 
    }
    if (menuOverlay.style.display === 'block') {
        menuOverlay.style.display = 'none'; 
    }
}



});


        function submitForm(event) {
    event.preventDefault(); 

    const searchInput = document.getElementById('searchInput');
    const inputValue = searchInput.value.trim();

    if (inputValue !== '') {
        console.log('Отправка формы с содержимым:', inputValue);
        searchInput.value = ''; 
    } else {
        console.log('Поле ввода пустое. Ничего не отправлено.');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');

    searchForm.addEventListener('submit', submitForm);
});