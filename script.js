const form = document.getElementById('inputForm');
const outputText = document.getElementById('promptText');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  updateOutput();
});const inputFields = document.querySelectorAll('input[data-hint], textarea[data-hint]');

// Add event listeners for input fields
inputFields.forEach(function(input) {
  input.addEventListener('input', function() {
    updateOutput();
  });
  input.addEventListener('focus', function() {
    showHint(input);
  });
  input.addEventListener('blur', function() {
    hideHint(input);
  });
});

function showHint(input) {
  const hintBox = input.nextElementSibling;
  if (hintBox.classList.contains('hint-box')) {
    hintBox.textContent = input.getAttribute('data-hint');
    hintBox.style.display = 'block';
  }
}

function hideHint(input) {
  const hintBox = input.nextElementSibling;
  if (hintBox.classList.contains('hint-box')) {
    hintBox.style.display = 'none';
  }
}


function updateOutput() {
  const input1 = document.getElementById('input1').value;
  const input2 = document.getElementById('input2').value;
    const input3 = document.getElementById('input3').value;
    const input4 = document.getElementById('input4').value;
    const input5 = document.getElementById('input5').value;
    const input6 = document.getElementById('input6').value;
   const input7 = document.getElementById('input7').value;
   const input8 = document.getElementById('input8').value;
   const input9 = document.getElementById('input9').value;
  
 

  const output = `
  
  Quiero una imagen de <span class="input1">${input1}</span>  con un estilo visual  y una paleta de colores <span class="input2">${input4}</span> . El tema de la imagen es <span class="input2">${input2}</span> , y quiero que incluya <span class="input3">${input3}</span> . Deseo que la imagen transmita una atmósfera <span class="input5">${input5}</span>  y tenga una composición <span class="input6">${input6}</span>  con iluminación <span class="input7">${input7}</span> . Me gustaría que la imagen tenga un estilo artístico <span class="input8">${input8}</span> . La imagen será utilizada en <span class="input9">${input9}</span> .
   
 `;

  outputText.innerHTML = output;

  // Reset all input classes
  const inputs = document.querySelectorAll('input');
  inputs.forEach(function(input) {
    input.classList.remove('filled');
  });

  // Add 'filled' class to the corresponding inputs
  const input1Elements = document.querySelectorAll('.input1');
  input1Elements.forEach(function(element) {
    const input = document.getElementById('input1');
    input.classList.add('filled');
  });

  const input2Elements = document.querySelectorAll('.input2');
  input2Elements.forEach(function(element) {
    const input = document.getElementById('input2');
    input.classList.add('filled');
  });

  const input3Elements = document.querySelectorAll('.input3');
  input3Elements.forEach(function(element) {
    const input = document.getElementById('input3');
    input.classList.add('filled');
  });

  const input4Elements = document.querySelectorAll('.input4');
  input4Elements.forEach(function(element) {
    const input = document.getElementById('input4');
    input.classList.add('filled');
  });


 const input5Elements = document.querySelectorAll('.input5');
  input5Elements.forEach(function(element) {
    const input = document.getElementById('input5');
    input.classList.add('filled');
  });


 const input6Elements = document.querySelectorAll('.input6');
  input6Elements.forEach(function(element) {
    const input = document.getElementById('input6');
    input.classList.add('filled');
  });


 const input7Elements = document.querySelectorAll('.input7');
  input7Elements.forEach(function(element) {
    const input = document.getElementById('input7');
    input.classList.add('filled');
  });
}


// Event listeners for input fields
const inputs = document.querySelectorAll('input');
inputs.forEach(function(input) {
  input.addEventListener('input', function() {
    updateOutput();
  });
});

const copyButton = document.getElementById('copyButton');
const promptText = document.getElementById('promptText');

copyButton.addEventListener('click', function() {
  copyToClipboard(promptText.textContent);
});

function copyToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  alert('Text copied to clipboard!');
}

const copyInputsButton = document.getElementById('copyInputsButton');
copyInputsButton.addEventListener('click', function() {
  copyInputsAsJson();
});

function copyInputsAsJson() {
  const inputs = document.querySelectorAll('input, textarea');
  const inputsData = {};

  inputs.forEach(function(input) {
    inputsData[input.id] = input.value;
  });

  const json = JSON.stringify(inputsData, null, 2);

  copyToClipboard(json);
  alert('Inputs copied as JSON!');
}