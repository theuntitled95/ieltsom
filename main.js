const card = document.querySelectorAll('.card');

[...card].forEach(element => {
    const moreButton = element.querySelector('[data-button="moreDates"]');
    const bookButton = element.querySelector('[data-button="BookNow"]');
    const moreDates = element.querySelector('.card__dates');
    const avail = element.querySelector('.urgency');
    if (avail.classList.contains('na')) {
        bookButton.classList.add('isDisabled');
    }
    moreButton.addEventListener('click', ()=> {
        moreDates.classList.toggle('show');    
        if (moreButton.innerHTML === "More Dates") {
            moreButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        } else {
            moreButton.innerHTML = "More Dates";
        }
    });
})