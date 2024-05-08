function getSizeSelection() {
    const checkboxes = document.querySelectorAll('.sort__content input[type="checkbox"]');
    let selectedSizes = [];

    javascript

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedSizes.push(checkbox.nextElementSibling.innerText);
        }
    });

    if (selectedSizes.length > 0) {
        console.log('Selected sizes: ', selectedSizes.join(', '));
    } else {
        console.log('No sizes selected.');
    }
}

getSizeSelection(); 