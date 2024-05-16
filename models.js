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


const checkboxes = document.querySelectorAll('.custom-checkbox');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
           
            checkboxes.forEach(otherCheckbox => {
                if (otherCheckbox !== this) {
                    otherCheckbox.checked = false;
                }
            });
        }
    });
});

function togglePics(checkboxId, ...gridItemClasses) {
    const checkbox = document.getElementById(checkboxId);
    const isChecked = checkbox.checked;

    if (isChecked) {
        const otherCheckboxes = document.querySelectorAll('.custom-checkbox');
        otherCheckboxes.forEach(function(otherCheckbox) {
            if (otherCheckbox.id !== checkboxId && otherCheckbox.checked) {
               
                otherCheckbox.checked = false;
            }
        });
    }

    const allGridItems = document.querySelectorAll('.grid-item');
    allGridItems.forEach(function(gridItem) {

        const isRelatedGridItem = gridItemClasses.some(function(gridItemClass) {
            return gridItem.classList.contains(gridItemClass);
        });

        gridItem.style.display = isChecked ? (isRelatedGridItem ? "block" : "none") : "block";
    });
}

function toggleCheckbox(checkboxId) {
    const checkbox = document.getElementById(checkboxId);
    checkbox.checked = !checkbox.checked;

    const gridItemClasses = getGridItemClasses(checkboxId);

    togglePics(checkboxId, ...gridItemClasses);
}

function getGridItemClasses(checkboxId) {
    switch (checkboxId) {
        case 'checkbox1':
            return ['grid-item1'];
        case 'checkbox2':
            return ['grid-item2', 'grid-item7'];
        case 'checkbox3':
            return ['grid-item4', 'grid-item8', 'grid-item9', 'grid-item13', 'grid-item17'];
        case 'checkbox4':
            return ['grid-item4', 'grid-item13'];
        case 'checkbox5':
            return ['grid-item12', 'grid-item14'];
        case 'checkbox6':
            return ['grid-item1'];
        default:
            return [];
    }
}
