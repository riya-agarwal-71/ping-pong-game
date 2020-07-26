// max left paddle (vw - paddlewidth)
// min left paddle 0
// max left ball (vw - ballwidth)
// min left ball 0
// min top ball 0
// max top ball (vh - ballheight)
// top ball collision with upper paddle (paddlewidth)
// top ball collision with lower paddle (vh - paddlewidth - ballwidth)
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
        return gamearea.offsetHeight - ball.offsetHeight;
    }
    function topcollupper(){
        return p1.offsetHeight;
    }
    function topcolllower(){
        return gamearea.offsetHeight - p1.offsetHeight - ball.offsetWidth;
    }



























})()