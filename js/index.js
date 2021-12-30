var configData = null
var lFollowX = 5
var lFollowY = 10
var x = 0
var y = 0
var friction = 1 / 20

$(()=>{
    animate()
    getConfigData((data)=>{
        configData = data
        addCardImage()
        addSocials()
        addText()
    })
})

function getConfigData(callback){
    $.getJSON("../utils/config.json", (data) => {
        callback(data)
    }).fail(() => {
        console.log("An error has occurred")
    })
}

function animate() {
  x += (lFollowX - x) * friction
  y += (lFollowY - y) * friction
  $('.wrapper').css({
    'transform': 'translate(-50%, -50%) perspective(600px) rotateY(' + -x + 'deg) rotateX(' + y + 'deg)'
  })
  window.requestAnimationFrame(animate)
}

$(window).on('mousemove click', function(e) {
  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX))
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY))
  lFollowX = (12 * lMouseX) / 100 // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100
})

function addText(){
    $(".text").html(configData.text)
}

function addCardImage(){
    $(".me").css("background-image",`url("${configData .card_image}")`)
}

function addSocials(){
    for (const key in configData.links) {
        $('.socials').append(`<a href="${configData.links[key][0]}"><img class="icon" src="${configData.links[key][1]}"></a`)
    }
}
