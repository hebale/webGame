$(function(){
    // 텍스트 그림자
    textShadow('.game_title');
})






//  텍스트 그림자
var textShadow = function(target){
    var $this = $(target),
        shaColor = "tomato",
        shaLen = 30,
        textSha = "";

    for( var i =0; i < shaLen; i++){
        textSha += (textSha? ",":"") + i + 'px ' + i + 'px ' +'0 ' + shaColor;
    }
   
    $this.css({'text-shadow': textSha});
}

