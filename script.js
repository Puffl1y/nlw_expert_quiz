const perguntas = [
    {
        pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
        respostas: [
            "const varName = value",
            "let varName = value",
            "var varName = value"
        ],
        correta: 1
    },
    {
        pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
        respostas: [
            "console.log()",
            "print()",
            "log()"
        ],
        correta: 0
    },
    {
        pergunta: "O que o método 'document.getElementById()' retorna?",
        respostas: [
            "O primeiro elemento encontrado com o ID especificado",
            "Uma lista de elementos com o ID especificado",
            "O último elemento encontrado com o ID especificado"
        ],
        correta: 0
    },
    {
        pergunta: "Qual dos seguintes métodos é usado para adicionar um elemento ao final de um array em JavaScript?",
        respostas: [
            "append()",
            "push()",
            "add()"
        ],
        correta: 1
    },
    {
        pergunta: "Como você inicia um comentário de uma linha em JavaScript?",
        respostas: [
            "//",
            "<!--",
            "/*"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a maneira correta de escrever um loop 'for' em JavaScript?",
        respostas: [
            "para (i = 0; i < 5; i++)",
            "for (i = 0; i < 5)",
            "for (i = 0; i < 5; i++)"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função do operador '===' em JavaScript?",
        respostas: [
            "Comparação de valores",
            "Comparação de tipos e valores",
            "Atribuição de valores"
        ],
        correta: 1
    },
    {
        pergunta: "Como você converte uma string em um número em JavaScript?",
        respostas: [
            "parseInt()",
            "stringToNumber()",
            "convertToNumber()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
        respostas: [
            "remove()",
            "pop()",
            "delete()"
        ],
        correta: 1
    },
    {
        pergunta: "O que 'NaN' representa em JavaScript?",
        respostas: [
            "Número Natural",
            "Número Negativo",
            "Not a Number"
        ],
        correta: 2
    }
];

//transformar as coisas de html em javascript (o quiz e o template)
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')


// loop para todas as perguntas aparecerem as alternativas
for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let respostas of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)

        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    // coloca apergunta na tela
    quiz.appendChild(quizItem)
}