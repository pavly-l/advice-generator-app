// Get DOM elements
const dice = document.getElementById("dice");
const adviceNumber = document.getElementById("advice-number");
const adviceQuote = document.getElementById("advice-quote");

/**
 * Fetches advice from the API and updates the DOM with the new advice.
 */
function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data.slip);
            adviceNumber.innerHTML = `<p>ADVICE #${data.slip.id}</p>`;
            adviceQuote.innerHTML = `<p>"${data.slip.advice}"</p>`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            adviceQuote.innerHTML = '<p>Error fetching data. Please try again later.</p>';
        });
}

// Add event listener to the dice element
dice.addEventListener('click', getAdvice);

// Initial call to fetch advice
getAdvice();
