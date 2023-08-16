## Anotações aulas 

### Aula 31/07/23

Qual o meu papel como analista de testes?
- O papel de analista não é so testar as aplicações, mas também confirmar se os requisitos do cliente foram atendidos, assim como a funcionalidade do software como total

### Aula 01/08/23

#### Testes manuais

Limitações do teste manual:

    O teste manual se consiste em uma série de testes realizados por pessoas reais. É uma forma mais demorada de testar um software, porém ainda é indispensavel em algumas situações

Tecnicas de teste de software

#### Participação de equivalência: 

- Técnica de participação de equivalência 
    A técnica divide os dados de entrada em classes de equivalências, reduzindo o número de testes necessários.
    
    ##### Prós:
    - Reduz a quantidade de testes
    - Idendifica erros com mais eficiência
    - Melhora a cobertura dos testes

    ##### Contras: 
    - Requer conhecimento técnico
    - Não detecta erros em todas as situações 
    - Pode ser limitado em casos complexos


 #### Análise de valor limite: 

   - Técnica de Análise de Valor Limite se consiste em realizar testes para verificar de casos númericos, exemplo, tentar realizar mais compras que o sistema permite. 

   - Erro ao realizar está técncia:

    Não estabelecer limites de testes
    Ignorar a aleatoriedade
    Falhas em idenficar caracteristicas relevantes
    Não implementar estratégias para combater viéses
___

### No contexto de teste de software, por que o teste de unidade é realizado?
    
    O teste unitário deve ser realizado pelo DEV

---

### Qual é o tipo de teste de Software que serve para garantir que todas ou algumas partes de um sistema estão dialogando e funcionando em um conjunto?

    Teste de integração
---

### Os testes precisam ser efetuados durante o longo de todo o desenvolvimento de software, para evitar custos e prazos diferentes que foram previstos inicialmente. Com isso, qual é o teste que normalmente é realizado pelos próprios desenvolvedores e que serve para verificar se as partes do software funcionam de maneira isolada das demais partes do sistema?

    Teste unitário





# Resumo para a Prova

### Por que o teste de software é importante? Quais são os objetivos?

- O teste de software é importante para a antecipação de problemas
- melhorar a qualidade do software
- Criar confiabilidade no software
- Evitar prejuizos financeiros
- evitar erros em produção
- Segurança


***Ninguém toma uma vacina sem que seja testada anteriormente***

### Como podemos definir testes manuais e os automatizados?

- O teste manual necessita de uma ação humana presente durante **todas** as etapas dos teste. 
    |Desvantagem:| vantagens|
    |--|--|
    |é um teste mais demorado e mais caro, pode ocorrer um falha ao esquecer de testar uma funcionalidade | Possui uma maior flexibilidade ao realizar os testes, NÃO possui limitações por ambiente

    ---

- O teste automático não necessita de uma pessoa em todo o momento, apenas para iniciar o teste
    |Desvantagem:| vantagens|
    |--|--|
    |Economiza tempo e recursos ao longo prazo,|Demanado recursos e tempo para a sua criação inicial|

    ---

### Tipos de testes

- Unidade: Testa a unidade de forma individual (ele é feito pelo DEV), ele irá testar as clases separadamente

- Integração: testa as integrações entre os componentes, ele irá verificar se os componentes estão se comunicando corretamente entre si

- Sistema: testa o sistema como o todo, ele verifica se o sistema está funcionando de uma maneira geral

- Aceitação: Valida se os requisitos foram atendidos, vai validar se todos os requisitos do **cliente** foram atendidos

### Quais as técnicas de testes 

- analise de valor limite:
- partições de equivalencia: 
- caixa branca: 
- caixa preta:

Teste de regreção serve para verificar para se todas as funções antigas ainda estão funcionandos

### Quais são os principais passos nos procesos de teste de software
- Planejamento do teste
- Desenvolvimento dos casos de testes (caso de teste, é descrever o teste que será feito)
- Execução dos testes
- Relatórios de incidentes
- Documentação da evidencia dos testes executados