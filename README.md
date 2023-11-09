# Aplicação de Controle de Lista de Tarefas

Este script JavaScript é destinado a criar e gerenciar uma lista de tarefas em uma página da web. Ele oferece funcionalidades como adicionar novos itens, remover itens individualmente e limpar todos os itens da lista.

## Funcionalidades

- **Adicionar Item:** A função `pegarValor()` permite adicionar um novo item à lista de tarefas. Insira o texto desejado no campo de entrada e clique no botão correspondente.

- **Remover Item:** Cada item da lista possui um ícone de exclusão. Clicar nesse ícone irá remover o item da lista.

- **Limpar Todos os Itens:** O botão "Limpar" permite remover todos os itens da lista de uma vez.

## Funções Principais

### `pegarValor()`

Esta função é chamada quando um novo item é adicionado à lista. Ela obtém o valor do campo de entrada, cria um novo item na lista e incrementa o contador de itens.

### `excluirItem(id)`

Ao clicar no ícone de exclusão de um item, esta função é chamada para excluir o item correspondente da lista. Reduz o contador de itens.

### `clearAll()`

Esta função remove todos os itens da lista.

### `criarLista(valor)`

Responsável por criar um novo item na lista. Verifica se o valor inserido não está vazio e cria um novo elemento na lista com um ícone de exclusão. Cada item tem um identificador único baseado no contador.

## Como Usar

1. Adicione um texto no campo de entrada.
2. Clique no botão de adicionar para incluir o item na lista.
3. Cada item terá um ícone de exclusão, permitindo remover itens individualmente.
4. O botão "Limpar" remove todos os itens da lista.

