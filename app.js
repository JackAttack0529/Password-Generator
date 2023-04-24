const result = document.getElementById(`result`);
function makePassword(length) {
    let result = '';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase = `abcdefghijklmnopqrstuvwxyz`;
    const numbers = `0123456789`;
    const symbols = `!@#$%^&*()[]{}`;
    let randomChars;
    if (upper) randomChars += upperCase;
    if (lower) randomChars += lowerCase
    if (num) randomChars += numbers
    if (sym) randomChars += symbols
    const charactersLength = randomChars.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter ++;
    }
    return result;
}

const generate = document.getElementById(`generate`);
generate.addEventListener(`click`, () => {
    const upper = document.getElementById(`upperCase`).checked;
    const lower = document.getElementById(`lowerCase`).checked;
    const num = document.getElementById(`Numbers`).checked;
    const sym = document.getElementById(`Symbols`).checked;
    const length = document.getElementById(`length`).checked;
    result.innerText = makePassword(upper, lower, num, sym, length)
})