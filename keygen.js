function generateKey() {
  const password = "YourPass";
  const xorValue = 10;
  let xorOp = "";

  for (let i = 0; i < password.length; i++) {
    xorOp += String.fromCharCode(password.charCodeAt(i) ^ xorValue);
  }

  let keygen = "";
  for (let i = 0; i < xorOp.length; i++) {
    keygen += String.fromCharCode(xorOp.charCodeAt(i) ^ xorValue);
  }

  console.log("Mot de passe obfusqué :", xorOp);
  console.log("Clé générée (keygen) :", keygen);
}

generateKey();
