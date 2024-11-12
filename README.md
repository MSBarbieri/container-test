# Desafio Técnico - Iniciação da Aplicação

## Objetivo
O objetivo deste desafio é configurar corretamente o ambiente Docker para uma aplicação web. A aplicação deve ser capaz de se conectar a um banco de dados PostgreSQL e estar acessível através de uma porta específica na máquina host.

## Requisitos
1. **Build do Container**:
   - O processo de build do container deve ser bem-sucedido.
   - Certifique-se de que todas as dependências da aplicação estão sendo instaladas corretamente.

2. **Exposição de Portas**:
   - A aplicação deve estar acessível na porta 8080 da máquina host.

3. **Conexão com o Banco de Dados**:
   - A aplicação deve se conectar ao banco de dados PostgreSQL com sucesso.
   - Utilize variáveis de ambiente para configurar a conexão com o banco de dados.

4. **Execução de Script no Banco de Dados**:
   - O container do PostgreSQL deve executar o script `db.sql` durante a inicialização.

## Melhorias Interessantes
- **Segurança**:
  - Utilize variáveis de ambiente para informações sensíveis, como senhas.
  - Não exponha portas desnecessárias.

- **Cache do Build**:
  - Otimize o cache do Docker para acelerar o processo de build.
  - Utilize camadas de build eficientes no Dockerfile.

## Como testar
```bash
curl http://localhost:8080/mock-server/doctors/get-all
```
