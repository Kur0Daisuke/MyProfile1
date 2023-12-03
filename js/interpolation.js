const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 5;
canvas.height = window.innerHeight - 5;

function Point(x,y) {
    this.x = x;
    this.y = y;
    this.Move = function() {
        let direction = (Math.floor(Math.random() * 10)<5?1:-1);
        
        console.log(x,y)
    }
}

var A = new Point(canvas.width-100,canvas.width-100)

var B = {
	x: canvas.width-100,
	y: 75,
}

var C = {
	x: 80,
	y:130,
}

var D = {
	x: 300,
	y: canvas.height-100,
}

var E = {
	x: 600,
	y: 100,
}

function VLerp(A,B,t) {
	return {
		x: Lerp(A.x,B.x,t),
		y: Lerp(A.y,B.y,t),
		radius: 10,
	}
}

function Lerp(A,B,t) {
	return A + (B-A)*t;
}

function drawPoints(x,y,radius, style="rgba(0, 166, 255, 0.42)") {
	ctx.beginPath();
	ctx.fillStyle=style
	ctx.arc(x, y, radius, 0, 2 * Math.PI);
	ctx.fill()
	ctx.stroke();
}

function DrawLine(S,E, style="rgba(0, 166, 255, 0.42)") {
	ctx.beginPath();
	ctx.moveTo(S.x, S.y);
	ctx.lineTo(E.x, E.y);
	ctx.strokeStyle = style;
	ctx.stroke();
}

A.Move()
console.log(A)

function Animate() {
	ctx.clearRect(0,0,canvas.width, canvas.height)

	DrawLine(A,B)
	DrawLine(B,C)
	DrawLine(C,D)
	DrawLine(D,E)

	drawPoints(A.x,A.y,10);
	drawPoints(B.x,B.y,10);
	drawPoints(C.x,C.y,10);
	drawPoints(D.x,D.y,10);
	drawPoints(E.x,E.y,10);

	let sec = new Date().getTime()/1500
	let t = (Math.sin(sec)+1)/2;
	let pointBetweenAB = VLerp(A,B,t)
	let pointBetweenBC = VLerp(B,C,t)
	let pointBetweenCD = VLerp(C,D,t)
	let pointBetweenDE = VLerp(D,E,t)

	drawPoints(pointBetweenAB.x,pointBetweenAB.y,10)
	drawPoints(pointBetweenBC.x,pointBetweenBC.y,10)
	drawPoints(pointBetweenCD.x,pointBetweenCD.y,10)
	drawPoints(pointBetweenDE.x,pointBetweenDE.y,10)

	let pointBetweenCurve1 = VLerp(pointBetweenAB,pointBetweenBC,t)
	let pointBetweenCurve2 = VLerp(pointBetweenBC,pointBetweenCD,t)
	let pointBetweenCurve3 = VLerp(pointBetweenCurve1,pointBetweenCurve2,t)
	let pointBetweenCurve4 = VLerp(pointBetweenCD,pointBetweenDE,t)
	let pointBetweenCurve5 = VLerp(pointBetweenCurve3,pointBetweenCurve4,t)

	drawPoints(pointBetweenCurve1.x,pointBetweenCurve1.y,10)
	drawPoints(pointBetweenCurve2.x,pointBetweenCurve2.y,10)
	DrawLine(pointBetweenAB,pointBetweenBC)
	DrawLine(pointBetweenBC,pointBetweenCD)

	DrawLine(pointBetweenCurve1,pointBetweenCurve2)
	DrawLine(pointBetweenCurve3,pointBetweenCurve5)
	DrawLine(pointBetweenBC,pointBetweenCurve3)

	DrawLine(B,pointBetweenCurve1)
	DrawLine(C,pointBetweenCurve2)

	drawPoints(pointBetweenCurve3.x,pointBetweenCurve3.y,10);
	drawPoints(pointBetweenCurve4.x,pointBetweenCurve4.y,10);
	drawPoints(pointBetweenCurve5.x,pointBetweenCurve5.y,10,"#FFF");
	requestAnimationFrame(Animate)	
}
Animate()
