# Desafio: Introdução a Vetores (Parte 2)

Continuando a nossa atividade de adivinhação do ranking, vamos expandir o sistema trabalhando com novos vetores, inserção de dados e sistemas de busca.

❌ Não é permitido utilizar estruturas de repetição (FOR).

## 1) Exibição do campeão
Após exibir o resultado da competição verificado na Parte 1, seu programa também deve destacar o grande vencedor do ranking oficial.
* Exiba o nome do **1º colocado** do vetor do sistema em letras **MAIÚSCULAS**.
* Coloque o emoji de medalha de ouro junto ao nome: 🥇

## 2) Meus Campeões
Abaixo da exibição do ranking, crie uma nova seção com o título: "Meus Campeões" (pode ser a tag `<h2>`). Nesta parte, o usuário poderá montar sua própria lista de campeões favoritos.

Crie os seguintes elementos:
* Um campo de texto (input) onde o usuário possa digitar o nome de um campeão.
* Um botão chamado "Adicionar".

Ao clicar no botão "Adicionar":
* O nome digitado deve ser inserido em um **novo vetor** que representa a lista de campeões do usuário.
* A lista de campeões cadastrados pelo usuário deve ser exibida e atualizada na tela a cada nova inserção.

## 3) Buscar campeão
Abaixo da lista de campeões do usuário, crie uma seção de busca. 

Essa seção deve conter:
* Um campo de texto chamado "Buscar".
* Um botão chamado "Pesquisar".

Quando o usuário clicar em pesquisar, seu programa deve verificar o nome digitado e validar:
* Se o nome está presente na **lista de campeões criada pelo usuário**.
* Se o nome está presente no **ranking oficial do sistema**.

Após a verificação, exiba uma mensagem personalizada na tela informando o resultado:
* Se o nome está apenas na lista do usuário.
* Se o nome está apenas na lista do sistema.
* Se o nome está em ambas as listas.
* Ou se o nome não está presente em nenhuma das listas.