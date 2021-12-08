# Plano de Testes de Software

### Requisitos Funcionais e Não Funcionais

|	Tipo do Teste	|	Subtipo	do Teste 	|	Objetivo	 do Teste	 | 	Requisitos que motivaram esse teste	| 
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

### Casos de Uso 

|	Caso de Uso	  |ID|				Passos				| 	Resultado Esperado	|
|---------------|--|--------------|---------------------|
|	Fazer login 	 |1|		Acessar qualquer página do site			| 	Página será exibida	|
|			      |2| 		Clicar no botão superior direito “Acesso restrito” 	|	A página para fazer login será exibida|	
|			      |3| 			Informar usuário e senha		 	|Os campos devem receber os dados digitados e direcionar para HOME do administrador|
|    |    |    |    |
|Cadastrar evento na agenda|1|		Fazer login como administrador 			     |	Página HOME do administrador será exibida  |
|			      |2| 		Clicar no botão editar ao lado da palavra “AGENDA”	     |	A página para fazer alteração na agenda será exibida|
|			      |3| 		Clicar no botão “adicione novo evento” 		     |	A página para fazer a adição do evento na agenda será exibida|
|			      |4| 		Preencher os campos solicitados			     |	Os campos devem receber os dados digitados 	|	
|			      |5| 		Clicar no botão check ao lado direito da página		     |	O sistema deve exibir a mensagem “Salvo com sucesso!” 	|
|    |    |    |    |
|Cadastrar nova música/clipe|1|		Fazer login como administrador 			     |	Página HOME do administrador será exibida  |
|			      |2| 		Clicar no botão editar ao lado de “MÚSICAS E CLIPES”   |	A página para fazer alteração nas músicas e clipes será exibida|
|			      |3| 		Clicar no botão “adicionar música/clipe” 		     |	A página para fazer a adição da música/clipe na agenda será exibida|
|			      |4| 		Clicar no botão “upload foto de capa”		     |	O sistema deve abrir explorador de arquivos local para selecionar a foto  |
|			      |5| 		Preencher os campos solicitados			     |	Os campos devem receber os dados digitados 	|	
|			      |6| 		Clicar no botão “confirmar cadastro”		     |	O sistema deve exibir a mensagem “Salvo com sucesso!” 	|
|    |    |    |    |
|Excluir música/clipe	      |1|		Fazer login como administrador 			     |	Página HOME do administrador será exibida  |
|			      |2| 		Clicar no botão editar ao lado de “MÚSICAS E CLIPES”   |	A página para fazer alteração nas músicas e clipes será exibida|
|			      |3| 		Clicar no botão “X” abaixo da foto de capa 		     |	O sistema deve exibir a mensagem “Deletado com sucesso!” |
|    |    |    |    |
|Dados incompletos para cadastro|1|		Acessar a página “Central de Fãs”		     |	Página CENTRAL DE FÃS será exibida  |
|			               |2| 		Campo obrigatório não preenchido 	     |	O sistema deve exibir a mensagem “Preencha todos os campos!” |

# Registro de Testes de Software

### Requisitos Funcionais e Não Funcionais

|	Tipo	|	Subtipo		|	Teste		| 	Resultado	| 	Data	 | 	Responsável 	| 	Descrição	|
|------|----------|--------|------------|--------|---------------|------------|
|	Funcional |	 Requisitos 	| RF001 - O sistema deve permitir o login e logout do administrador do site | OK | 03/12/2021| Amanda | Foi possível realizar login e logout|
|	Funcional |	 Requisitos 	| RF002 - O sistema deve permitir gerenciamento da foto de capa, das url’s das redes sociais e url’s da música e clipe da aba home| OK | 03/12/2021| Amanda | Foi possível alterar foto de capa e url’s |
|	Funcional |	 Requisitos 	| RF003 - O sistema deve permitir o cadastro e gerenciamento da agenda de shows | OK |03/12/2021|Amanda | Foi possível excluir e adicionar dados na agenda|
|	Funcional |	 Requisitos 	| RF004 - O sistema deve permitir o gerenciamento das url’s de músicas / clipes e fotos de capa| OK | 03/12/2021| Amanda | Foi possível adicionar ou excluir card contendo url’s e foto de capa|
|	Funcional |	 Requisitos 	| RF005 - O sistema deve permitir o gerenciamento da biografia| OK |03/12/2021| Amanda | Foi possível inserir novo texto na biografia|
|	Funcional |	 Requisitos 	| RF006 - O sistema deve permitir o cadastro de fãs| OK | 03/12/2021| Amanda | Foi possível cadastrar dados |
|	Funcional |	 Requisitos 	| RF007 - O sistema deve gerar relatório de cadastro de fãs| OK |06/12/2021 | Amanda | Foi possível fazer o download do relatório |
|	Funcional |	 Requisitos 	| RF008 - O sistema deve permitir o gerenciamento dos dados de contato| OK | 03/12/2021| Amanda | Foi possível alterar dados de contato |
|	Não Funcional|	 Usabilidade	| RNF001 - O sistema deve ter boa usabilidade | OK |03/12/2021| Amanda | O site possui navegação fácil, é claro e objetivo, tendo pontos instintivos na hora do acesso |
|	Não Funcional|	 Implementação	| RNF002 - O sistema deve ser responsivo| Falhou |03/12/2021| Amanda | O site é responsivo apenas em display desktop e tablet|
|	Não Funcional|	 Segurança	| RNF003 - O sistema deve ser seguro para o usuário| OK |03/12/2021| Amanda | Foi possível realizar alterações no site somente após login como administrador |

### Casos de Uso 

|	Casos de Uso	|	ID	|	Teste		| 	Resultado	| 	Data	 | 	Responsável 	| 	Descrição	|
|--------------|----|--------|------------|--------|---------------|------------|
|	Fazer login 	      |1|		Acessar qualquer página do site			| OK | 03/12/2021| Luiz |Foi possível acessar a página de Home e ver seu conteúdo| 
|			      |2| 		Clicar no botão superior direito “Acesso restrito” 	| OK | 03/12/2021| Luiz |	Foi possível acessar a página para se realizar login|	
|			      |3| 			Informar usuário e senha		 	| OK | 03/12/2021| Luiz | Foi possível acessar a página de administrador |
|    |    |    |    |
|Cadastrar evento na agenda|1|		Fazer login como administrador 			     | OK | 03/12/2021| Luiz |	Foi possível realizar login e acessar a página de administrador  |
|			      |2| 		Clicar no botão editar ao lado da palavra “AGENDA”	     | OK | 03/12/2021| Luiz |	Ao clicar no botão, fui redirecionada para a página de equivalência a edição da agenda|
|			      |3| 		Clicar no botão “adicione novo evento” 		     | OK | 03/12/2021| Luiz |	Ao clicar no botão, fui redirecionada para a página de equivalência a adição de evento na agenda|
|			      |4| 		Preencher os campos solicitados			     | OK | 03/12/2021| Luiz |	Foi possível preencher campos na tela de adição de evento|
|			      |5| 		Clicar no botão check ao lado direito da página	| OK | 03/12/2021| Luiz | Foi possível enviar os dados e o sistema exibiu a mensagem “Salvo com sucesso”|
|    |    |    |    |
|Cadastrar nova música/clipe|1|		Fazer login como administrador 			     | OK | 03/12/2021| Luiz |	Foi possível realizar login e acessar a página de administrador |
|			      |2| 		Clicar no botão editar ao lado de “MÚSICAS E CLIPES”   | OK | 03/12/2021| Luiz |	Ao clicar no botão, fui redirecionada para a página de equivalência a edição das músicas e clipes |
|			      |3| 		Clicar no botão “adicionar música/clipe” 		     | OK | 03/12/2021| Luiz |	Ao clicar no botão, fui redirecionada para a página de equivalência a adição de música e clipe|
|			      |4| 		Clicar no botão “upload foto de capa”		     | OK | 03/12/2021| Luiz |	Ao clicar no botão, o sistema abriu o explorador de arquivos local para selecionar a foto  |
|			      |5| 		Preencher os campos solicitados			     | OK | 03/12/2021| Luiz |	Foi possível preencher campos na tela de adição de música e clipe	|	
|			      |6| 		Clicar no botão “confirmar cadastro”		     | OK | 03/12/2021| Luiz |	Foi possível enviar os dados e o sistema exibiu a mensagem “Salvo com sucesso”|
|    |    |    |    |
|Excluir música/clipe	      |1|		Fazer login como administrador 			     | OK | 03/12/2021| Luiz |	Foi possível realizar login e acessar a página de administrador |
|			      |2| 		Clicar no botão editar ao lado de “MÚSICAS E CLIPES”   | OK | 03/12/2021| Luiz |	Ao clicar no botão, fui redirecionada para a página de equivalência a edição das músicas e clipes |
|			      |3| 		Clicar no botão “X” abaixo da foto de capa 		     | OK | 03/12/2021| Luiz |	Ao clicar no botão, o card foi excluído e o sistema exibiu a mensagem “Deletado com sucesso!” |
|    |    |    |    |
|Dados incompletos para cadastro|1|		Acessar a página “Central de Fãs”		     | OK | 03/12/2021| Luiz |	Foi possível acessar a página de Central de Fãs e ver seu conteúdo |
|			               |2| 		Campo obrigatório não preenchido 	     | OK | 03/12/2021| Luiz |	Ao tentar submeter com campos vazios, o sistema exibiu a mensagem “Preencha todos os campos!” |
