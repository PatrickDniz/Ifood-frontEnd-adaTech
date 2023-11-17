// Exercicio 01
    //array
    const hotifrutis = [
    'banana', 'agrião', 'maçã', 'abacaxi', 'melancia', 'laranja', 'limão',
    'cenoura', 'melancia', 'batata', 'brócolis', 'abóbora', 'tomate', 'alho-poró',
    'alface', 'espinafre', 'rúcula', 'couve', 'acelga', 'maçã', 'batata'
    ];

    //Primeiro jeito
    const fruta = ['banana', 'maçã', 'abacaxi', 'melancia', 'laranja', 'limão'];
    const legume = ['cenoura', 'batata', 'brócolis', 'abóbora', 'tomate', 'alho-poró'];
    const verdura = ['alface', 'espinafre', 'rúcula', 'couve', 'agrião', 'acelga'];

    function qtdType(array) {
    let Qtd = {
        fruta: 0,
        legume: 0,
        verdura: 0
    };

    for (const item of array) {
        if (fruta.includes(item)) {
        Qtd.fruta++;
        } else if (legume.includes(item)) {
        Qtd.legume++;
        } else if (verdura.includes(item)) {
        Qtd.verdura++;
        }
    }

    return Qtd;
    }

    //Segundo jeito
    const type = {
        fruta: ['banana', 'maçã', 'abacaxi', 'melancia', 'laranja', 'limão'],
        legume: ['cenoura', 'batata', 'brócolis', 'abóbora', 'tomate', 'alho-poró'],
        verdura: ['alface', 'espinafre', 'rúcula', 'couve', 'agrião', 'acelga']
    };

    const qtdType2 = (list, types) => {
        let Qtd = {
            fruta: 0,
            legume: 0,
            verdura: 0
            };
        
            for (const item of list) {
                for (const key in types) {
                    if (types[key].includes(item)) {
                        Qtd[key]++;
                        break;
                    }
                }
            }
        
            return Qtd;
    }

    //Saida

    const resultadoQtd = qtdType(hotifrutis);
    const resultadoQtd2 = qtdType2(hotifrutis,type);
    console.log("--- Exercicio 01 ---")
    console.log(" -- primeira resolução -- ")
    console.log("  -", resultadoQtd);
    console.log(" -- Segunda resolução -- ")
    console.log("  -", resultadoQtd2);

//Execicio 02
    const empregados = [
        { nome: 'João', salario: 1200 },
        { nome: 'Maria', salario: 1500 },
        { nome: 'Pedro', salario: 1800 },
        { nome: 'Ana', salario: 1400 },
        { nome: 'Carlos', salario: 2000}
    ];
    
    const more1500 = empregados.some((e) => e.salario >= 1500);
    const less1000 = empregados.some((e) => e.salario <= 1000);
    console.log(" \n")
    console.log("--- Exercicio 02 ---")
    console.log("  - more: ", more1500,", less1000: ", less1000," -");

//Exercicio 03
    const pessoas = [
        { nome: 'João', altura: 1.75, peso: 80 },
        { nome: 'Maria', altura: 1.68, peso: 60 },
        { nome: 'Pedro', altura: 1.80, peso: 70 },
        { nome: 'Ana', altura: 1.65, peso: 55 },
        { nome: 'Carlos', altura: 1.90, peso: 100 }
    ];

    
    // Primeira Forma
    function calcularIMC(pessoa) {
        return pessoa.peso / Math.pow(pessoa.altura, 2);
    }

    console.log(" \n")
    console.log("--- Exercicio 03 ---")
    console.log(" -- primeira resolução -- ")
    for (const pessoa of pessoas) {
        const imc = calcularIMC(pessoa);
        console.log(`O IMC de ${pessoa.nome} é ${imc.toFixed(2)}`);
    }

    // Segunda Forma
    const calcularIMC2 = (people) => { people.imc = parseFloat((people.peso / Math.pow(people.altura, 2)).toFixed(2)) };

    const newPeople = pessoas.map((e) => {
        calcularIMC2(e);
        return e
    })
    console.log(" -- segunda resolução -- ")
    console.log(newPeople)

//Exercicio 04
    const alunos = [
        { nome: 'Ana', notas: [7, 8, 9] },
        { nome: 'Pedro', notas: [5, 6, 7] },
        { nome: 'Maria', notas: [9, 8, 10] },
        { nome: 'João', notas: [6, 7, 8] },
        { nome: 'Lucas', notas: [8, 9, 7] },
        { nome: 'Julia', notas: [10, 8, 9] }
    ];

   // Primeira Forma
    const medias = alunos.map((aluno) => {
        const somaNotas = aluno.notas.reduce((total, nota) => total + nota, 0);
        const media = somaNotas / aluno.notas.length;
        aluno.media = media;
        return aluno;
    });

    // Segunda Forma
    const calcM = (aluno) => { aluno.media = aluno.notas.reduce((total, nota) => total + nota, 0) / aluno.notas.length };

    const medias2 =  alunos.map((aluno) => { 
        calcM(aluno); 
        return aluno;
    });
    console.log(" \n")
    console.log("--- Exercicio 04 ---")
    console.log(" -- primeira resolução -- ")
    console.log(medias);
    console.log(" -- segunda resolução -- ")
    console.log(medias2);