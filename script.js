// Get references to elements
const proposalContainer = document.getElementById('proposalContainer');
const responseContainer = document.getElementById('responseContainer');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const responseMessage = document.getElementById('responseMessage');
const tryAgainButton = document.getElementById('tryAgainButton');
const cancelButton = document.getElementById('cancelButton');
const noOptions = document.getElementById('noOptions');


// --- YES Button Logic ---
yesButton.addEventListener('click', () => {
    // Generate a unique, secret confirmation code
    const confirmationCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    
    // 1. Hide the proposal
    proposalContainer.classList.add('hidden');
    
    // 2. Set the success message 
    responseMessage.innerHTML = `
        <span class="romantic-text" style="font-size: 1.5em; display: block; margin-bottom: 10px; color: #4CAF50;">YES! My heart is so happy! Thank you! ❤️🧸</span>
        <p style="font-family: Arial, sans-serif; font-size: 1em; color: #333;">
            To let me know right away, please send me a text with this secret code:
            <br><strong style="font-size: 1.5em; color: #ff1493;">CODE: ${confirmationCode}</strong>
        </p>
    `;
    
    // 3. Show the response container
    responseContainer.classList.remove('hidden');
});


// --- NEW HOVER LOGIC: NO button stays, YES button grows ---

function growYesButton() {
    // Make the Yes button grow
    yesButton.classList.add('growing-yes');
}

function shrinkYesButton() {
    // Shrink the Yes button back to normal size
    yesButton.classList.remove('growing-yes');
}

// Attach the functions to the NO button hover events
noButton.addEventListener('mouseover', growYesButton);
noButton.addEventListener('mouseout', shrinkYesButton);


// --- NO Button Actual Click Logic ---
noButton.addEventListener('click', () => {
    // Stop the interactive effects
    noButton.removeEventListener('mouseover', growYesButton);
    noButton.removeEventListener('mouseout', shrinkYesButton);
    yesButton.classList.remove('growing-yes');
    
    // 1. Hide the proposal
    proposalContainer.classList.add('hidden');
    
    // 2. Set the 'try again' message
    responseMessage.innerHTML = `<span class="romantic-text" style="font-size: 1.5em; color: #8a2be2;">Aww, that's okay. Are you absolutely sure, or would you like to think again?</span>`;
    
    // 3. Show the response container and the try again options
    responseContainer.classList.remove('hidden');
    noOptions.classList.remove('hidden');
});


// --- Event Listener for TRY AGAIN Button (after 'No') ---
tryAgainButton.addEventListener('click', () => {
    // 1. Reset everything to the start
    responseContainer.classList.add('hidden');
    noOptions.classList.add('hidden');
    proposalContainer.classList.remove('hidden');
    
    // 2. Re-enable the YES button growing effect
    noButton.addEventListener('mouseover', growYesButton);
    noButton.addEventListener('mouseout', shrinkYesButton);
});


// --- Event Listener for CANCEL Button (after 'No') ---
cancelButton.addEventListener('click', () => {
    // Set a final 'cancellation' message
    responseMessage.innerHTML = `<span class="romantic-text" style="font-size: 1.5em; color: #333;">I respect your decision. Thank you for considering it. No worries at all! 😊</span>`;
    
    // Hide the try again buttons
    noOptions.classList.add('hidden');
    tryAgainButton.classList.add('hidden');
});