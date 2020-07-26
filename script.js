(function(){
    var p1 = document.getElementById("one");
    var p2 = document.getElementById("two");
    var ball = document.getElementById("ball");
    var gamearea = document.getElementById("gamearea")
    function maxleftforpaddle(){
        return gamearea.offsetWidth - p1.offsetWidth;
    }
    function maxleftforball(){
        return gamearea.offsetWidth - ball.offsetWidth;
    }
    function maxtopforball(){
        return gamearea.offsetHeight - ball.offsetHeight - p1.offsetHeight;
    }
    function topcollupper(){
        return p1.offsetHeight;
    }
    function topcolllower(){
        return gamearea.offsetHeight - p1.offsetHeight - ball.offsetWidth;
    }
    function moveball(){
        var leftchange = 2;
        var topchange = 2;
        var leftnow = ball.getBoundingClientRect().left - gamearea.getBoundingClientRect().left;
        var topnow = ball.getBoundingClientRect().top - gamearea.getBoundingClientRect().top;
        var int = setInterval(function(){
            if(leftnow + leftchange < maxleftforball() && leftnow + leftchange > 0){
                leftnow = leftnow + leftchange;
                ball.style.left = leftnow + 'px';
            }else{
                leftchange = -leftchange;
                leftnow = leftnow + leftchange;
                ball.style.left = leftnow + 'px';
            }
            if(topnow + topchange < maxtopforball() && topnow + topchange > p1.offsetHeight){
                topnow = topnow + topchange;
                ball.style.top = topnow + 'px';
            }else{
                topchange = -topchange;
                topnow = topnow + topchange;
                ball.style.top = topnow + 'px';
            }
        },8)
    }
    moveball();
})()