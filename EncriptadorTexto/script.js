let btnEncrypted = document.querySelector("#btn-encrypted");
let textAreaEncrypted = document.querySelector("#text-encrypted");
let btnDecrypted = document.querySelector("#btn-decrypted");
let textAreaDecrypted = document.querySelector("#text-decrypted");
let btnInfoCopied = document.querySelector("#btn-info-copy");
let textAreaResult = document.querySelector("#result-text");
let btnCopy = document.querySelector("#btn-copy");

textAreaEncrypted.addEventListener("input", function () {
  textAreaEncrypted.value = regularExpressions(textAreaEncrypted.value);
});

textAreaDecrypted.addEventListener("input", function () {
  textAreaDecrypted.value = regularExpressions(textAreaDecrypted.value);
});

btnEncrypted.addEventListener("click", function () {
  textAreaResult.value = keysEncryption(textAreaEncrypted.value);
  textAreaEncrypted.value = "";
});

btnDecrypted.addEventListener("click", function () {
  textAreaResult.value = decrypted(textAreaDecrypted.value);
  textAreaDecrypted.value = "";
});

btnCopy.addEventListener("click", function () {
  textCopy();
  btnCopied();
});

function regularExpressions(textInput) {
  let textReplace = textInput.replace(/á/g, "a");
  textReplace = textReplace.replace(/é/g, "e");
  textReplace = textReplace.replace(/í/g, "i");
  textReplace = textReplace.replace(/ó/g, "o");
  textReplace = textReplace.replace(/ú/g, "u");
  textReplace = textReplace.replace(/[^A-Z-a-z\s\r]/g, "").toLowerCase();
  return replace;
}

function keysEncryption(text) {
  let textEncrypted = text.replace(/e/g, "enter");
  textEncrypted = textEncrypted.replace(/i/g, "imes");
  textEncrypted = textEncrypted.replace(/a/g, "ai");
  textEncrypted = textEncrypted.replace(/o/g, "ober");
  textEncrypted = textEncrypted.replace(/u/g, "ufat");
  return textEncrypted;
}

function decrypted(text) {
  let textEncrypted = text.replace(/enter/g, "e");
  textEncrypted = textEncrypted.replace(/imes/g, "i");
  textEncrypted = textEncrypted.replace(/ai/g, "a");
  textEncrypted = textEncrypted.replace(/ober/g, "o");
  textEncrypted = textEncrypted.replace(/ufat/g, "u");
  return textEncrypted;
}

function textCopy() {
  let textCopied = document.getElementById("result-text");
  textCopied.select();
  textCopied.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(textCopied.value);
}

function btnCopied() {
  swal.fire({
    icon: "info",
    title: "Copiado",
  });
}
