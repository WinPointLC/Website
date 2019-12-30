var modal = document.getElementById('upcoming-events-others-modal');

var img = document.getElementById('upcoming-events-others');
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("modal-caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close1")[0];

span.onclick = function() {
  modal.style.display = "none";
}
