function resolver(){

let a=document.getElementById("a").value.trim();
let b=document.getElementById("b").value.trim();
let c=document.getElementById("c").value.trim();

if(a==""||b==""||c==""){
document.getElementById("resultado").innerHTML="Debe completar todos los campos.";
return;
}

if(isNaN(a)||isNaN(b)||isNaN(c)){
document.getElementById("resultado").innerHTML="Solo se permiten números.";
return;
}

a=parseFloat(a);
b=parseFloat(b);
c=parseFloat(c);

if(a==0){
document.getElementById("resultado").innerHTML="El coeficiente A no puede ser cero.";
return;
}

let d=(b*b)-(4*a*c);

if(d>0){

let x1=(-b+Math.sqrt(d))/(2*a);
let x2=(-b-Math.sqrt(d))/(2*a);

document.getElementById("resultado").innerHTML=
"Discriminante: "+d+
"<br>x₁ = "+x1+
"<br>x₂ = "+x2;

}
else if(d==0){

let x=(-b)/(2*a);

document.getElementById("resultado").innerHTML=
"Discriminante: "+d+
"<br>Única solución: "+x;

}
else{

let real=(-b/(2*a)).toFixed(2);
let imaginaria=(Math.sqrt(-d)/(2*a)).toFixed(2);

document.getElementById("resultado").innerHTML=
"Discriminante: "+d+
"<br>La ecuación posee dos soluciones complejas."+
"<br>x₁ = "+real+" + "+imaginaria+"i"+
"<br>x₂ = "+real+" - "+imaginaria+"i";

}

}