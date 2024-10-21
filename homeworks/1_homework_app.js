const compress = (a, b = true) => {
  if (typeof a !== "string") {
    throw new Error("InvalidType");
  }

  if (b) {
    // Compresia
    let result = "";
    let count = 1;

    for (let indexStr = 0; indexStr < a.length; indexStr++) {
      if (a[indexStr] === a[indexStr + 1]) {
        count++;
      } else {
        result += a[indexStr] + count;
        count = 1;
      }
    }

    return result;
  } else {
    // Decompresia
    let result = "";
    for (let indexStr = 0; indexStr < a.length; indexStr++) {
      if (!parseInt(a[indexStr])) {
        result += a[indexStr];
      } else {
        let nr = parseInt(a[indexStr], 10);
        result += result[result.length - 1].repeat(nr - 1);
      }
    }

    return result;
  }
};

// console.log(compress("aaaabbbbbccdddd", true));
// console.log(compress("a4b5c2d4", false));
// console.log(compress("abcdd", true));

module.exports = compress;
