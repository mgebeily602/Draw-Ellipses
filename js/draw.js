//FROM; http://www.williammalone.com/briefs/how-to-draw-ellipse-html5-canvas/

//Fetch element
var c = document.getElementById("c");
var context = c.getContext("2d");

// Geomerty functions

const dotproduct = (a,b) => a.map((z,i)=>a[i]*b[i]).reduce((m,n) => m+n);
const translate = (sw,x,dx) =>[x[0].map((u) => sw*u+dx[0]),x[1].map((v) =>sw*v+dx[1])];
function rotate(x,u){
    // rotation of a list of vectors x through an angle u CCW.
    rot_mat=[
                [Math.cos(u), Math.sin(u)], 
                [-Math.sin(u), Math.cos(u)]
            ];
    return multiply(rot_mat,x)
    
}

// Algebra functions

const transpose = (a) => a[0].map((z,j) => a.map((w) => w[j]));
function multiply(a,b){    
    const prod = (a,b) => a.map((z) => transpose(b).map((w) =>dotproduct(z,w)));
    return prod(a,b);
}


function drawEllipse(_Pvals) {
    x0=_Pvals[0], y0=_Pvals[1], rx=_Pvals[2], ry=_Pvals[3], t=_Pvals[4];


    axes=[
            [  0,  rx, rx,  0 ],
            [-ry, -ry, ry, ry]
        ]; //original axes
    Rot=rotate(axes, t); //rotate axes
    Mov1=translate(1,Rot,[x0,y0]);
    Mov2=translate(-1,Rot,[x0,y0]);
    context.beginPath();
    
    context.moveTo(Mov1[0][0], Mov1[1][0]);
    
    context.bezierCurveTo(
        Mov1[0][1], Mov1[1][1],
        Mov1[0][2], Mov1[1][2],
        Mov1[0][3], Mov1[1][3]
        ); 
        
    context.bezierCurveTo(
        Mov2[0][1], Mov2[1][1],
        Mov2[0][2], Mov2[1][2],
        Mov2[0][3], Mov2[1][3]);
            
            
    context.strokeStyle="rgb(255,245,203)";
    context.stroke();
    
    //   context.fillStyle =;
    //   context.fill();
    context.closePath();
}

function drawCircle(_Pvals){
    x0=_Pvals[0], y0=_Pvals[1], r=_Pvals[2];
    context.moveTo(x0+r,y0);
    context.arc(x0, y0, r, 0, 2 * Math.PI, false);
    context.strokeStyle="rgb(255,245,203)";
    context.stroke();
    // context.lineWidth = 2;
}

ang=-Math.PI/6;
curv1=[0, 1000, 400, 1000,ang];
curv2=[400,1000, 265];





//Fire function
drawEllipse(curv1);
// drawEllipse(curv2);
drawCircle(curv2);