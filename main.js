const submitBtn = document.getElementById('submit-btn');
const selectedRating = document.getElementById('selected-rating');
const selectCard = document.getElementById('select-card');
const thanksCard = document.getElementById('thanks-card');
const ratingOptions = document.querySelectorAll('input[name="rating"]');
let ratingValue;



// if(ratingOptions.clicked) {
//     console.log('true')
// } else {
//     console.log('false')
// }

submitBtn.addEventListener('click', () =>{
    for (let ratingOption of ratingOptions) {
        if(ratingOption.checked) {
            ratingValue = ratingOption.value;
            break
        }
    }

    if(ratingValue == undefined) {
        alert('Please select a rating.');
    } else {
        selectedRating.innerText = ratingValue;
        selectCard.classList.toggle('disabled');
        thanksCard.classList.toggle('disabled');
    }
    })