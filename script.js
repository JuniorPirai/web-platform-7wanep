//DESAFIOS SPRINT 8 FINAL
// --> DESAFIO 1 ( PORTARIA)
let nome = prompt('Digite seu nome');
let idade = Number(prompt('Digite sua idade'));
let estaAcompanhado = prompt(
  'Você está acompanhado? Digite "s" para sim e "n" para não'
);

if (estaAcompanhado.toLocaleLowerCase() == 's') {
  estaAcompanhado = true;
} else {
  estaAcompanhado = false;
}

if (idade < 18) {
  alert(`Entrada não permitida para ${nome}: Menor de idade`);
} else if (idade >= 18 && estaAcompanhado) {
  alert(`Entrada permitida para ${nome}: Conceder desconto`);
} else {
  alert(`Entrada permitida para ${nome}:Valor integral`);
}



// --> DESAFIO 2 ( APROVADO OU REPROVADO)
function verificaAprovacao(numMaterias) {
  let nome = prompt('Digite o nome do aluno');
  // Verifica se o tamanho do nome é menor que 5 caracteres
  if (nome.length < 5) {
    return 'Nome inválido';
  } else {
    // Solicita ao usuário que digite a quantidade de presenças do aluno
    let presenca = parseInt(prompt('Digite o total de presençã do aluno:'));

    // Verifica se o valor de presenca é menor que 0 ou maior que 10
    if (presenca < 0 || presenca > 10) {
      return 'Valor de presença inválido';
    } else {
      let somaNota = 0;

      // Loop que itera sobre o número de matérias informado
      for (let i = 0; i <= numMaterias; i++) {
        // Solicita ao usuário que digite o nome da matéria atual
        let materia = prompt("Digite o nome da matéria " + i + " : ");
         // Solicita ao usuário que digite a nota da matéria atual
         let nota = parseInt(prompt("Digite a nota da matéria " + materia + ":"));

           // Verifica se o valor da nota é menor que 0 ou maior que 10
           if(nota < 0 || > 10){
             return "Valor da nota inválido";

           }
      }
      // Calcula a média das notas
 let mediaNota =  somaNota / numMaterias;

 // Verifica se a média das notas é maior ou igual a 8 e a presença é maior ou igual a 6
 if(mediaNota >= 8 && presenca >= 6){
   return "A nota do aluno "+ nome +" é de "+ mediaNota +" e sua presença é de " + presenca + ": Aluno aprovado";

 } else {
   return "A nota do aluno " + nome + " é de " + mediaNota +" e sua presença é de "+ presenca +": Aluno reprovado "
 }
    }
  }
}

console.log(verificaAprovacao(10));

// --> DESAFIO 3 CONTANDO CASAS 
// Função para gerar um número aleatório entre 1 e 20
function gerarNumAleatorio(){
  return Math.floor(Math.random() * 20) + 1;
}

// Função para verificar o palpite do usuário em relação ao número aleatório
function verificaPalpite(numeroAleatorio, palpite){
  let tentativa = 1;

    // Enquanto o número aleatório for diferente do palpite do usuário, continua pedindo mais palpites
    while(numeroAleatorio !== palpite){
      alert ("Tente novamente")
      palpite = parseInt(prompt("Digite o seu palpite(número entre 1 e 20):"));
      alert(`Você acertou na tentativa ${tentativa}.`);
    }

}
// Gera um número aleatório
const numeroAleatorio = gerarNumAleatorio();

// Solicita ao usuário que digite um palpite
let palpite = parseInt(prompt("Digite o seu palpite (número entre 1 e 20):"));

// Chama a função verificarPalpite passando o número aleatório e o palpite do usuário como argumentos
verificaPalpite(numeroAleatorio, palpite);


// --> DESAFIO 4 ( )


