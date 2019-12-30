var modal = document.getElementById('upcoming-events-fsp-modal');

var img = document.getElementById('upcoming-events-fsp');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("modal-caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
