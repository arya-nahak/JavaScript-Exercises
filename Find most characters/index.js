const mostCharacter = (str) => {
  let mostChar = "";
  let strsplit = str.split(" ");
  strsplit.forEach((item, index) => {
    if (item.length > mostChar.length) {
      mostChar = item;
    }
  });
  return mostChar;
};

let textStr =
  "If you deleted a file locally and want to reflect that deletion on GitHub, you need to inform Git about the deletion so that it can update the remote repository accordingly ";
let result = mostCharacter(textStr);
console.log(result);
