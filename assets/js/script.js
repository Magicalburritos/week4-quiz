function setInput(button) {
  var buttonVal = button.name;
  button.style.display = 'none';
  textbox = document.getElementById('input_' + buttonVal);
  textbox.value = Text;
}
