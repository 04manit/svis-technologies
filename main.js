var label="false";
var left_ear_x=0,left_ear_y=0;
var right_ear_x=0,right_ear_y=0;
var bindi_x=0,bindi_y=0;
var goggles_x=0,goggles_y=0;
var nose_x_neck=0,nose_y_neck=0;
var nose_x_cap=0, nose_y_cap=0;
var nose_x_pagdi=0, nose_y_pagdi=0;
var nose_x_bird=0, nose_y_bird=0;
var obj="";
function preload(){
    bindi = loadImage("bindi.png");
    goggles = loadImage("goggles.png");
    necklace = loadImage("necklace.png");
    cap = loadImage("cap.PNG");
    pagdi = loadImage("pagdi.png");
    bird = loadImage("bird.png");
}
function setup(){
    canvas = createCanvas(300,200);
    // canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(300,300);
    // video.parent('monitor');
    
}
function modelLoaded(){
    console.log("Model Loaded !!");
}
function got_poses(results){
    if(results.length > 0){
        console.log(results);
        console.log(obj);
        if(obj == "bindi"){
            bindi_x = results[0].pose.nose.x-5;
            bindi_y = results[0].pose.nose.y-35;
            draw();
        }
        if(obj == "goggles"){
            goggles_x = results[0].pose.nose.x-30;
            goggles_y = results[0].pose.nose.y-30;
            draw();
        }
        if(obj == "necklace"){
            nose_x_neck = results[0].pose.nose.x-25;
            nose_y_neck = results[0].pose.nose.y+50;
            draw();
        }
        if(obj == "cap"){
            nose_x_cap = results[0].pose.nose.x-30;
            nose_y_cap = results[0].pose.nose.y-100;
            draw();
        }
        if(obj == "pagdi"){
            nose_x_pagdi = results[0].pose.nose.x-40;
            nose_y_pagdi = results[0].pose.nose.y-100;
            draw();
        }
        if(obj == "bird"){
            nose_x_bird = results[0].pose.leftShoulder.x-30;
            nose_y_bird = results[0].pose.leftShoulder.y-70;
            draw();
        }
        if(obj == "all"){
            bindi_x = results[0].pose.nose.x-5;
            bindi_y = results[0].pose.nose.y-35;
            goggles_x = results[0].pose.nose.x-30;
            goggles_y = results[0].pose.nose.y-30;
            nose_x_neck = results[0].pose.nose.x-25;
            nose_y_neck = results[0].pose.nose.y+50;
            nose_x_pagdi = results[0].pose.nose.x-40;
            nose_y_pagdi = results[0].pose.nose.y-100;
            nose_x_bird = results[0].pose.leftShoulder.x-30;
            nose_y_bird = results[0].pose.leftShoulder.y-70;
            draw();
        }
    }
}
function start(){
    pose_Net = ml5.poseNet(video, modelLoaded);
    pose_Net.on('pose', got_poses);
    label = "true";
}
function draw(){
    if(label == "true"){
        image(video,0,0,300,300);
    }
    if(obj == "all"){
        image(bindi, bindi_x, bindi_y, 10, 10);
        image(goggles, goggles_x, goggles_y, 70, 30);
        image(necklace, nose_x_neck, nose_y_neck, 60, 60);
        image(pagdi, nose_x_pagdi, nose_y_pagdi, 90, 60);
        image(bird, nose_x_bird, nose_y_bird, 70, 45);
    }
    if(obj == "bindi"){
        image(bindi, bindi_x, bindi_y, 10, 10);
    }
    if(obj == "goggles"){
        image(goggles, goggles_x, goggles_y, 70, 30);
    }
    if(obj == "necklace"){
        image(necklace, nose_x_neck, nose_y_neck, 60, 60);
    }
    if(obj == "cap"){
        image(cap, nose_x_cap, nose_y_cap, 60, 60);
    }
    if(obj == "pagdi"){
        image(pagdi, nose_x_pagdi, nose_y_pagdi, 90, 60);
    }
    if(obj == "bird"){
        image(bird, nose_x_bird, nose_y_bird, 70, 45);
    }
}
function take_snapshot(){
    save('extra_filter_img.png');
}
