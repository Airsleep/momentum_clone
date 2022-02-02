let age = parseInt(prompt("how old are you?"));
console.log(age);
while (isNaN(age) == true) {
  console.log(age);
  age = parseInt(prompt("please type number.\n"));
  if (isNaN(age) == false) {
    break;
  }
}
alert("your age is " + age);
