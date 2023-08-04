// const messageInput = document.getElementById('message-input');

// function getMmessage(){
//     document.getElementById('message-output').innerHTML = messageInput.value;
//     messageInput.value = '';

// }

const messageInput = document.getElementById('message-input');
const messageOutput = document.getElementById('message-output');
const previousMessages = [];

function getMmessage() {
    const newMessage = messageInput.value.trim();
    
    // If the new message is not empty, add it to the array of previous messages
    if (newMessage !== '') {
        previousMessages.push(newMessage);
    }

    // Prepare the HTML content with both previous and new messages
    const messageHTML = previousMessages.map(message => `<h4>${message}</h4>`).join('');

    // Update the output element with the combined messages
    messageOutput.innerHTML = messageHTML;

    // Clear the input field for the next message
    messageInput.value = '';
}

// Example usage:
// Type a message in the input field and press Enter or click a button to call getMmessage()
// .map(): The map() method is a higher-order array function in JavaScript. It takes a callback function as an argument and creates a new array with the results of calling the callback function on every element of the original array. In this case, the map() method is being called on the previousMessages array.

// message => <p>${message}</p>: This is an arrow function (ES6 syntax) used as the callback function for the map() method. It takes an individual message from the previousMessages array as input and returns a string that contains an HTML paragraph (<p>) element with the message content interpolated into it using ${message}.

// .join(''): After the map() method processes each element of the previousMessages array, it returns a new array containing the strings with HTML paragraph elements for each message. The join() method is then called on this new array. The join() method takes all the elements of an array and joins them into a single string. The argument passed to join('') is an empty string '', meaning that no separator is added between the array elements during the join process. This ensures that the messages are concatenated without any separation, creating a single string that contains all the HTML paragraphs for the messages.

// So, the entire line of code takes the previousMessages array, converts each message to an HTML paragraph using the map() method, and then joins all the HTML paragraphs into a single string using the join('') method. The result is a string with all the messages wrapped in HTML paragraph elements. This combined string is then assigned to the messageHTML variable, which can be used to update the innerHTML of an element to display all the messages.




// User
// <p>${message}</p>
// can i use anything else instade of message
// ChatGPT
// Yes, you can use any valid variable name instead of message in the template literal ${} expression. The variable name inside the ${} represents the value that will be interpolated into the string.

// In the previous code example, the variable name message was used to represent each individual message from the previousMessages array. However, you can choose a different variable name that suits your needs. Here's the updated code with a different variable name:

// javascript
// Copy code
// const previousMessages = ['Hello', 'How are you?', 'Goodbye'];

// const combinedMessages = previousMessages.map(msg => `<p>${msg}</p>`).join('');

// console.log(combinedMessages);
// In this updated code, we've replaced the variable name message with msg. The result will be the same; each message from the previousMessages array will be wrapped in an HTML paragraph (<p>) element.

// You can use any meaningful variable name that helps you understand the context or purpose of the code better. The variable name inside ${} should be the name of the variable that holds the data you want to interpolate into the template literal.





