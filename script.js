function calculateDifferenceEssay() {
    const dateTimeInput = document.getElementById("datetime").value;

    // Check if the user entered a value
    if (!dateTimeInput) {
        document.getElementById("output").innerText = "Please select a date and time.";
        return;
    }

    // Convert input to a Date object
    const inputDate = new Date(dateTimeInput);
    const currentDate = new Date(); // Current date and time

    // Calculate the difference in milliseconds
    const differenceMs = inputDate - currentDate;

    // Convert milliseconds to meaningful time units
    const diffMinutes = Math.floor(differenceMs / (1000 * 60)) % 60;
    const diffHours = Math.floor(differenceMs / (1000 * 60 * 60)) % 24;
    const diffDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

    const minutesToHours = diffMinutes / 60;
    const daysToHours = diffDays * 24;
    const totalHours = minutesToHours + diffHours + daysToHours;

    const essayString = calculateTimeForEssay(totalHours);

    // Display the result
    const outputElement = document.getElementById("output");
    if (differenceMs > 0) {
        outputElement.innerText = `${essayString}`;
    } else {
        outputElement.innerText = `The input date/time was ${Math.abs(diffDays)} days, ${Math.abs(diffHours)} hours ago.`;
    }
}

function calculateTimeForEssay(inputtedTime){
    const totalTime = 6;
    const thesisTime = 1.0/totalTime;
    const introParaTime = 0.5/totalTime;
    const mainPointTime = 1.0/totalTime;
    const supportTime = 2.0/totalTime;
    const conclusionParaTime = 0.5/totalTime;
    const finishingTouches = 1.0/totalTime;


    let newThesis = (thesisTime * inputtedTime) * 10;
    let newIntro = (introParaTime * inputtedTime) * 10;
    let newMain = (mainPointTime * inputtedTime) * 10;
    let newSupport = (supportTime * inputtedTime) * 10;
    let newConclusion = (conclusionParaTime * inputtedTime) * 10;
    let newFinish = (finishingTouches * inputtedTime) * 10;

    newThesis = Math.round(newThesis);
    newIntro = Math.round(newIntro);
    newMain = Math.round(newMain);
    newSupport = Math.round(newSupport);
    newConclusion = Math.round(newConclusion);
    newFinish = Math.round(newFinish);

    newThesis = newThesis / 10;
    newIntro = newIntro / 10;
    newMain = newMain / 10;
    newSupport = newSupport / 10;
    newConclusion = newConclusion / 10;
    newFinish = newFinish / 10;



    return `First finish your thesis in ${newThesis} hours, then finish your intro in ${newIntro} hours, next you finish your main points in ${newMain} hours,
    supports in ${newSupport} hours, finish your conclusion in ${newConclusion} hours, and have this amount of time to do finishing touches ${newFinish} hours`;
    


}



function calculateDifferenceStudy() {
    const dateTimeInput = document.getElementById("datetime").value;

    // Check if the user entered a value
    if (!dateTimeInput) {
        document.getElementById("output").innerText = "Please select a date and time.";
        return;
    }

    // Convert input to a Date object
    const inputDate = new Date(dateTimeInput);
    const currentDate = new Date(); // Current date and time

    // Calculate the difference in milliseconds
    const differenceMs = inputDate - currentDate;

    // Convert milliseconds to meaningful time units
    const diffMinutes = Math.floor(differenceMs / (1000 * 60)) % 60;
    const diffHours = Math.floor(differenceMs / (1000 * 60 * 60)) % 24;
    const diffDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

    const minutesToHours = diffMinutes / 60;
    const daysToHours = diffDays * 24;
    const totalHours = minutesToHours + diffHours + daysToHours;

    const essayString = calculateTimeForEssay(totalHours);

    // Display the result
    const outputElement = document.getElementById("output");
    if (differenceMs > 0) {
        outputElement.innerText = `${essayString}`;
    } else {
        outputElement.innerText = `The input date/time was ${Math.abs(diffDays)} days, ${Math.abs(diffHours)} hours ago.`;
    }
}



let points = parseInt(localStorage.getItem('points')) || 0;

// Update the points display on the game page
function updatePointsDisplay() {
    const pointsDisplay = document.getElementById('pointsDisplay');
    if (pointsDisplay) {
        pointsDisplay.innerText = `Points: ${points}`;
    }
}

// Function to add a point (on the Point Page)
function addPoint() {
    points++;
    localStorage.setItem('points', points); // Store points in localStorage
    alert('You gained a point!');
}

// Function to navigate to the Game Page
function goToBettingScreen() {
    window.location.href = 'betting.html'; // Navigate to the game page
}

// Function to bet on a coin flip (on the Game Page)
function bet() {
        const betAmount = parseInt(document.getElementById('betAmount').value);
    
        // Check if the user entered a valid bet amount
        if (isNaN(betAmount) || betAmount <= 0) {
            alert('Please enter a valid bet amount.');
            return;
        }
    
        // Check if the user has enough points
        if (betAmount > points) {
            alert('You do not have enough points to place that bet.');
            return;
        }

    const coinFlip = Math.random() < 0.5 ? 'heads' : 'tails';
    const userBet = prompt('Bet on heads or tails:').toLowerCase();

    if (userBet === coinFlip) {
        points += betAmount; // User wins, they gain the bet amount
        alert(`You won! It was ${coinFlip}. You gained ${betAmount} points.`);
    } else {
        points -= betAmount; // User loses, they lose the bet amount
        alert(`You lost! It was ${coinFlip}. You lost ${betAmount} points.`);
    }

    // Check for "droplet" condition (user wins)
    if (Math.random() < 0.1) { // 10% chance to get a droplet
        alert('You got a droplet!');
    }

    localStorage.setItem('points', points); // Update points in localStorage
    updatePointsDisplay();
}

// Function to navigate to the Point Page
function goToPointPage() {
    window.location.href = 'game.html'; // Navigate back to the point page
}

// Update points display when the game page loads
if (document.getElementById('pointsDisplay')) {
    updatePointsDisplay();
}

function clearPoints() {
    points = 0; // Reset points to 0
    localStorage.setItem('points', points); // Update localStorage to reflect the change
    updatePointsDisplay(); // Update the points display on the current page
    alert('Points have been cleared!');
}