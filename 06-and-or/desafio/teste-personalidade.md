# Exercício: Teste de Personalidade

Esta atividade propõe a criação de um **teste de personalidade interativo**. O usuário deverá escolher qual teste deseja realizar entre duas opções:
1. Teste de personalidade de As Meninas Superpoderosas
2. Teste de personalidade do Scooby-Doo

O objetivo é desenvolver um programa em **JavaScript** que analise características comportamentais informadas pelo usuário e, com base em regras condicionais, determine qual personagem mais se aproxima do seu perfil.

## Escolha do teste
O usuário poderá fazer 2 testes. Dependendo da escolha, o sistema deverá aplicar regras de classificação diferentes.

---

## Teste 1 — As Meninas Superpoderosas
O Professor Utônio decidiu realizar um experimento psicológico para descobrir qual das heroínas de Townsville possui maior compatibilidade com a personalidade das pessoas. Para isso, ele desenvolveu um sistema de análise baseado em características comportamentais.

O programa deverá analisar os seguintes traços:
* Inteligência
* Coragem
* Sensibilidade
* Temperamento

Com base nesses valores, o sistema deverá identificar se o usuário se parece mais com:
* ❤️ **Florzinha:** perfil estratégico e líder
* 💙 **Lindinha:** perfil sensível e empático
* 💚 **Docinho:** perfil intenso e corajoso

### Regras de Classificação

| Condição | Classificação |
| :--- | :--- |
| Inteligência ≥ 8, coragem ≥ 7 e temperamento ≤ 6 | Florzinha |
| Sensibilidade ≥ 8 e temperamento ≤ 5 | Lindinha |
| Coragem ≥ 8 e temperamento ≥ 7 | Docinho |
| Inteligência maior que sensibilidade e coragem | Florzinha |
| Sensibilidade maior que inteligência e coragem | Lindinha |
| Quando nenhuma condição anterior for atendida | Docinho |

### Regras Visuais
**Se o resultado for Florzinha:**
* Mostrar o nome da Florzinha.
* Inserir um GIF da Florzinha acima do texto.
* Mudar a cor do texto principal para vermelho.
* Mudar o fundo da página para rosa.

**Se o resultado for Lindinha:**
* Mostrar o nome da Lindinha.
* Inserir um GIF da Lindinha abaixo do texto.
* Deixar o texto em azul.
* Mudar o fundo para azul claro.

**Se o resultado for Docinho:**
* Mostrar o nome da Docinho.
* Inserir um GIF da Docinho ao lado do texto.
* Deixar o texto em verde escuro.
* Mudar o fundo para verde claro.

---

## Teste 2 — Scooby-Doo
A Mistério S.A. decidiu criar um teste para descobrir com qual membro da equipe você mais se parece.

O programa deverá analisar características como:
* Coragem
* Inteligência
* Curiosidade
* Fome

Com base nesses valores, o sistema deverá identificar se o usuário se parece mais com:
* 🧠 **Velma:** perfil analítico e inteligente
* 😎 **Fred:** perfil líder e estratégico
* 💜 **Daphne:** perfil aventureiro e elegante
* 🍔 **Salsicha ou Scooby-Doo:** perfil medroso, mas leal e divertido

**Nota:** Você pode criar suas próprias regras de classificação para esses personagens.

---

## 🏆 Desafio Extra
Quais novas regras poderiam ser implementadas para aumentar a precisão do teste de personalidade?

Para valorizar ainda mais o projeto, você pode:
* Adicionar novos elementos HTML.
* Aplicar estilizações com CSS.
* Incluir animações, botões, imagens ou novos layouts.

## 📚 Referências
Como referência de estudo e consulta, utilize exclusivamente o site: [W3Schools](https://www.w3schools.com/)