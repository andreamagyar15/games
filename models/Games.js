function Games(){
    this.id="";
    this.title="";
    this.image="";
    this.details="";
}

Games.prototype.getAllGames=function(){
return $.ajax({
    url:"https://games-world.herokuapp.com/games",
    method:"GET",
    
})
}
Games.prototype.deleteGames=function(id,elementToDelete){
    return $.ajax({
        url:"https://games-world.herokuapp.com/games/"+id,
        method:'DELETE',
        success:function(response){
            console.log(elementToDelete);
            console.log(response);
            elementToDelete.remove();
        }
    })

}
Games.prototype.editGames=function(id,elementToReplace,event){
    return $.ajax({
        url:"https://games-world.herokuapp.com/games/"+id,
        method:'PUT',
        data:{
            title:elementToReplace.title,
            imageUrl:elementToReplace.image,
            description:elementToReplace.details,
        }
    })
}
Games.prototype.creatNewGame=function(newElement){
    return $.ajax({
        url:"https://games-world.herokuapp.com/games",
        method:'POST',
        data:{
            "title":newElement.title,
            "releaseDate": newElement.releaseDate,
            "genre": newElement.genre,
            "publisher":newElement.publisher,
            "imageUrl":newElement.image,
        },
        //success:function(response){
        //    console.log("response post: ",response);
       // }//
    })
}

