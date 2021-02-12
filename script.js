document.getElementById('generate').addEventListener('click', () => {

  let length = 0;

  while (length < 8 || length > 128) {
    length = parseInt(prompt('How long would you like the password to be? (Must be between 8 and 128 characters)'), 10)
    if(isNaN(length)) {
      length = 0;
    }
  }

  let lower = false
  let upper = false
  let number = false
  let special = false

  while (!(lower || upper || number || special)) {
    lower = confirm('Do you want to include lowercase letters? (OK for yes, Cancel for no)')
    upper = confirm('Do you want to include uppercase letters? (OK for yes, Cancel for no)')
    number = confirm('Do you want to include numbers? (OK for yes, Cancel for no)')
    special = confirm('Do you want to include special characters? (OK for yes, Cancel for no)')
  }

  let choices = ''

  if (lower) {
    choices += 'abcdefghijklmnopqrstuvwxyz'
  }

  if (upper) {
    choices += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }

  if (number) {
    choices += '1234567890'
  }

  if (special) {
    choices += '\ \!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~'
  }

  let password = '';

  for (let i = 0; i < length; i++) {
    password += choices[Math.floor(Math.random() * choices.length)]
  }

  document.getElementById('password').textContent = password

})