var canvas=new fabric.Canvas("myCanvas");

player_X=10;
player_Y=10;

height_block=30;
width_block=30;

player_object="";
block_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(130);
        player_object.set({
            top:player_Y,left:player_X
        });
        canvas.add(player_object);
    });
};

function block_update(get_Image){
    fabric.Image.fromURL(get_Image,function(Img){
        block_object=Img;
        block_object.scaleToWidth(width_block);
        block_object.scaleToHeight(height_block);
        block_object.set({
            top:player_Y,left:player_X
        });
        canvas.add(block_object);
    });
};

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    var keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey==true && keypressed=='80'){
        console.log("Shift and P pressed together");
        height_block=height_block + 10;
        width_block=width_block + 10;
        document.getElementById("current_width").innerHTML=width_block;
        document.getElementById("current_height").innerHTML=height_block;
    }

    if(e.shiftKey==true && keypressed=='77'){
        console.log("Shift and M pressed together");
        height_block=height_block - 10;
        width_block=width_block - 10;
        document.getElementById("current_width").innerHTML=width_block;
        document.getElementById("current_height").innerHTML=height_block;
    }

    if(keypressed=='38'){
        up();
        console.log("up");
    }

    if(keypressed=='40'){
        down();
        console.log("down");
    }

    if(keypressed=='37'){
        left();
        console.log("left");
    }

    if(keypressed=='39'){
        right();
        console.log("right");
    }

    if(keypressed=='87'){
        block_update('wall.jpg');
        console.log("w");
    }

    if(keypressed=='71'){
        block_update('ground.png');
        console.log("g");
    } 

    if(keypressed=='76'){
        block_update('light_green.png');
        console.log("l");
    }

    if(keypressed=='84'){
        block_update('trunk.jpg');
        console.log("t");
    }

    if(keypressed=='82'){
        block_update('roof.jpg');
        console.log("r");
    }

    if(keypressed=='89'){
        block_update('yellow_wall.png');
        console.log("y");
    }

    if(keypressed=='68'){
        block_update('dark_green.png');
        console.log("d");
    }

    if(keypressed=='85'){
        block_update('unique.png');
        console.log("u");
    }

    if(keypressed=='67'){
        block_update('cloud.jpg');
        console.log("c");
    }
}

function up(){
    if(player_Y>=0){
        player_Y=player_Y-height_block;
        console.log("block height = "+height_block);
        console.log("When up arrow key is pressed, X = "+player_X + ", Y = "+player_Y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_Y<=500){
        player_Y=player_Y+height_block;
        console.log("block height = "+height_block);
        console.log("When down arrow key is pressed, X = "+player_X + ", Y = "+player_Y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_X>0){
        player_X=player_X-width_block;
        console.log("block width = "+width_block);
        console.log("When left arrow key is pressed, X = "+player_X + ", Y = "+player_Y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_Y<800){
        player_X=player_X+width_block;
        console.log("block width = "+width_block);
        console.log("When right arrow key is pressed, X = "+player_X + ", Y = "+player_Y);
        canvas.remove(player_object);
        player_update();
    }
}