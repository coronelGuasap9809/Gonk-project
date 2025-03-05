function whenSlide(){
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
slider.oninput = whenSlide;
button.onclick = bayatalagui;

//for those wondering, 'shoogabooga' is random gibberish I got off a JS course that is a small inside joke
