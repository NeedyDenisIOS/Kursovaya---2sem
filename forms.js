document.addEventListener("DOMContentLoaded", function() {
    const selectElement = document.getElementById("car-model");
    const personalDataForm = document.getElementById("personal-data");
    const commentBlock = document.getElementById("comment-block");
    const submitButton = document.getElementById("submit-button");
    const scrollList = document.getElementById("scroll-list");

    disableForm(personalDataForm);
    disableForm(commentBlock);
    disableList(scrollList);
    submitButton.disabled = true;

    selectElement.addEventListener("change", function() {
        enableForm(personalDataForm);
    });

    personalDataForm.addEventListener("input", function() {
        const inputs = personalDataForm.querySelectorAll("input, textarea");
        let isFilled = true;
        inputs.forEach(input => {
            if (input.required && !input.value) {
                isFilled = false;
            }
        });

        if (isFilled) {
            enableList(scrollList);
        } else {
            disableList(scrollList);
        }

        if (isFilled && isListItemSelected(scrollList)) {
            enableForm(commentBlock);
            submitButton.disabled = false;
        } else {
            disableForm(commentBlock);
            submitButton.disabled = true;
        }
    });

    scrollList.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            enableForm(commentBlock);
            submitButton.disabled = false;
        }
    });

    function isListItemSelected(list) {
        const listItems = list.querySelectorAll("li");
        for (let i = 0; i < listItems.length; i++) {
            if (listItems[i].classList.contains("active")) {
                return true;
            }
        }
        return false;
    }

    function disableForm(form) {
        form.querySelectorAll("input, textarea").forEach(element => {
            element.disabled = true;
        });
    }

    function enableForm(form) {
        form.querySelectorAll("input, textarea").forEach(element => {
            element.disabled = false;
        });
    }

    function disableList(list) {
        list.style.display = "none";
    }

    function enableList(list) {
        list.style.display = "block";
    }
});


document.addEventListener("DOMContentLoaded", function() {
        const selectElement = document.getElementById("car-model");
        const carImageContainer = document.getElementById("car-image-container");
        const carImages = carImageContainer.querySelectorAll("img");
        carImages.forEach(image => {
            image.style.display = "none";
        });

        selectElement.addEventListener("change", function() {
            const selectedModel = selectElement.value;
            carImages.forEach(image => {
                if (image.alt === selectedModel) {
                    image.style.display = "block";
                } else {
                    image.style.display = "none";
                }
            });
        });
    });


    document.addEventListener("DOMContentLoaded", function() {
    const selectElement = document.getElementById("car-model");
    const personalDataForm = document.getElementById("personal-data");
    const commentBlock = document.getElementById("comment-block");
    const rectangles = document.querySelectorAll(".rectangle");
    const scrollList = document.getElementById("scroll-list");

    function updateBlockStatus(form, rectangle) {
        const inputs = form.querySelectorAll("input, textarea");
        let isFilled = true;
        inputs.forEach(input => {
            if (input.required && !input.value) {
                isFilled = false;
            }
        });

        if (isFilled) {
            rectangle.classList.add("active");
            rectangle.style.backgroundColor = "#F1F1F1";
            rectangle.style.color = "#000000";
        } 
    }

    selectElement.addEventListener("change", function() {
        updateBlockStatus(selectElement, rectangles[0]);
    });

    personalDataForm.addEventListener("input", function() {
        updateBlockStatus(personalDataForm, rectangles[1]);
    });

    scrollList.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            updateBlockStatus(scrollList, rectangles[2]);
            updateBlockStatus(scrollList, rectangles[3]);
        }
    });

    submitButton.addEventListener("click", function() {
        updateBlockStatus(commentBlock, rectangles[3]);
    });
});



    document.addEventListener("DOMContentLoaded", function() {
        const listItems = document.querySelectorAll("#scroll-list li");

        listItems.forEach(item => {
            item.addEventListener("click", function() {
                
                listItems.forEach(li => {
                    li.classList.remove("active");
                });

                this.classList.add("active");
            });
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
    const blocks = document.querySelectorAll(".block, .full-width-block"); 

    for (let i = 1; i < blocks.length; i++) { 
        setOpacity(blocks[i], "0.5");
    }

    function setOpacity(block, opacity) {
        block.style.opacity = opacity;
        block.style.pointerEvents = opacity === "1" ? "auto" : "none";
    }

    setOpacity(blocks[0], "1");

    const selectElement = document.getElementById("car-model");
    selectElement.addEventListener("change", function() {
        setOpacity(blocks[1], "1");
    });

    const personalDataForm = document.getElementById("personal-data");
    personalDataForm.addEventListener("input", function() {
        if (personalDataForm.checkValidity()) {
            setOpacity(blocks[2], "1");
        }
    });

    const scrollList = document.getElementById("scroll-list");
    scrollList.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            setOpacity(blocks[3], "1");
            setOpacity(blocks[4], "1");
        }
    });

    const submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", function() {
        if (personalDataForm.checkValidity()) {
            setOpacity(blocks[3], "1");
            setOpacity(blocks[4], "1");
        }
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