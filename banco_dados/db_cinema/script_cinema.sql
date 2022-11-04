SELECT * FROM cartaz;
SELECT * FROM diretor;
SELECT * FROM faixa_etaria;
SELECT * FROM filme;
SELECT * FROM funcionario;
SELECT * FROM genero;
SELECT * FROM idioma;
SELECT * FROM indicacao;
SELECT * FROM premiacao;
SELECT * FROM sala;
SELECT * FROM sessoes;
SELECT * FROM sessoes_e_funcionario;


-- exercicio 1 - Listar as salas de cinemas existentes
SELECT  sala.id_sala as 'Identificador da Sala',
		sala.nome as 'Nome da Sala',
        sala.capacidade as 'Capacidade da Sala'
FROM sala;

-- exercicio 2 listar dos filmes que estão em cartaz 

SELECT  f.nome_original as 'Título original do filme',
		f.nome as 'Titulo nacional do filme',
        d.nome as 'Direção do filme',
        f.ano_lancamento as 'Ano de lançamento',
        p.premiacao as 'Premiações',
        fx.faixa_etaria as 'Faixa Etária',
        c.data_inicio as 'Data início de exibição',
        c.data_fim as 'data fim de exibição'
from filme f
left join diretor d
on f.id_diretor = d.id_diretor
left join indicacao i
on i.filme_id_filme = f.id_filme
left join premiacao p
on i.premiacao_id_premiacao = p.id_premiacao
left join faixa_etaria fx
on f.id_faixa_etaria = fx.id_faixa_etaria
join cartaz c
on c.id_cartaz = f.id_filme;


-- Exercicio 3 - listar dos filmes que tem premiações
select  f.nome_original as 'Título original do filme',
		f.nome as 'Título nacional do filme', 
        count(i.filme_id_filme) as 'Quantidade de premiacao'
from filme f
left join indicacao i
on f.id_filme = i.filme_id_filme
group by f.nome, f.nome_original;
   
   
-- exercicio 4 - Quantidade de filmes por diretores 
select  d.nome as 'Direção do filme',
		count(f.nome) as 'Quantidade de filmes'
from filme f
join diretor d
on f.id_diretor = d.id_diretor
group by d.nome;

-- Exercicio 5 - Quantidade de sessões programadas para um determinado dia

select s.Data as 'Data',
	   f.nome as 'Filme',
       s.horario as 'Horário de Exibição',
       sa.nome as 'Sala'
from sessoes s
left join filme f
on s.id_filme = f.id_filme
join sala sa
on s.id_sala = sa.id_sala
where s.Data = '2022-05-10';

-- Exercicio 6 - Listar todos os filmes que serão exibidor em um determinada data em uma determinada sala

select  s.Data,
		f.nome,
        s.horario
from sessoes s
left join filme f
on s.id_filme = f.id_filme
join sala sa
on s.id_sala = sa.id_sala
where s.Data = '2022-05-10' and sa.nome = 'Sala B';


-- Exercicio 7 - Listar todos os funcionarios do cinema 
select  nome as 'Nome',
		carteira_trabalho as 'Carteira de Trabalho',
		data_admisão as 'Data de Admissão', 
		salario as 'Salário' 
from funcionario;

-- Exercicio 8 - Listar a quantidade de ingressos vendidos em cada sessão

select  s.Data as 'Data',
		sa.nome as 'Sala',
        f.nome as 'Filme',
        s.Qt_Tickets as 'Qtd.Tickets vendidos'
from sessoes s
left join sala sa
on s.id_sala = sa.id_sala
join filme f
on s.id_filme = f.id_filme;


-- Exercicio 9 - Listar os valores arrecadado em cada sessões 
select  s.Data as 'Data',
		sa.nome as 'Sala',
        f.nome as 'Filme',
        s.Qt_Tickets * s.valor_tickets as 'Valor Total de Tickets Vendidos'
from sessoes s
left join sala sa
on s.id_sala = sa.id_sala
join filme f
on s.id_filme = f.id_filme;
        






