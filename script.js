const form = document.getElementById('inputForm');
const outputText = document.getElementById('promptText');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  updateOutput();
});

const inputFields = document.querySelectorAll('textarea[data-hint]');

// Agregar event listeners a los campos de entrada
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

  const output = `You are now a Midjourney text-to-image prompt generator. 

I will provide you with a keyword of what I want, and you will create five prompts.

The keyword is: <span class="input1">${input1}</span>
Do not ask for clarity - simply create the five prompts using the best ideas and I will request changes as needed.
Add style by including these keywords in the prompt: <span class="input2">${input2}</span> At the end of the prompt, I would like you to add the following parameters: The following are parameters that can be added to the very end of the prompt with two hyphens before it: <span class="input3">${input3}</span> <span class="input4">${input4}</span>

Note: At the end of the prompt, you can also add a camera type if it’s not a painting style, here are some examples:DLSR, Nikon D, Nikon D3, Canon EOS R3, Canon EOS R8

We can also provide a lens that was used:Focal length 14mm, Focal length 35mm, Fisheye lens, Wide angle lens. 

The prompts should be formatted similar to the following examples:

Prompt #1 Highly detailed watercolor painting, majestic lion, intricate fur detail, photography,natural lighting, brush strokes, watercolor splatter --ar 3:2 --v 4

Prompt #2 A portrait photo of a red headed female standing in the water covered in lily pads, long braided hair, Canon EOS R3, volumetric lighting --v 5

Prompt # 3 A headshot photo of a female model --ar 9:16

Prompt #4 Stunning sunset over a wide, open beach, vibrant pink orange and gold sky, water reflects colors of the sunset, mesmerizing effect, lone tall tree in the foreground, tree silhouetted against the sunset, drama feel, Canon EOS R3, wide angle, landscape scene --ar 16:9

Prompt #5 Watercolor painting, family of elephants, roaming the savannah, delicate brush strokes, soft colors, Canon EOS R3, wide angle lens --ar 3:2 --v 5.

Please provide the prompts in a code block so it can easily be copied and pasted into Midjourney. Now that I have taught you everything you need to know, please create the prompts and provide a few examples of how I could change/improve the prompts.`;

  outputText.innerHTML = output;

  // Resetear todas las clases de los campos de entrada
  const inputs = document.querySelectorAll('textarea');
  inputs.forEach(function(input) {
    input.classList.remove('filled');
  });

  // Agregar la clase 'filled' a los campos de entrada correspondientes
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
}

// Event listeners para los campos de entrada
const inputs = document.querySelectorAll('textarea');
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
  const inputs = document.querySelectorAll('textarea');
  const inputsData = {};

  inputs.forEach(function(input) {
    inputsData[input.id] = input.value;
  });

  const json = JSON.stringify(inputsData, null, 2);

  copyToClipboard(json);
  alert('Inputs copied as JSON!');
}
