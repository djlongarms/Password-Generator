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

})