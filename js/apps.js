var slideIndex = 1;
var imagesData = null
$(()=>{

  $(".prev").on("click", ()=>{
    plusSlides(-1)
  })

  $(".next").on("click", ()=>{
    plusSlides(+1)
  })

  getFeaturedImages(()=>{
    shuffleArray()
    addFeaturedImages()
    showSlides(slideIndex);
  })

})

function showSlides(n) {
  var i
  var slides = document.getElementsByClassName("mySlides")
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"
  }
  slides[slideIndex-1].style.display = "block"
  var title = imagesData[slideIndex-1][0]
  $("#title").text(title)
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function addFeaturedImages(){
  imagesData.forEach(element => {
    $('.container').append(`<div class="mySlides"><img src="${element[1]}" ></div>`);
  });
}

function getFeaturedImages(callback){
  $.getJSON("../utils/config.json", (data) => {
    imagesData = data.cycling
    callback(data)
  })
}

function shuffleArray() {
  for (let i = imagesData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [imagesData[i], imagesData[j]] = [imagesData[j], imagesData[i]];
  }
}