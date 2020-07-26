(function(){
    var p1 = document.getElementById("one");
    var p2 = document.getElementById("two");
    var ball = document.getElementById("ball");
    var gamearea = document.getElementById("gamearea");
    var scoresection = document.getElementById("score");
    function maxleftforpaddle(){
        return gamearea.offsetWidth - p1.offsetWidth;
    }
    function maxleftforball(){
        return gamearea.offsetWidth - ball.offsetWidth;
    }
    function maxtopforball(){
        return gamearea.offsetHeight - ball.offsetHeight - p1.offsetHeight;
    }
    function moveball(){
        var leftchange = 2;
        var topchange = 2;
        var leftnow = ball.getBoundingClientRect().left - gamearea.getBoundingClientRect().left;
        var topnow = ball.getBoundingClientRect().top - gamearea.getBoundingClientRect().top;
        var score = 0;
        var int = setInterval(function(){
            var paddleleft = p1.getBoundingClientRect().left - gamearea.getBoundingClientRect().left;
            if(leftnow + leftchange <= maxleftforball() && leftnow + leftchange >= 0){
                leftnow = leftnow + leftchange;
                ball.style.left = leftnow + 'px';
            }else{
                leftchange = -leftchange;
                leftnow = leftnow + leftchange;
                ball.style.left = leftnow + 'px';
            }
            if(topnow + topchange <= maxtopforball() && topnow + topchange >= p1.offsetHeight){
                topnow = topnow + topchange;
                ball.style.top = topnow + 'px';
            }else{
                topchange = -topchange;
                topnow = topnow + topchange;
                ball.style.top = topnow + 'px';
            }
            if(topnow == p1.offsetHeight+1 || topnow == maxtopforball()-1){
                if(leftnow >= paddleleft-3 && leftnow <= paddleleft + p1.offsetWidth+3){
                    score++;
                    scoresection.innerHTML = score;
                }else{
                    alert("game over! your score is " + score + "\nThe max score is by " + "xyz" + " which is " + score);
                    clearInterval(int);
                }
            }
        },10)
    }
    moveball();
    window.addEventListener('keydown',function(event){
        var leftnow = p1.getBoundingClientRect().left - gamearea.getBoundingClientRect().left;
        switch(event.keyCode){
            case 39:
                if(leftnow > maxleftforpaddle()){
                    break;
                }
                leftnow = leftnow + 20;
                p1.style.left = leftnow + 'px';
                p2.style.left = leftnow + 'px';
                break;
            case 37:
                if(leftnow < 0){
                    break;
                }
                leftnow = leftnow - 20;
                p1.style.left = leftnow + 'px';
                p2.style.left = leftnow + 'px';
                break;
            case 65:
                if(leftnow < 0){
                    break;
                }
                leftnow = leftnow - 20;
                p1.style.left = leftnow + 'px';
                p2.style.left = leftnow + 'px';
                break;
            case 68:
                if(leftnow > maxleftforpaddle()){
                    break;
                }
                leftnow = leftnow + 20;
                p1.style.left = leftnow + 'px';
                p2.style.left = leftnow + 'px';
                break;
        }
    })
})()