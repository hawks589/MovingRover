canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rover_width = 100; 
rover_height = 100;
rover_x = 400;
rover_y = 300;
background_image = "mars.jpg";
rover_image = "rover.png";
function add(){
    background_imgTag=new Image();
    background_imgTag.onload= uploadbackground;
     background_imgTag.src=background_image;


     rover_imageTag= new Image();
     rover_imageTag.onload= uploadrover;
     rover_imageTag.src=rover_image;
}


function uploadbackground(){
    ctx.drawImage(background_imgTag ,0,0,  canvas.width, canvas.height); 
}

function uploadrover(){
    ctx.drawImage( rover_imageTag  ,rover_x,rover_y,  rover_width, rover_height);
}

window.addEventListener("keydown" , my_keydown);

    function my_keydown(e){

        keyPress = e.keyCode;
        console.log(keyPress);
        if(keyPress=='38'){

            up();
            console.log("up");
        }
        if(keyPress=='40'){

            down();
            console.log("down");
        }
        if(keyPress=='37'){

            left();
            console.log("left");
        }
        if(keyPress=='39'){

            right();
            console.log("right");
        }
    }

    function up(){


        if(rover_y>=0){

            rover_y=rover_y-10
            console.log("when up arrow is pressed ="+ rover_x + " - " + rover_y);
            uploadbackground();
            uploadrover();


        }
    }


    function down(){
        if(rover_y<=500){

            rover_y= rover_y+10
            console.log("when down arrow is pressed,x= " + rover_x + "y=" + rover_y)
            uploadbackground();
            uploadrover();

        }
    }


    function left(){
        if(rover_x>=0){

            rover_x= rover_x-10
            console.log("when left arrow is pressed,x= " + rover_x + "y=" + rover_y)
            uploadbackground();
            uploadrover();

        }
    }


    
    function right(){
        if(rover_x<=700){

            rover_x= rover_x+10
            console.log("when right arrow is pressed,x= " + rover_x + "y=" + rover_y)
            uploadbackground();
            uploadrover();

        }
    }    