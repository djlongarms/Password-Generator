document.getElementById('generate').addEventListener('click', () => {

  //Prompts for the user's desired length of the generated password and stores it in 'length.'
  let length = 0;

  while (length < 8 || length > 128) {
    length = parseInt(prompt('How long would you like the password to be? (Must be between 8 and 128 characters)'), 10)
  }

  //Initializes boolean variables to keep track of what kinds of character the user wants.
  let lower = false
  let upper = false
  let number = false
  let special = false

  //Continually checks what kind of characters the user wants until at least one is chosen.
  while (!(lower || upper || number || special)) {
    lower = confirm('Do you want to include lowercase letters? (OK for yes, Cancel for no)')
    upper = confirm('Do you want to include uppercase letters? (OK for yes, Cancel for no)')
    number = confirm('Do you want to include numbers? (OK for yes, Cancel for no)')
    special = confirm('Do you want to include special characters? (OK for yes, Cancel for no)')
  }

  //Initializes a 'choices' array to keep track of the possible choices for characters.
  let choices = []

  //Adds lowercase letters to the 'choices' array if necessary.
  if (lower) {
    let lowers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    for (let i = 0; i < lowers.length; i++) {
      choices.push(lowers[i])
    }
  }

  //Adds uppercase letters to the 'choices' array if necessary.
  if (upper) {
    let uppers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    for (let i = 0; i < uppers.length; i++) {
      choices.push(uppers[i])
    }
  }

  //Adds numbers to the 'choices' array if necessary.
  if (number) {
    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    for (let i = 0; i < numbers.length; i++) {
      choices.push(numbers[i])
    }
  }

  //Adds special characters to the 'choices' array if necessary.
  if (special) {
    let specials = ['\ ', '\!', '\"', '\#', '\$', '\%', '\&', '\'', '\(', '\)', '\*', '\+', '\,', '\-', '\.', '\/', '\:', '\;', '\<', '\=', '\>', '\?', '\@', '\[', '\\', '\]', '\^', '\_', '\`', '\{', '\|', '\}', '\~']
    for (let i = 0; i < specials.length; i++) {
      choices.push(specials[i])
    }
  }

  //Generates a password using the characters in the 'choices' array and stores it in 'password.'
  let password = '';

  for (let i = 0; i < length; i++) {
    password += choices[Math.floor(Math.random() * choices.length)]
  }

  //Sets the text in the 'password' text box to the randomly generated password, 'password.'
  document.getElementById('password').textContent = password

})