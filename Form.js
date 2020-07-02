class Form{
    constructor(){}


    display(){
        console.log("indeDisplayFunctionOfFormClass")
        var title = createElement('h2')
        title.html("CAR RACING GAME");
        title.position(130,0);
        var input= createInput("NAME");
        var button =createButton("Play");
        var greeting =createElement('h3');
        input.position(130,160);
        button.position(250,200)
        button.mousePressed(
            function(){
                input.hide()
                button.hide()
                var name = input.value();
                playerCount=playerCount+1;
                player.updateCount(playerCount);
                player.update(name);
                greeting.html("Hello"+name);
                greeting.position(130,160);
                
        })
    }
    
}