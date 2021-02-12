document.getElementById('generate').addEventListener('click', () => {

  let length = 0;

  while (length < 8 || length > 128) {
    length = parseInt(prompt('How long would you like the password to be? (Must be between 8 and 128 characters)'), 10)
  }

  let lower = false
  let upper = false
  let number = false
  let special = false

  while (!(lower || upper || number || special)) {
    lower = confirm('Do you want to include lowercase letters? (OK for yes, Cancel for no)')
    console.log(lower)
    upper = confirm('Do you want to include uppercase letters? (OK for yes, Cancel for no)')
    console.log(upper)
    number = confirm('Do you want to include numbers? (OK for yes, Cancel for no)')
    console.log(number)
    special = confirm('Do you want to include special characters? (OK for yes, Cancel for no)')
    console.log(special)
  }

  let choices = []

  if (lower) {
    let lowers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    for (let i = 0; i < lowers.length; i++) {
      choices.push(lowers[i])
    }
  }

  if (upper) {
    let uppers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    for (let i = 0; i < uppers.length; i++) {
      choices.push(uppers[i])
    }
  }

  if (number) {
    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    for (let i = 0; i < numbers.length; i++) {
      choices.push(numbers[i])
    }
  }

  if (special) {
    let specials = ['\ ', '\!', '\"', '\#', '\$', '\%', '\&', '\'', '\(', '\)', '\*', '\+', '\,', '\-', '\.', '\/', '\:', '\;', '\<', '\=', '\>', '\?', '\@', '\[', '\\', '\]', '\^', '\_', '\`', '\{', '\|', '\}', '\~']
    for (let i = 0; i < specials.length; i++) {
      choices.push(specials[i])
    }
  }

  let password = '';

  for (let i = 0; i < length; i++) {
    password += choices[Math.floor(Math.random() * choices.length)]
  }

  document.getElementById('password').textContent = password

})