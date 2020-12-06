(function () {
    /*
    1. Envolva todo o conteúdo desse desafio em uma IIFE.
    2. Adicione a diretiva 'use strict';
    3. Crie um arquivo index.html e adicione esse script à ele.
    'use strict'

    /*
    Em todos os exercícios desse desafio, nós vamos utilizar expressões
    regulares! Para isso, iremos usar o texto abaixo. Coloque-o em uma
    variável chamada `text`:
    "Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro."
    */
    var text = 'Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875),' +
               'apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro.'

    /*
    Vamos começar com umas brincadeiras fáceis :D
    Troque o nome "Manuel Marques de Sousa" pelo seu nome, e mostre o resultado
    no console:
    */
    console.log( 'Adicionando seu nome no texto:' );
    var regex = /Manuel Marques de Sousa/;
    var newText = text.replace(regex,"Guilherme Lopes");
    console.log(newText);

    /*
    Agora, substitua a palavra "brasileiro" por sua cidade natal e mostre no
    console.
    Ex: Se você for da São Paulo, substitua por "paulista".
    */
    console.log( '\nTrocando naturalidade:' );
    regex = /brasileiro/;
    newText = text.replace(regex,"belohorizontino");
    console.log(newText);
    /*
    Substitua todos os números por um traço `-`. Cada caractere de número deve
    ser um traço. Mostre o resultado no console:
    */
   
    console.log( '\nTrocando números por -:' );
    regex = /[0-9]/g;
    newText = text.replace(regex,"-");
    console.log(newText);
    // ?

    /*
    Substitua todas as letras (somente letras) de "D" maiúsculo até "h"
    minúsculo por "0" (número zero). Mostre o resultado no console:
    */
    console.log( '\nTrocando de "D" a "h" por "0":' );
    regex = /[D-h]/g;
    newText = text.replace(regex,"0");
    console.log(newText);

    /*
    Substitua todos os "A" (maiúsculos ou minúsculos) por "4".
    Mostre o resultado no console:
    */
    console.log( '\nTrocando "A" e "a" por "4":' );
    regex = /A/g;
    newText = text.replace(regex,"4");
    console.log(newText);

    /*
    Substitua a frase "O Centauro de Luvas", deixando-a em caixa alta, usando
    o método `toUpperCase()`. Mostre o resultado no console:
    */
    console.log( '\n"O Centauro de Luvas" em caixa alta:' );
    regex = /(O Centauro de Luvas)/g;
    newText = text.replace(regex, function (capTotal, termo) {
        return termo.toUpperCase();
    });
    console.log(newText);


    /*
    Agora iremos substituir as datas no formato "13 de junho de 1804" para
    "13/06/1804". A primeira coisa a fazer é criar uma função chamada
    `getMonthNumber`, que irá receber um parâmetro (será o nome do mês) e deverá
    retornar o número correspondente a esse mês.
    Ex: Se o usuário entrar com "março", deve retornar "03" (em string mesmo).
    Números com menos de dois dígitos devem ter um zero na frente.
    Crie então a função e mostre no console os retornos para os meses de março,
    setembro e dezembro.
    Use um console.log para cada mês, usando a frase:
    "O mês de [NOME DO MÊS] é representado pelo número [NÚMERO DO MÊS]."
    */
    console.log( '\nMeses representados por números:' );
    var nomeMes = [
        'janeiro',
        'fevereiro',
        'março',
        'abril',
        'maio',
        'junho',
        'julho',
        'agosto',
        'setembro',
        'outubro',
        'novembro',
        'dezembro'
    ]
    function getMonthNumber (mes) {
        switch (mes) {
            case nomeMes[0]:
                return '01';
                break;
            case nomeMes[1]:
                return '02';
                break;
            case nomeMes[2]:
                return '03';
                break;
            case nomeMes[3]:
                return '04';
                break;
            case nomeMes[4]:
                return '05';
                break;
            case nomeMes[5]:
                return '06';
                break;
            case nomeMes[6]:
                return '07';
                break;
            case nomeMes[7]:
                return '08';
                break;
            case nomeMes[8]:
                return '09';
                    break;
            case nomeMes[9]:
                return '10';
                break;
            case nomeMes[10]:
                return '11';    
                break;
            case nomeMes[11]:
                return '12';
                break;
            default:
                return ''
          }
    }
    for(i = 0, len = nomeMes.length; i<len; i++){
        console.log('O mês de ' + nomeMes[i] + ' é representado pelo número ' + getMonthNumber(nomeMes[i]) +'.')
    }
    /*
    Agora, declare uma variável chamada `regexDate` que irá receber a expressão
    regular que irá fazer o match com as datas. Crie grupos de captura para o
    dia, o mês e o ano. Para os meses, você pode fazer o match somente com os
    meses que estão no texto, não precisa adicionar todos.
    Com o que vimos até agora, você consegue fazer :D
    Mostre a regex no console.
    */
    console.log( '\nRegex que vai fazer o match com as datas do texto:' );
    regexDate = /(\d{2}) de (\w+) de (\d{4})+/g;
    console.log(newText.match(regexDate));
    
    /*
    Agora crie a função que irá fazer o replace dos dados. A função será chamada
    de `replaceDate`. Ela deve retornar a data no formato:
    "[DIA]/[MÊS]/[ANO]"
    Após criar a função, faça o replace das datas no texto, mostrando no
    console o resultado.
    */
    console.log( '\nReplace de datas:' );
    function replaceDate (textoRegex) {
        return textoRegex.replace(regexDate, function (capTotal, dia, mes, ano) {
            return dia + '/' + getMonthNumber(mes) + '/' + ano;
        });
    }
    console.log(replaceDate(newText));
}())
