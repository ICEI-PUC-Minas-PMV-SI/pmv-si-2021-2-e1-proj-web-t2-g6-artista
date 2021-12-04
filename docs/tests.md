# Plano de Testes de Software

|	Tipo do Teste	|	Subtipo	do Teste 	|	Objetivo	 do Teste	 | 	Requisito que motivaram esse teste	| 
|---------------|-------------------|---------------------|-------------------------------------|
|	Funcional |	 Requisitos 	| Testar a funcionalidade referente permissão com credenciais para acesso do administrador no site | RF001 - O sistema deve permitir o login e logout do administrador do site | 
|	Funcional |	 Requisitos 	| Testar a funcionalidade referente alterações de foto e url’s na aba HOME | RF002 - O sistema deve permitir gerenciamento da foto de capa, das url’s das redes sociais e url’s da música e clipe da aba home|
|	Funcional |	 Requisitos 	| Testar a funcionalidade referente o cadastro, quanto exclusão de dados na agenda de shows| RF003 - O sistema deve permitir o cadastro e gerenciamento da agenda de shows |
|	Funcional |	 Requisitos 	| Testar a funcionalidade referente adição e exclusão de card contendo foto de capa e url’s das redes sociais| RF004 - O sistema deve permitir o gerenciamento das url’s de músicas / clipes e fotos de capa |
|	Funcional |	 Requisitos 	| Testar a funcionalidade referente alteração da biografia | RF005 - O sistema deve permitir o gerenciamento da biografia |
|	Funcional |	 Requisitos 	| Testar a funcionalidade referente o cadastramento de fãs| RF-006 - O sistema deve permitir o cadastro de fãs |
|	Funcional |	 Requisitos 	| Testar a funcionalidade referente o download do relatório gerado com os dados cadastrados na central de fãs| RF007 - O sistema deve gerar relatório de cadastro de fãs|
|	Funcional |	 Requisitos 	| Testar a funcionalidade referente alteração dos dados de contato| RF008 - O sistema deve permitir o gerenciamento dos dados de contato|
|	Não Funcional |	 Usabilidade	| Testar se o site está sendo apresentado de forma clara, objetiva e de fácil navegação para o usuário| RNF001 - O sistema deve ter boa usabilidade|
|	Não Funcional |	 Implementação	| Testar se todos os elementos da página respondem corretamente ao display em que está sendo visualizado| RNF002 - O sistema deve ser responsivo|
|	Não Funcional |	 Segurança	| Testar se as alterações de dados do site são de acesso restrito ao administrador| RNF-003 - O sistema deve ser seguro para o usuário |

## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

# Registro de Testes de Software

|	Tipo	|	Subtipo		|	Teste		| 	Resultado	| 	Data	 | 	Responsável 	| 	Descrição	|
|------|----------|--------|------------|--------|---------------|------------|
|	Funcional |	 Requisitos 	| RF001 - O sistema deve permitir o login e logout do administrador do site | OK | 03/12/2021| Amanda | Foi possível realizar login e logout|
|	Funcional |	 Requisitos 	| RF002 - O sistema deve permitir gerenciamento da foto de capa, das url’s das redes sociais e url’s da música e clipe da aba home| OK | 03/12/2021| Amanda | Foi possível alterar foto de capa e url’s |
|	Funcional |	 Requisitos 	| RF003 - O sistema deve permitir o cadastro e gerenciamento da agenda de shows | OK |03/12/2021|Amanda | Foi possível excluir e adicionar dados na agenda|
|	Funcional |	 Requisitos 	| RF004 - O sistema deve permitir o gerenciamento das url’s de músicas / clipes e fotos de capa| OK | 03/12/2021| Amanda | Foi possível adicionar ou excluir card contendo url’s e foto de capa|
|	Funcional |	 Requisitos 	| RF005 - O sistema deve permitir o gerenciamento da biografia| OK |03/12/2021| Amanda | Foi possível inserir novo texto na biografia|
|	Funcional |	 Requisitos 	| RF006 - O sistema deve permitir o cadastro de fãs| OK | 03/12/2021| Amanda | Foi possível cadastrar dados |
|	Funcional |	 Requisitos 	| RF007 - O sistema deve gerar relatório de cadastro de fãs| Falhou |03/12/2021 | Amanda | Não foi possível fazer o download do relatório |
|	Funcional |	 Requisitos 	| RF008 - O sistema deve permitir o gerenciamento dos dados de contato| OK | 03/12/2021| Amanda | Foi possível alterar dados de contato |
|	Não Funcional|	 Usabilidade	| RNF001 - O sistema deve ter boa usabilidade | OK |03/12/2021| Amanda | O site possui navegação fácil, é claro e objetivo, tendo pontos instintivos na hora do acesso |
|	Não Funcional|	 Implementação	| RNF002 - O sistema deve ser responsivo| Falhou |03/12/2021| Amanda | O site é responsivo apenas em display desktop e tablet|
|	Não Funcional|	 Segurança	| RNF003 - O sistema deve ser seguro para o usuário| OK |03/12/2021| Amanda | Foi possível realizar alterações no site somente após login como administrador |

## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
