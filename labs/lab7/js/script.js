function init(){
//add your javascrip between these two lines of code
   const button = document.getElementById('entrybutton');
  const input = document.getElementById('entryinput');
  const output = document.getElementById('textoutput');

  button.addEventListener('click', function() {
    const text = input.value;


    alert('ShaanShafi: ' + text);

    output.textContent = text;
  });
}
window.addEventListener('load', init);
