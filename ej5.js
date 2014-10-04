//imprima 1000 signos de exclamacion
var x=''
var n=1000
for(i=0;i!=n+1;i++) {
  x=x+'!'
}
//console.log(x)


//dada una variable p dibuje un cuadrado de pxp *s

var p=8
var motherline= ''
for(i=0;i!=p;i++) {
  motherline=motherline+'*'
}
for(i=0;i!=p;i++) {
  console.log(motherline)	
}


console.log('')
for (var i=0; i<p; i++) {
  var line = '';
  for (var j=0; j<p; j++) {
  	line = line + ((j+i)%2?'o':'x');
  }
  console.log(line);
}
