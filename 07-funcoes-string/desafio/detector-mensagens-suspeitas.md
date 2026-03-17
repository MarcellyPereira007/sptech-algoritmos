# Desafio: Detector de Mensagens Suspeitas

Uma empresa está desenvolvendo um sistema simples para analisar mensagens recebidas em um chat e identificar possíveis sinais de spam ou comportamento suspeito.

Você deverá criar um programa em **JavaScript** que analise uma mensagem digitada pelo usuário e mostre algumas informações importantes sobre ela.

## 1) Interface
Crie:
* Um campo de texto para digitar uma mensagem
* Um botão chamado **Analisar mensagem**
* Uma `div` para mostrar o resultado da análise

## 2) Análises obrigatórias
Quando o botão for clicado, o programa deverá:
* Mostrar o tamanho da mensagem
* Informar se a mensagem começa com a palavra "Eu"
* Informar se a mensagem termina com ".com"
* Informar se a mensagem termina com ".br"
* Mostrar a primeira letra da mensagem
* Mostrar a quarta letra da mensagem (posição 3)
* Mostrar a última letra da mensagem
* Mostrar o índice onde a palavra "Bob" aparece
* Informar se a palavra "bob" aparece na mensagem
* Mostrar a mensagem totalmente em MAIÚSCULO
* Mostrar a mensagem totalmente em minúsculo
* Mostrar a mensagem sem espaços no início e no fim

## 3) Validações com condicionais
Além das análises, o sistema deverá realizar algumas verificações utilizando condicionais.
* Se o campo estiver vazio (ou somente com espaços), exiba: `Digite uma mensagem válida.`
* Se a mensagem tiver menos de 10 caracteres, exiba: `Mensagem muito curta para análise.`
* Se a mensagem contiver a palavra "bob", exiba: `Atenção: usuário Bob mencionado na mensagem.`
* Se a mensagem terminar com .com ou .br, exiba: `A mensagem contém um possível link.`
* Se a mensagem possuir a palavra "promoção" ou "grátis", exiba: `Possível mensagem de spam detectada.`
* Se a mensagem começar com "Eu", exiba: `A mensagem parece estar escrita em primeira pessoa.`

## 4) Exibição
Todos os resultados e validações devem ser exibidos dentro da `div` de resultado utilizando `innerHTML`.

## Desafio
Crie uma classificação final da mensagem:
* Se detectar spam → `"Mensagem suspeita"`
* Se contiver link → `"Mensagem com link"`
* Caso contrário → `"Mensagem comum"`