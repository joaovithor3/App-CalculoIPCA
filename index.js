import dados  from "readline-sync";



let salarios = [
    {ano: 2010, salario: 510},
    {ano: 2011, salario: 545},
    {ano: 2012, salario: 622},
    {ano: 2013, salario: 678},
    {ano: 2014, salario: 724},
    {ano: 2015, salario: 788},
    {ano: 2016, salario: 880},
    {ano: 2017, salario: 937},
    {ano: 2018, salario: 954},
    {ano: 2019, salario: 998},
    {ano: 2020, salario: 1045},
]

let ipca =[
    {ano:2010, inflacao: 5.91},
    {ano:2011, inflacao: 6.5},
    {ano:2012, inflacao: 5.84},
    {ano:2013, inflacao: 5.91},
    {ano:2014, inflacao: 6.41},
    {ano:2015, inflacao: 10.67},
    {ano:2016, inflacao: 6.29},
    {ano:2017, inflacao: 2.95},
    {ano:2018, inflacao: 3.75},
    {ano:2019, inflacao: 4.31},
    {ano:2020, inflacao: 4.52},
]
console.log("Escolha uma das alternativas:","\n" );

console.log("1 - Listar os salários minimos de 2010 a 2020.");
console.log("2 - Listar o índice IPCA de 2010 a 2020.");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA.","\n")

let pergunta = dados.question("Escolha uma opção: ");

if (pergunta == 1){
    
    console.log("Opção escolhida: 1","\n");

  
                    for(let resposta of salarios){
                                
                                console.log(`Ano: .................. ${resposta.ano} `);
                                console.log(`Salário minimo: ....... R$${resposta.salario},00`,"\n");
                                
        }                       
}       else if( pergunta == 2){
                    console.log("Opção escolhida: 2");
                        for(let resposta of ipca){
                                
                                console.log(`ANO:  ................... ${resposta.ano}`);
                                console.log(`IPCA: ................... ${resposta.inflacao.toString().replace(".", ",")}% `,"\n");
                                
                        }
}       else if(pergunta == 3){
    
    console.log("Opção escolhida: 3","\n")
    
    for (let i = 1; i < salarios.length; i++) {
        let dinheiro = salarios[i].salario;
        let ano = salarios[i].ano;
        let inflacao = ipca[i].inflacao;
        let salarioAnterior = salarios[i-1].salario;
        let diferenca = salarioAnterior - dinheiro;
        let crescimento = Math.abs(diferenca/salarioAnterior)*100;

    
        console.log(`Ano: ${ano}`);                 
        console.log(`Salário Mínimo: R$${dinheiro},00`);
        console.log(`IPCA: ${inflacao}%`);
        console.log(`Crescimento Salarial: ${crescimento.toFixed(2)} %`,"\n");
                  
    }
}else{
    console.log("Opção Invalida")
}

