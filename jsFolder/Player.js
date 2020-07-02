class Player{
    constructor(){}
     getCount(){
         console.log("insideGetCountPlayer")
         database.ref('playerCount').on("value",function(data){
             playerCount = data.val();
         });
         
     }
     updateCount(count){
         database.ref('/').update({
            playerCount: count
         })
     }
     update(name){
         var playerIndex = "player"+playerCount;
         database.ref(playerIndex).set({
             name :name
         })
     }
}