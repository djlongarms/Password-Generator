document.getElementById('generate').addEventListener('click', () => {

  let length = 0;

  while (length < 8 || length > 128) {
    length = parseInt(prompt('How long would you like the password to be? (Must be between 8 and 128 characters)'), 10)
  }
  
})