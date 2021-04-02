var primeiroValor = parseFloat(prompt("Digite o primeiro valor"))
var segundoValor = parseFloat(prompt("Digite o segundo valor"))
var operacao = prompt("Escolha uma operação pelo número: \n 1 - Divisão \n 2 - Multiplicação \n 3 - Soma \n 4 - Subtração")

if(operacao == 1){
  var resultado = primeiroValor / segundoValor
  document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "<h2>")
}else if(operacao == 2){
  var resultado = primeiroValor * segundoValor
  document.write("<h2>" + primeiroValor + " X " + segundoValor + " = " + resultado + "<h2>")
}else if(operacao == 3){
  var resultado = primeiroValor + segundoValor
  document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "<h2>")
}else if(operacao == 4){
  var resultado = primeiroValor - segundoValor
  document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "<h2>")
}else {
  document.write("<h2>Opção inválida<h2>")
}
