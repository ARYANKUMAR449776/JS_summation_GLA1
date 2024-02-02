let bodyEle = document.getElementsByTagName('body')[0];

bodyEle.style.backgroundColor = '#F5F5F5';

bodyEle.style.display = 'flex';
bodyEle.style.flexDirection = 'column';
bodyEle.style.alignItems = 'center';
bodyEle.style.marginTop = '50px';

let bodyText = document.createElement('h1');
bodyText.innerText = "Aryan Kumar";
bodyText.style.marginBottom = '20px';
bodyText.style.color = 'gray';
bodyEle.appendChild(bodyText);

let digitOne = document.createElement('input');
digitOne.style.marginTop = '10px';
digitOne.style.padding = '8px';
digitOne.style.border = '2px solid #ccc';
digitOne.style.borderRadius = '5px';
digitOne.style.fontSize = '16px';
bodyEle.appendChild(digitOne);

let digitTwo = document.createElement('input');
digitTwo.style.marginTop = '10px';
digitTwo.style.padding = '8px';
digitTwo.style.border = '2px solid #ccc';
digitTwo.style.borderRadius = '5px';
digitTwo.style.fontSize = '16px';
bodyEle.appendChild(digitTwo);

let button = document.createElement('button');
button.innerText = 'Calculate Sum';
button.style.cursor = 'pointer';
button.style.backgroundColor = '#2E2E2E';
button.style.color = '#F5F5F5';
button.style.marginTop = '10px';
button.style.padding = '8px';
button.style.border = 'none';
button.style.borderRadius = '5px';
bodyEle.appendChild(button);

let errorMessage = document.createElement('p');
errorMessage.style.marginTop = '10px';
errorMessage.style.fontWeight = 'bold';
errorMessage.style.color = '#FF6347';
bodyEle.appendChild(errorMessage);

let resultDisplay = document.createElement('p');
resultDisplay.style.marginTop = '10px';
resultDisplay.style.fontWeight = 'bold';
resultDisplay.style.color = '#008000';
bodyEle.appendChild(resultDisplay);

button.onclick = () => {
  try {
    const digitOneValue = parseFloat(digitOne.value);
    const digitTwoValue = parseFloat(digitTwo.value);
    
    if (isNaN(digitOneValue) || isNaN(digitTwoValue)) {
      throw new Error('Invalid Input, Please enter numbers as an input');
    }

    const sum = digitOneValue + digitTwoValue;
    resultDisplay.innerText = `Sum: ${sum}`;

    errorMessage.innerText = '';
    digitOne.style.border = '';
    digitTwo.style.border = '';
  } catch (error) {
    errorMessage.innerText = error.message;
    console.error(error);
    digitOne.style.border = '2px solid #FF6347';
    digitTwo.style.border = '2px solid #FF6347';
  }
};
