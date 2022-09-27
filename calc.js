const botonNumeros = document.getElementsByName('data-number');
const botonOpera = document.getElementsByName('data-operacion');
const botonIgual = document.getElementsByName('data-igual')[0];
const botonBorrado = document.getElementsByName('data-borra')[0];
var resultado = document.getElementById('result');

var opeActual = ''; 
var opeAnterior = ''; 
var operacion = undefined;

//console.log(botonNumeros); 
//console.log(botonOpera);
//console.log(botonIgual);
//console.log(botonBorrado);
//console.log(resultado);

botonNumeros.forEach(function(boton){
	boton.addEventListener('click',function(){
		agregarNumeros(boton.innerText)
	})
})

botonOpera.forEach(function(boton){
	boton.addEventListener('click',function(){
		seleccionarOperacion(boton.innerText) 
	})
})

botonIgual.addEventListener('click',function(){
	calcular();
	actualizarDisplay();
})

botonBorrado.addEventListener('click', function(){
	clearDisplay();
	actualizarDisplay();
})


function agregarNumeros(num){
	opeActual = opeActual.toString() + num.toString();
	actualizarDisplay(); 
}

function actualizarDisplay(){
	result.value = opeActual;
}

function seleccionarOperacion(opera){
	if (opeActual === ' ')return;
	if (opeAnterior !== ' '){
		calcular()
	}
	operacion = opera.toString();
	opeAnterior = opeActual;
	opeActual = ' ';  
}

function calcular(){
	var calculo;
	const anterior = parseFloat(opeAnterior);
	const actual = parseFloat(opeActual);

	if (isNaN(anterior) || isNaN(actual)) return;
	switch(operacion){
		case '+':
		    calculo = anterior + actual;
		    break;
		case '-':
		    calculo = anterior - actual;
		    break; 
		case 'x':
		    calculo = anterior * actual;
		    break;
		case '/':
		    calculo = anterior / actual;
		    break;
		default:
		    return;
	}
	opeActual = calculo;
	operacion = undefined;
	opeAnterior = ' '; 
} 
function clearDisplay(){
	opeActual = ' ';
	opeAnterior = ' ';
	operacion = undefined; 
}

clearDisplay();