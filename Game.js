class Game {
    constructor(){}
     
    getState(){
        console.log("insideGetState")
        var gameStateRef = database.ref('gameState')
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })    
    }
    update(state){
        database.ref('/').update({
            gameState : state
        })
    }
    start(){
        console.log("insideStartFunction")
        if(gameState===0){
            player=new Player()
            player.getCount();
            form = new Form()
            form.display();

        }
    }
}