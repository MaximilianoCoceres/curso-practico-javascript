//código del cuadrado

console.group("Cuadrado");


function perimetroCuadrado (lado) {
    return lado * 4;
};


function areaCuadrado(lado){
    return lado**2;
}


console.groupEnd();


//código del triangulo
console.group("triangulo")


function perimetroTriangulo (lado1 , lado2 , base) {
    return  lado1 + lado2 + base;
};


function areaTriangulo (base, altura){
    return (base*altura)/2;
}


console.groupEnd();

//codigo del circulo

console.group("circulo");


//diametro

function diametroCirculo(radio){
    return radio*2;
}

//pi

const PI = Math.PI;

console.log("pi es " + PI )


//circunferencia
function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro*PI;
}

//area

function areaCirculo (radio){
    return (radio**2)*PI;
}

console.groupEnd();


//interactuamos con html
//cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}


function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//triangulo
function calcularPerimetroTriangulo(){
    const input = document.getElementById("inputTriangulo1");
    const input2 = document.getElementById("inputTriangulo2");
    const input3 = document.getElementById("inputTriangulo3");
    const value = parseInt (input.value);
    const value2 = parseInt (input2.value);
    const value3= parseInt (input3.value);

    console.log(typeof (value));

    const perimetro = perimetroTriangulo(value, value2,value3);
    alert(perimetro);
}


function calcularAreaTriangulo(){
    const input3 = document.getElementById("inputTriangulo4");
    const input4 = document.getElementById("inputTriangulo5");
    const value3 = input3.value;
    const value4 = input4.value;

    const area = areaTriangulo(value3,value4);
    alert(area);
}

//circulo

function calcularDiametroCirculo(){
    const input = document.getElementById("inputCirculo1");
    const value = input.value;

    const diametro = diametroCirculo(value);
    alert(diametro);
}

function calcularCircunferenciaCirculo(){
    const input = document.getElementById("inputCirculo1");
    const value = input.value;

    const circunferencia = perimetroCirculo(value);
    alert(circunferencia);
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo1");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}