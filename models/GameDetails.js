function GameDetail(){
    this.title="";
    this.releaseDate="";
    this.publisher="";
    this.genre="";
    this.image="";
    this.details="";
    
}
GameDetail.prototype.getDetails=function(id){
    var that=this;
   return $.ajax({
        url:"https://games-world.herokuapp.com/games"+"/"+id,
        method:'GET'
    })
    .then (function(response){
        that.title=response.title;
        that.releaseDate=response.releaseDate;
        that.publisher=response.publisher;
        that.genre=response.genre;
        that.image=response.imageUrl;
        that.details=response.description;
    })
}