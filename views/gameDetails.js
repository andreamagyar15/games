window.addEventListener("load",function(){

    var url_string = window.location.href;
    url_string=url_string.replace("https://front-end-grupa3-andreamagyar15.c9users.io/Homework/Curs17-OOP/pages/gameDetails.html?id=","")
    console.log(url_string);
    
    var game=new GameDetail();
    game.getDetails(url_string)
   .then(displayGame);

    console.log(game);
    function displayGame(){
        var title=document.getElementById("gameDetailsTitle");
        title.innerHTML=game.title;
        var image=document.getElementById("gameDetailImage");
        image.innerHTML="<img src="+game.image+" />";
        var genre=document.getElementById("genreGame");
        genre.innerHTML+=game.genre;
        var publisher=document.getElementById("gamePublisher");
        publisher.innerHTML+=game.publisher;
        var releaseDate=document.getElementById("releaseDate");
        var date=game.releaseDate;
        var x=new Date(date*1000).toString();
        releaseDate.innerHTML+=x;
        var description=document.getElementById("gameDetailDescription");
        description.innerHTML=game.details;
    }
})