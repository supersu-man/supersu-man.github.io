var slideIndex = 1;
var imagesPaths = []
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
  var title = imagesPaths[slideIndex-1].split("featured/")[1].split(".")[0]
  title = title.split("%20").join(" ");
  $("#title").text(title)
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function addFeaturedImages(){
  imagesPaths.forEach(element => {
    $('.container').append(`<div class="mySlides"><img src="..${element}" ></div>`);
  });
}

function getFeaturedImages(callback){
  $.get("../gallery/featured", (data) => {
    $(data).find("#files > li").each(function(){
      var image = $(this).find("a").attr("href")
      if(image.toString().includes("featured")){
        imagesPaths.push(image)
      }
   })
   console.log(imagesPaths)
   callback()
  })
}
function shuffleArray() {
  for (let i = imagesPaths.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [imagesPaths[i], imagesPaths[j]] = [imagesPaths[j], imagesPaths[i]];
  }
}