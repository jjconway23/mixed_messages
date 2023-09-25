import { messages } from "./extra_files/messages.js";

const newMsgBtn = document.querySelector(".new-message-btn");


const getRandomMessage = () => {
    const randomNumber = Math.floor(Math.random() * messages.length);
    const author = messages[randomNumber].author;
    const quote = messages[randomNumber].quote;
    return {
        quote,
        author
    }
}

const displayMessage = () => {
    // getting ref to dom elements
    const generatedMessage = document.querySelector('.generated-message');
    const author = document.querySelector('.author');
    const startingMessage = document.querySelector('.starting-message');

    // getting result from function call
    const randomMessage = getRandomMessage();

    // setting new values to html
    author.innerHTML = `~ ${randomMessage.author}`;
    generatedMessage.innerHTML = randomMessage.quote;

    //changing display values of dom elements.
    startingMessage.style.display = 'none';
    generatedMessage.style.display = 'block';
    author.style.display = 'block';

}

newMsgBtn.addEventListener('click', displayMessage)