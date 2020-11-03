# React-clean-architecture

> Arquitetura

### Infra:
Nesta camada geralmente usamos frameworks e lib externas.
a camada de infraestrutura só conhece a camanda de Data Layer.

### Data:
Nesta camada da aplicação ficam as implementações dos casos de uso, geralmente
são classes que implementam as interfaces da camada de domain ou seja a camada
de DATA layer depende da camada de domain.

### Domain: 
Nesta camada ficam as regras de negócio da aplicação dos nossos componentes. 
geralmente a camada de domain não depende de ninguem.

### Presentation:
Nesta camada é aonde ficam a ui do projeto, geralmente onde ficam as 
implementações dos nossos componentes. esse camada tem dependencia com a camada
de Domain.

### Validation:
Nessa camda ficam as validações das nossa implementações da camada de 
Presentation, como por exemplo validações de email e campos obrigatórios.

### Main Layer:
Nesta camada é uma camada que depende de todas as outras, ele é resposável por
interligar todas as outras camadas e também deve ser o ponto de entrada
da aplicação, geralmente onde está o index da aplicação.