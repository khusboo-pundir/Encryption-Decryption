
function runCipher() {
  const inputText = document.getElementById("inputText").value;
  const shift = parseInt(document.getElementById("shift").value) || 0;
  const mode = document.getElementById("modeSelect").value;

  let encryptedText = "";
  let autoDecrypted = "";

  if (mode === "encrypt") {
    encryptedText = caesarCipher(inputText, shift);
    autoDecrypted = caesarCipher(encryptedText, -shift);

    document.getElementById("outputText").value = encryptedText;
    document.getElementById("autoDecryptedText").value = autoDecrypted;

  } else {
    encryptedText = caesarCipher(inputText, -shift);
    document.getElementById("outputText").value = encryptedText;
    document.getElementById("autoDecryptedText").value = "";
  }
}

function caesarCipher(str, shift) {
  return str.split('').map(char => {
    const code = char.charCodeAt(0);
    if (char >= 'A' && char <= 'Z') {
      return String.fromCharCode((code - 65 + shift + 26) % 26 + 65);
    } else if (char >= 'a' && char <= 'z') {
      return String.fromCharCode((code - 97 + shift + 26) % 26 + 97);
    } else {
      return char;
    }
  }).join('');
}

document.getElementById("modeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const icon = document.body.classList.contains("dark") ? "☀️" : "🌙";
  document.getElementById("modeToggle").textContent = icon;
});