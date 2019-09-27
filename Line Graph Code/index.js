let canvas=document.querySelector('canvas');
canvas.width=1000;
canvas.height=500;

let xGrid = 10;
let yGrid = 10;
let cellSize = 10;

let ctx=canvas.getContext('2d');

let data = {
    Australia:1000,
    India:2700,
    China:3000,
    Argentina:2000
}
const entries=Object.entries(data);

function drawGrids(){
    ctx.beginPath();
    while(xGrid < canvas.height){
        ctx.moveTo(0,xGrid);
        ctx.lineTo(canvas.width,xGrid);
        xGrid += cellSize;
    }

    while(yGrid < canvas.width){
        ctx.moveTo(yGrid,0);
        ctx.lineTo(yGrid, canvas.height);
        yGrid += cellSize;
    }
    ctx.strokeStyle="gray";
    ctx.stroke();
}

function blocks(count){
    return count * 10;
}

function drawAxis(){
    let yPlot = 40;
    let pop = 0;
    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.moveTo(blocks(5), blocks(5));
    ctx.lineTo(blocks(5), blocks(40));
    ctx.lineTo(blocks(80), blocks(40));
    ctx.moveTo(blocks(5), blocks(40));

    for(let i=1;i<=10;i++){
        ctx.strokeText(pop, blocks(2),blocks(yPlot));
        yPlot -= 5;
        pop += 500;
    }

    ctx.stroke();
}

function drawChart(){

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(blocks(5), blocks(40));

    var xPlot = 10;

    for(const [country, population] of entries){
        var populationInBlocks = population/100;
        ctx.strokeText(country, blocks(xPlot),blocks(40 * populationInBlocks));

        ctx.lineTo(blocks(xPlot),blocks(40-populationInBlocks),2,0,Math.PI * 2,true);
        xPlot +=5;
    }
    ctx.stroke();
}

drawGrids();
drawAxis();
drawChart();