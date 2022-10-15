const fact = require("../factorial/index");
const rat = require("../ratio/index");

const ratioAndFactorial = (num1, num2, num3) => {
  const ratio = rat(num1, num2);
  const factorial = fact(num3);

  return { ratio, factorial };
};

module.exports = ratioAndFactorial;
