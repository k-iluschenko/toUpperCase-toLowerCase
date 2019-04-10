// Перевод строк для английского и русского языка

// в нижний регистр
function toLowerCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let charAtLocation = str.charCodeAt(i);

    if (
      (charAtLocation > 64 && charAtLocation < 91) ||
      (charAtLocation > 1039 && charAtLocation < 1070)
    ) {
      result += i === 0 ? str[i] : String.fromCharCode(charAtLocation + 32);
    } else {
      result += i === 0 ? String.fromCharCode(charAtLocation - 32) : str[i];
    }
  }
  return result;
}
// в верхний регистр
function toUpperCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    // Метод charCodeAt() возвращает числовое значение Юникода для символа по указанному индексу
    let charAtLocation = str.charCodeAt(i);

    if (
      (charAtLocation > 96 && charAtLocation < 123) ||
      (charAtLocation > 1071 && charAtLocation < 1104)
    ) {
      // смещаем индекс в таблице символов Юникода
      result += i === 0 ? str[i] : String.fromCharCode(charAtLocation - 32);
    } else {
      result += i === 0 ? String.fromCharCode(charAtLocation + 32) : str[i];
    }
  }
  return result;
}
// функция принимает строку и булевое значение.
// true - если надо перевести в верхний регист,
// false - в нижний
function translateToUpperCase(str, upperCase = true) {
  if (typeof upperCase !== "boolean") {
    return "значение должно быть true или false";
  }
  return upperCase ? toUpperCase(str) : toLowerCase(str);
}

console.log(toLowerCase("qweQWEая"));
console.log(toUpperCase("Aaaaz"));
console.log(translateToUpperCase("asdASAjlkjlkjDKJD", true));
