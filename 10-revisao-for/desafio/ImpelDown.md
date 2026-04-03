# Desafio: Invasão de Impel Down

Durante a invasão à prisão de Impel Down, Luffy precisa enfrentar vários marinheiros em sequência. Seu objetivo é criar um programa que simule essas batalhas utilizando estrutura de repetição (for).

## 1) Entradas
Solicite ao usuário:

* Quantidade de batalhas
* Quantidade de marinheiros em cada batalha
* Quantidade de carnes disponíveis

## 2) Regras da Simulação
* Luffy inicia a primeira batalha com 100 pontos de energia.
* A cada nova batalha, ele começa com 10 pontos de energia a menos que a batalha anterior.
* Para cada marinheiro derrotado, Luffy gasta 5 pontos de energia.
* Sempre que a energia for insuficiente, o Luffy pode comer uma carne e recuperar 100 pontos

## 3) Condições
* Luffy vence a batalha se conseguir derrotar todos os marinheiros.
* Caso contrário, ele é derrotado.
* Uma nova batalha só pode começar se Luffy tiver energia inicial maior que 0 ou carnes para repor a energia.

## 4) Saída
Para cada batalha, exiba:

- Energia incial
- Resultado (Vitória ou Derrota)
- Quantidade de carnes restantes
- Quantidade de marinheiros derrotados
- Energia restante ao final da batalha

## 5) Exemplo de Execução
### EXEMPLO DE INPUT:

Quantidade de batalhas: 4

Quantidade de marinheiros: 30

Quantidade de carnes: 1

----------------------------------------

*1° Batalha Iniciada:*

Quantidade de Energia Inicial: 100

Resultado: Luffy saiu vitorioso, derrotando 30 marinheiro(s)

⚡ Energia Restante no Final da Batalha: 50

🥩 Carnes Restantes no Final da Batalha: 0
  
----------------------------------------

*2° Batalha Iniciada:*

Quantidade de Energia Inicial: 40

Resultado: Luffy foi derrotado, derrotando 8 marinheiro(s)

⚡ Energia Restante no Final da Batalha: 0

🥩 Carnes Restantes no Final da Batalha: 0

----------------------------------------
  
🛞 Não é possível iniciar a 3º batalha, acabou a carne e a energia.

----------------------------------------
  
🛞 Não é possível iniciar a 4º batalha, acabou a carne e a energia.