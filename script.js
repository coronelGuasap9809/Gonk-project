function pissVar(){
  gonks.textContent = slider.value;
  if (slider.value == 1){
    gonkGonks.textContent = 'gonk.'
  }else{
    gonkGonks.textContent = 'gonks.'
  }
}
function bayatalagui(){
  if (slider.value == 279){
    shoogabooga.textContent = 'You found the secret gonk!';
    image.style.display = 'block';
  }else if (slider.value < 279) {
    shoogabooga.textContent = 'Not enough Gonks';
    image.style.display = 'none';
  } else {
    shoogabooga.textContent = 'Too many Gonks';
    image.style.display = 'none';
  }
}
slider.oninput = pissVar;
button.onclick = bayatalagui;