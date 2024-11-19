/**
 * the function renders an object to a tagged string and performs token substitution
 * @param {object} input - a javascript object representing a hierachycal structure
 * @param {object} values - a list of key value pairs where the key is a token to be replaced with the value in strings present in input
 */
function render(input, values) {
  if (typeof input !== "object" || typeof values !== "object") {
    throw new Error("InvalidType");
  }

  if (Object.keys(input).length == 0) {
    return "";
  }

  let htmlDoc = "";

  for (let key in input) {
    htmlDoc += `<${key}>`;

    if (typeof input[key] == "object") {
      htmlDoc += render(input[key], values);
    } else if (typeof input[key] == "string") {
      let input_str = input[key];

      for (let value in values) {
        input_str = input_str.replace("${" + value + "}", values[value]);
      }

      htmlDoc += input_str;
    }

    htmlDoc += `</${key}>`;
  }

  return htmlDoc;
}

module.exports = {
    render
}

// const input = {
//   document: {
//     header: {
//       title: "Hello ${name}",
//     },
//   },
// };

// values = {
//   name: "World!",
// };

// // console.log(render(input, values));
// console.log(render("", {}));

// console.log(typeof "");
