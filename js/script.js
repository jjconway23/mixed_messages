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

