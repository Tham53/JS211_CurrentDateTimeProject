// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}

// Write a JavaScript program to convert a number to a string.



// Write a JavaScript program to convert a string to the number.
let a = "10000";
let b = "12abc95";
let c = "115.12";

parseInt(a) + 523
// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  const dataType = () => {
    const data = document.getElementById("dataEntry").value;
    if (data ==="null") {
      document.getElementById("display-type").innerHTML = "null";
    }
    else if (data === "true") {
      document.getElementById("display-type").innerHTML = "boolean";
    }
    else if (data === "false") {
      document.getElementById("display-type").innerHTML = "boolean";
    }
    else if (data === "") {
      document.getElementById("display-type").innerHTML = "undefined";
    }
    else if (data <= "Number.MAX_VALUE") {
      document.getElementById("display-type").innerHTML = "number";
    }
    else {
      document.getElementById("display-type").innerHTML = "NaN";
    }
  }

  
  
// Write a JavaScript program that adds 2 numbers together.
const add = (num1, num2) =>{
  return num1 +num2;
}

add (2,4);


// Write a JavaScript program that runs only when 2 things are true.



// Write a JavaScript program that runs when 1 of 2 things are true.



// Write a JavaScript program that runs when both things are not true.  

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
