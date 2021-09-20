var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goHome = document.querySelector("#goHome");

goHome.addEventListener("click", function(){
    window.location.replace("./index.html");
}

clear.addEventListener("click", function() {
localStorage.clear();
location.reload();
});

function compare (a,b){
    console.log("[A]:", a);
    console.log("[B]:", b);
    if (a.score>b.score){
        return -1;
    }

if(a.score <b.score){
    return 1;
    {
    return 0;
}

var allScores = localStorage.getItem("allScores");
allScores=JSON.parse(allScores);
if(allScores !==null){
    for (var i=0; i<allScores.length;i++){
        var createLi=document.createElement("li");
        createLi.textContent=allScores[i].initials+"-"+allScores[i].score;
        highScore.appendChild(createLi);
    }
}
}
}