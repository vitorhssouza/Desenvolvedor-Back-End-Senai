-- Comando de inserção de dados na tabela

-- Entidade Genero
INSERT INTO `cinema`.`genero` (`id_genero`, `descricao`) VALUES ('1', 'Aventura');
INSERT INTO `cinema`.`genero` (`id_genero`, `descricao`) VALUES ('2', 'Ação');
INSERT INTO `cinema`.`genero` (`id_genero`, `descricao`) VALUES ('3', 'Velocidade');
INSERT INTO `cinema`.`genero` (`id_genero`, `descricao`) VALUES ('4', 'Comédia');
INSERT INTO `cinema`.`genero` (`id_genero`, `descricao`) VALUES ('5', 'Romance');
INSERT INTO `cinema`.`genero` (`id_genero`, `descricao`) VALUES ('6', 'Terror');
INSERT INTO `cinema`.`genero` (`id_genero`, `descricao`) VALUES ('7', 'Suspense');
INSERT INTO `cinema`.`genero` (`id_genero`, `descricao`) VALUES ('8', 'Adulto');
INSERT INTO `cinema`.`genero` (`id_genero`, `descricao`) VALUES ('9', 'Infantil');
INSERT INTO `cinema`.`genero` (`id_genero`, `descricao`) VALUES ('10', 'Documentário');
INSERT INTO `cinema`.`genero` (`id_genero`, `descricao`) VALUES ('11', 'Biografia');
INSERT INTO `cinema`.`genero` (`id_genero`, `descricao`) VALUES ('12', 'Drama');
INSERT INTO `cinema`.`genero` (`id_genero`, `descricao`) VALUES ('13', 'Ficção Científica');
INSERT INTO `cinema`.`genero` (`id_genero`, `descricao`) VALUES ('14', 'Musical');
INSERT INTO `cinema`.`genero` (`id_genero`, `descricao`) VALUES ('15', 'Dança');

-- Entidade Diretor
INSERT INTO `cinema`.`diretor` (`id_diretor`, `nome`, `nacionalidade`) VALUES ('1', 'Lucas Oliveira', 'Brasileiro');
INSERT INTO `cinema`.`diretor` (`id_diretor`, `nome`, `nacionalidade`) VALUES ('2', 'Maycon Larceda', 'Brasileiro');
INSERT INTO `cinema`.`diretor` (`id_diretor`, `nome`, `nacionalidade`) VALUES ('3', 'Davi Rocha', 'Brasileiro');
INSERT INTO `cinema`.`diretor` (`id_diretor`, `nome`, `nacionalidade`) VALUES ('4', 'Vitor Souza', 'Brasileiro');
INSERT INTO `cinema`.`diretor` (`id_diretor`, `nome`, `nacionalidade`) VALUES ('5', 'Stanley Kubrick', 'Americano');
INSERT INTO `cinema`.`diretor` (`id_diretor`, `nome`, `nacionalidade`) VALUES ('6', 'Bernardo Bertolucci', 'Italiano');
INSERT INTO `cinema`.`diretor` (`id_diretor`, `nome`, `nacionalidade`) VALUES ('7', 'Jean-Luc Godard', 'Francês');
INSERT INTO `cinema`.`diretor` (`id_diretor`, `nome`, `nacionalidade`) VALUES ('8', 'Quentin Tarantino', 'Americano');
INSERT INTO `cinema`.`diretor` (`id_diretor`, `nome`, `nacionalidade`) VALUES ('9', 'Martin Scorsese', 'Italiano');
INSERT INTO `cinema`.`diretor` (`id_diretor`, `nome`, `nacionalidade`) VALUES ('10', 'Alfred Hitchcock', 'Inglês');
INSERT INTO `cinema`.`diretor` (`id_diretor`, `nome`, `nacionalidade`) VALUES ('11', 'Leticia Oliveira', 'Brasileira');
INSERT INTO `cinema`.`diretor` (`id_diretor`, `nome`, `nacionalidade`) VALUES ('12', 'João Nascimento', 'Argentino');
INSERT INTO `cinema`.`diretor` (`id_diretor`, `nome`, `nacionalidade`) VALUES ('13', 'Vitoria Arou', 'Argentina');
INSERT INTO `cinema`.`diretor` (`id_diretor`, `nome`, `nacionalidade`) VALUES ('14', 'José valente', 'Mexicano');
INSERT INTO `cinema`.`diretor` (`id_diretor`, `nome`, `nacionalidade`) VALUES ('15', 'Iana Valin', 'Italiana');

-- Entidade indioma
INSERT INTO `cinema`.`idioma` (`id_idioma`, `idioma`) VALUES ('1', 'Português');
INSERT INTO `cinema`.`idioma` (`id_idioma`, `idioma`) VALUES ('2', 'Inglês');
INSERT INTO `cinema`.`idioma` (`id_idioma`, `idioma`) VALUES ('3', 'Alemão');
INSERT INTO `cinema`.`idioma` (`id_idioma`, `idioma`) VALUES ('4', 'Espanhol');
INSERT INTO `cinema`.`idioma` (`id_idioma`, `idioma`) VALUES ('5', 'Françês');
INSERT INTO `cinema`.`idioma` (`id_idioma`, `idioma`) VALUES ('6', 'Japonês');
INSERT INTO `cinema`.`idioma` (`id_idioma`, `idioma`) VALUES ('7', 'Coreano');

-- Entidade Faixa Etaria
INSERT INTO `cinema`.`faixa_etaria` (`id_faixa_etaria`, `faixa_etaria`) VALUES ('1', 'Livre');
INSERT INTO `cinema`.`faixa_etaria` (`id_faixa_etaria`, `faixa_etaria`) VALUES ('2', '10+');
INSERT INTO `cinema`.`faixa_etaria` (`id_faixa_etaria`, `faixa_etaria`) VALUES ('3', '18+');
INSERT INTO `cinema`.`faixa_etaria` (`id_faixa_etaria`, `faixa_etaria`) VALUES ('4', '16+');
INSERT INTO `cinema`.`faixa_etaria` (`id_faixa_etaria`, `faixa_etaria`) VALUES ('5', '14+');

-- Entidade Filme
INSERT INTO `cinema`.`filme` (`id_filme`, `nome`, `nome_original`, `ano_lancamento`, `sinopse`, `id_diretor`, `id_faixa_etaria`, `id_genero`, `id_idioma`) VALUES ('1', 'American Pie', 'American Pie', 2000, 'virgens às vésperas do baile de formatura', '1', '3', '4', '1');
INSERT INTO `cinema`.`filme` (`id_filme`, `nome`, `nome_original`, `ano_lancamento`, `sinopse`, `id_diretor`, `id_faixa_etaria`, `id_genero`, `id_idioma`) VALUES ('2', 'O Resgate', 'Rescue', 2001, 'luta para sobreviver durante a missão', '2', '4', '1', '1');
INSERT INTO `cinema`.`filme` (`id_filme`, `nome`, `nome_original`, `ano_lancamento`, `sinopse`, `id_diretor`, `id_faixa_etaria`, `id_genero`, `id_idioma`) VALUES ('3', 'Se Beber Não Case', 'The Hangover', 2004, 'quatro amigos vão para despedida de solteiro', '3', '4', '4', '1');
INSERT INTO `cinema`.`filme` (`id_filme`, `nome`, `nome_original`, `ano_lancamento`, `sinopse`, `id_diretor`, `id_faixa_etaria`, `id_genero`, `id_idioma`) VALUES ('4', 'Massacre Da Serra Eletrica', 'Massacre Da Serra Eletrica', 2005, 'louco com uma serra elétrica não fazia parte dos planos', '4', '3', '6', '2');
INSERT INTO `cinema`.`filme` (`id_filme`, `nome`, `nome_original`, `ano_lancamento`, `sinopse`, `id_diretor`, `id_faixa_etaria`, `id_genero`, `id_idioma`) VALUES ('5', 'Annabelle', 'Annabelle', 2010, ' Membros de uma seita satânica invadem a casa do casal em um ataque violento.', '5', '3', '6', '2');
INSERT INTO `cinema`.`filme` (`id_filme`, `nome`, `nome_original`, `ano_lancamento`, `sinopse`, `id_diretor`, `id_faixa_etaria`, `id_genero`, `id_idioma`) VALUES ('6', 'Jumanji', 'Jumanji', 1998, ' jogo de tabuleiro', '6', '1', '4', '2');
INSERT INTO `cinema`.`filme` (`id_filme`, `nome`, `nome_original`, `ano_lancamento`, `sinopse`, `id_diretor`, `id_faixa_etaria`, `id_genero`, `id_idioma`) VALUES ('7', 'Avatar', 'Avatar', 2009, 'mundo alienígena de Pandora vivem os Na\'vi', '7', '2', '1', '4');
INSERT INTO `cinema`.`filme` (`id_filme`, `nome`, `nome_original`, `ano_lancamento`, `sinopse`, `id_diretor`, `id_faixa_etaria`, `id_genero`, `id_idioma`) VALUES ('8', 'Titanic', 'Titanic', 1992, ' fatídica jornada do Titanic', '8', '1', '5', '1');
INSERT INTO `cinema`.`filme` (`id_filme`, `nome`, `nome_original`, `ano_lancamento`, `sinopse`, `id_diretor`, `id_faixa_etaria`, `id_genero`, `id_idioma`) VALUES ('9', 'Velozes e Furiosos', 'Fast and Furious', 2006, 'rachas de rua', '1', '1', '3', '2');
INSERT INTO `cinema`.`filme` (`id_filme`, `nome`, `nome_original`, `ano_lancamento`, `sinopse`, `id_diretor`, `id_faixa_etaria`, `id_genero`, `id_idioma`) VALUES ('10', 'Vingadores', 'Avengers', 2008, 'Os famosos super-heróis da Marvel', '2', '2', '1', '1');
INSERT INTO `cinema`.`filme` (`id_filme`, `nome`, `nome_original`, `ano_lancamento`, `sinopse`, `id_diretor`, `id_faixa_etaria`, `id_genero`, `id_idioma`) VALUES ('11', 'Thor', 'Thor', 2021, 'Thor logo herdará o trono de Asgard', '3', '2', '1', '2');
INSERT INTO `cinema`.`filme` (`id_filme`, `nome`, `nome_original`, `ano_lancamento`, `sinopse`, `id_diretor`, `id_faixa_etaria`, `id_genero`, `id_idioma`) VALUES ('12', 'Batman', 'Batman', 2019, 'Wayne (Robert Pattinson) age como vigilante', '4', '2', '1', '2');
INSERT INTO `cinema`.`filme` (`id_filme`, `nome`, `nome_original`, `ano_lancamento`, `sinopse`, `id_diretor`, `id_faixa_etaria`, `id_genero`, `id_idioma`) VALUES ('13', 'Super-Homen', 'Super-Men', 2020, 'ele luta contra o vilão', '9', '1', '1', '2');

-- Entidade Funcionario
INSERT INTO `cinema`.`funcionario` (`id_funcionario`, `nome`, `data_admisão`, `carteira_trabalho`, `salario`, `cargo`) VALUES ('1', 'Juan', '2022-04-05', '123456', '1500', 'Auxiliar');
INSERT INTO `cinema`.`funcionario` (`id_funcionario`, `nome`, `data_admisão`, `carteira_trabalho`, `salario`, `cargo`) VALUES ('2', 'Marina', '2021-01-01', '321456', '2100', 'Caixa');
INSERT INTO `cinema`.`funcionario` (`id_funcionario`, `nome`, `data_admisão`, `carteira_trabalho`, `salario`, `cargo`) VALUES ('3', 'Maria', '2020-07-25', '369852', '1500', 'Auxiliar');
INSERT INTO `cinema`.`funcionario` (`id_funcionario`, `nome`, `data_admisão`, `carteira_trabalho`, `salario`, `cargo`) VALUES ('4', 'Lucas', '2019-12-15', '147852', '1950', 'Marketing');
INSERT INTO `cinema`.`funcionario` (`id_funcionario`, `nome`, `data_admisão`, `carteira_trabalho`, `salario`, `cargo`) VALUES ('5', 'Vitoria', '2018-04-26', '159357', '3000', 'Gerente');
INSERT INTO `cinema`.`funcionario` (`id_funcionario`, `nome`, `data_admisão`, `carteira_trabalho`, `salario`, `cargo`) VALUES ('6', 'Leo', '2019-06-17', '357753', '1850', 'Analista');
INSERT INTO `cinema`.`funcionario` (`id_funcionario`, `nome`, `data_admisão`, `carteira_trabalho`, `salario`, `cargo`) VALUES ('7', 'Leonan', '2022-01-25', '951159', '2000', 'Analista 1');
INSERT INTO `cinema`.`funcionario` (`id_funcionario`, `nome`, `data_admisão`, `carteira_trabalho`, `salario`, `cargo`) VALUES ('8', 'Philipe', '2022-04-16', '456654', '1974', 'Auxiliar 2');
INSERT INTO `cinema`.`funcionario` (`id_funcionario`, `nome`, `data_admisão`, `carteira_trabalho`, `salario`, `cargo`) VALUES ('9', 'Carlos', '2021-07-09', '123321', '2350', 'Analista 2');

-- Entidade Sala
INSERT INTO `cinema`.`sala` (`id_sala`, `nome`, `capacidade`) VALUES ('1', 'Sala A', '200');
INSERT INTO `cinema`.`sala` (`id_sala`, `nome`, `capacidade`) VALUES ('2', 'Sala B', '200');
INSERT INTO `cinema`.`sala` (`id_sala`, `nome`, `capacidade`) VALUES ('3', 'Sala C', '200');
INSERT INTO `cinema`.`sala` (`id_sala`, `nome`, `capacidade`) VALUES ('4', 'Sala D', '200');
INSERT INTO `cinema`.`sala` (`id_sala`, `nome`, `capacidade`) VALUES ('5', 'Sala E', '200');

-- Entidade Sessoes
INSERT INTO `cinema`.`sessoes` (`id_horarios_fixos`, `horario`, `id_sala`, `id_filme`) VALUES ('1', '16:00', '1', '1');
INSERT INTO `cinema`.`sessoes` (`id_horarios_fixos`, `horario`, `id_sala`, `id_filme`) VALUES ('2', '17:00', '1', '2');
INSERT INTO `cinema`.`sessoes` (`id_horarios_fixos`, `horario`, `id_sala`, `id_filme`) VALUES ('3', '18:00', '2', '4');
INSERT INTO `cinema`.`sessoes` (`id_horarios_fixos`, `horario`, `id_sala`, `id_filme`) VALUES ('4', '19:30', '4', '5');
INSERT INTO `cinema`.`sessoes` (`id_horarios_fixos`, `horario`, `id_sala`, `id_filme`) VALUES ('5', '20:00', '5', '6');
INSERT INTO `cinema`.`sessoes` (`id_horarios_fixos`, `horario`, `id_sala`, `id_filme`) VALUES ('6', '22:00', '3', '7');
INSERT INTO `cinema`.`sessoes` (`id_horarios_fixos`, `horario`, `id_sala`, `id_filme`) VALUES ('7', '23:00', '3', '1');
INSERT INTO `cinema`.`sessoes` (`id_horarios_fixos`, `horario`, `id_sala`, `id_filme`) VALUES ('8', '12:00', '2', '9');
INSERT INTO `cinema`.`sessoes` (`id_horarios_fixos`, `horario`, `id_sala`, `id_filme`) VALUES ('9', '11:00', '4', '10');
INSERT INTO `cinema`.`sessoes` (`id_horarios_fixos`, `horario`, `id_sala`, `id_filme`) VALUES ('10', '10:00', '4', '12');
INSERT INTO `cinema`.`sessoes` (`id_horarios_fixos`, `horario`, `id_sala`, `id_filme`) VALUES ('11', '16:00', '4', '2');
INSERT INTO `cinema`.`sessoes` (`id_horarios_fixos`, `horario`, `id_sala`, `id_filme`) VALUES ('12', '17:00', '3', '10');
INSERT INTO `cinema`.`sessoes` (`id_horarios_fixos`, `horario`, `id_sala`, `id_filme`) VALUES ('13', '19:30', '1', '7');
INSERT INTO `cinema`.`sessoes` (`id_horarios_fixos`, `horario`, `id_sala`, `id_filme`) VALUES ('14', '23:00', '2', '8');

-- Entidade Cartaz
INSERT INTO `cinema`.`cartaz` (`id_cartaz`, `data_inicio`, `data_fim`, `id_filme`) VALUES ('1', '2022-05-15', '2022-05-25', '2');
INSERT INTO `cinema`.`cartaz` (`id_cartaz`, `data_inicio`, `data_fim`, `id_filme`) VALUES ('2', '2022-06-10', '2022-06-20', '3');
INSERT INTO `cinema`.`cartaz` (`id_cartaz`, `data_inicio`, `data_fim`, `id_filme`) VALUES ('3', '2022-07-13', '2022-07-23', '4');
INSERT INTO `cinema`.`cartaz` (`id_cartaz`, `data_inicio`, `data_fim`, `id_filme`) VALUES ('4', '2022-09-14', '2022-09-30', '1');
INSERT INTO `cinema`.`cartaz` (`id_cartaz`, `data_inicio`, `data_fim`, `id_filme`) VALUES ('5', '2022-10-20', '2022-11-01', '6');

-- Apagando a coluna categoria da tabela premiação 
alter table premiacao drop column categoria;

-- Entidade premiacao
INSERT INTO `cinema`.`premiacao` (`id_premiacao`, `premiacao`) VALUES ('1', 'Oscar');
INSERT INTO `cinema`.`premiacao` (`id_premiacao`, `premiacao`) VALUES ('2', 'Oscar');
INSERT INTO `cinema`.`premiacao` (`id_premiacao`, `premiacao`) VALUES ('3', 'BAFTA');
INSERT INTO `cinema`.`premiacao` (`id_premiacao`, `premiacao`) VALUES ('4', 'Prêmios Annie');
INSERT INTO `cinema`.`premiacao` (`id_premiacao`, `premiacao`) VALUES ('5', 'Screen Actors Guild Awards');
INSERT INTO `cinema`.`premiacao` (`id_premiacao`, `premiacao`) VALUES ('6', 'Oscar');
INSERT INTO `cinema`.`premiacao` (`id_premiacao`, `premiacao`) VALUES ('7', 'Oscar');

-- Entidade indicação
INSERT INTO `cinema`.`indicacao` (`filme_id_filme`, `premiacao_id_premiacao`) VALUES ('1', '2');
INSERT INTO `cinema`.`indicacao` (`filme_id_filme`, `premiacao_id_premiacao`) VALUES ('2', '4');
INSERT INTO `cinema`.`indicacao` (`filme_id_filme`, `premiacao_id_premiacao`) VALUES ('1', '7');
INSERT INTO `cinema`.`indicacao` (`filme_id_filme`, `premiacao_id_premiacao`) VALUES ('4', '1');
INSERT INTO `cinema`.`indicacao` (`filme_id_filme`, `premiacao_id_premiacao`) VALUES ('7', '2');
INSERT INTO `cinema`.`indicacao` (`filme_id_filme`, `premiacao_id_premiacao`) VALUES ('6', '4');
INSERT INTO `cinema`.`indicacao` (`filme_id_filme`, `premiacao_id_premiacao`) VALUES ('7', '6');
INSERT INTO `cinema`.`indicacao` (`filme_id_filme`, `premiacao_id_premiacao`) VALUES ('8', '5');
INSERT INTO `cinema`.`indicacao` (`filme_id_filme`, `premiacao_id_premiacao`) VALUES ('9', '3');

-- Entidade sessões e funcionarios
INSERT INTO `cinema`.`sessoes_e_funcionario` (`sessoes_id_sessoes`, `funcionario_id_funcionario`) VALUES ('1', '1');
INSERT INTO `cinema`.`sessoes_e_funcionario` (`sessoes_id_sessoes`, `funcionario_id_funcionario`) VALUES ('2', '1');
INSERT INTO `cinema`.`sessoes_e_funcionario` (`sessoes_id_sessoes`, `funcionario_id_funcionario`) VALUES ('3', '2');
INSERT INTO `cinema`.`sessoes_e_funcionario` (`sessoes_id_sessoes`, `funcionario_id_funcionario`) VALUES ('4', '3');
INSERT INTO `cinema`.`sessoes_e_funcionario` (`sessoes_id_sessoes`, `funcionario_id_funcionario`) VALUES ('5', '4');
INSERT INTO `cinema`.`sessoes_e_funcionario` (`sessoes_id_sessoes`, `funcionario_id_funcionario`) VALUES ('6', '5');
INSERT INTO `cinema`.`sessoes_e_funcionario` (`sessoes_id_sessoes`, `funcionario_id_funcionario`) VALUES ('7', '5');
INSERT INTO `cinema`.`sessoes_e_funcionario` (`sessoes_id_sessoes`, `funcionario_id_funcionario`) VALUES ('8', '5');
INSERT INTO `cinema`.`sessoes_e_funcionario` (`sessoes_id_sessoes`, `funcionario_id_funcionario`) VALUES ('9', '8');
INSERT INTO `cinema`.`sessoes_e_funcionario` (`sessoes_id_sessoes`, `funcionario_id_funcionario`) VALUES ('10', '7');
INSERT INTO `cinema`.`sessoes_e_funcionario` (`sessoes_id_sessoes`, `funcionario_id_funcionario`) VALUES ('11', '9');
INSERT INTO `cinema`.`sessoes_e_funcionario` (`sessoes_id_sessoes`, `funcionario_id_funcionario`) VALUES ('12', '2');
INSERT INTO `cinema`.`sessoes_e_funcionario` (`sessoes_id_sessoes`, `funcionario_id_funcionario`) VALUES ('13', '3');
INSERT INTO `cinema`.`sessoes_e_funcionario` (`sessoes_id_sessoes`, `funcionario_id_funcionario`) VALUES ('14', '1');