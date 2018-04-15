window.addEventListener("load",function(){
 var games= new Games();
 games.getAllGames()
 .then(displayGames);
 var template=document.getElementById("template");
 var containerGames=document.getElementById("container");
 var creatGame=document.getElementById("creatGame");
 creatGame.addEventListener("click",displayForm);
 var formTag=document.getElementsByTagName("form")[0];
 var buttonFormClose=document.getElementById("sendButton");
 buttonFormClose.addEventListener("click",closeForm);
 var buttonCancelForm=document.getElementById("cancelButton");
 buttonCancelForm.addEventListener("click",cancelForm);
 
 function displayGames(gamesDetail){
     console.log(gamesDetail);
     for(var i=0;i<gamesDetail.length;i++){
         displayElement(gamesDetail[i]);
       
     }
 
 }
 
 function displayElement(element){
    var templateClone=template.cloneNode(true);
    templateClone.id=element._id;
    var title=templateClone.querySelector("#gameTitle");
    var details=templateClone.querySelector("#gameContent");
    var image=templateClone.querySelector("#gameImage");
    image.innerHTML="<img src="+element.imageUrl+" />";
    title.innerHTML=element.title;
    details.innerHTML=element.description;
    containerGames.appendChild(templateClone);
    var detailContainer=templateClone.querySelector(".detailContainer");
    detailContainer.innerHTML="<a href="+"https://front-end-grupa3-andreamagyar15.c9users.io/Homework/Curs17-OOP/pages/gameDetails.html?id="+templateClone.id+">More info..</a>";
     
    var buttonDelete=templateClone.querySelector("#deleteButton");
    buttonDelete.addEventListener("click",function(event){
    deleteElement(event);
    });
    var buttonEdit=templateClone.querySelector(".editButton"); 
    buttonEdit.addEventListener("click",function(event){
    console.log(event);
    editElement(event);
     
     });
     
      };
      
 function deleteElement(event){
  var elementId=event.path[2].id;
  console.log(event);
  games.deleteGames(elementId,event.path[2]);
  
 }   
 
 function editElement(event){
  var newElement= new Games();
  
  var oldId=event.path[2].id;
  newElement.id=oldId;
  var oldTitle=event.path[2].childNodes[1].innerHTML;
  var newTitle=prompt("Please enter the new Title",oldTitle);
  newElement.title=newTitle;  
  
  var oldImage=event.path[2].childNodes[3].lastChild.currentSrc;
  var newImage=prompt("Please enter the new Image",oldImage);
  newElement.image=newImage;
  
  var oldDetails=event.path[2].childNodes[5].innerText;
  var newDetails=prompt("Please enter the new Details",oldDetails);
  newElement.details=newDetails; 
  
  console.log(newElement);
  
  var newGameTitle=event.path[2].querySelector("#gameTitle");
  var newGameDetails=event.path[2].querySelector("#gameContent");
  var newGameImage=event.path[2].querySelector("#gameImage");
            
  newGameTitle.innerHTML=newElement.title;
  newGameImage.innerHTML="<img src="+newElement.image+" />";
  newGameDetails.innerHTML=newElement.details;
  games.editGames(oldId,newElement,event)

 }

 function displayForm(event){
  event.preventDefault();
  formTag.style.display="block";

       
}
 function closeForm(event){
  event.preventDefault();
  var object= new objectCreat();

  var newTitle=document.getElementsByName("Title");
  var newImage=document.getElementsByName("imageUrl");
  var newGenre=document.getElementsByName("genre");
  var newPublisher=document.getElementsByName("publisher");
  var newRelease=document.getElementsByName("release");
  var newDetails=document.getElementsByName("detailsCreat");

  object.genre=newGenre[0].value;
  object.title=newTitle[0].value;
  object.releaseDate=newRelease[0].value;
  object.publisher=newPublisher[0].value;
  object.imageUrl=newImage[0].value;
  object.description=newDetails[0].value;
 
  games.creatNewGame(object);
  
  const oldTitle=document.getElementById("gameTitle");
  const oldImage=document.getElementById("gameImage");
  const oldContent=document.getElementById("gameContent");
  
  oldTitle.innerHTML=object.title;
  oldImage.innerHTML="<img src= "+object.imageUrl+" />";
  oldContent.innerHTML=object.description;
  
  containerGames.appendChild(template);
 
  formTag.style.display="none";
}

function objectCreat(){
 this.title="";
 this.genre="",
 this.imageUrl="";
 this.publisher="";
 this.releaseDate="";
}

function cancelForm(){
 event.preventDefault();
 formTag.style.display="none";
}
});