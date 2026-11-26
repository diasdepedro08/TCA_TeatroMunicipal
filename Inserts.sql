-- inserts padrao das partes de selecionar um só

INSERT INTO publico (publico)
VALUES
('Livre para todos os publicos'),
('Maiores de 6 anos'),
('Maiores de 10 anos'),
('Maiores de 14 anos'),
('Maiores de 12 anos'),
('Maiores de 16 anos'),
('Maiores de 18 anos');

INSERT INTO inscricao (insc_como)
VALUES
('Pessoa Física'),
('Pessoa Jurídica'),
('Grupo coletivo sem CNPJ');

INSERT INTO cotas (cota)
VALUES
('Nenhuma'),
('Negra'),
('Trans'),
('Indigena'),
('PCD');

-- inserts de eventos

INSERT INTO eventos (titulo, proponente_id, duracao, publico_id, sinopse)
VALUES
('A Fábrica', 1, 50, 3, 'Chuvisco uma criança que questiona a guerra e a falta do pai em casa motivada pela necessidade de produção de armas da fábrica decide criar uma maquina que fizesse as pessoas lembrarem do passado sem guerras'),
('Dora', 2, 90, 5, 'Na peça, Grace encarna uma mulher que acreditava que sua história já estava escrita. Mas a vida provou que ainda faltavam alguns capítulos. Dora passou décadas cuidando dos outros. Dedicou-se à família, preservou suas histórias, assumiu responsabilidades e adiou desejos que pareciam poder esperar. Acreditava conhecer perfeitamente a mulher que havia se tornado e as razões que determinaram cada uma de suas escolhas. Até que as certezas que sustentavam sua existência começam a perder o lugar. É desse ponto de partida que a comédia se desdobra, transitando com naturalidade entre o riso e a emoção para falar sobre aquilo que todos carregamos: as escolhas que fazemos, as versões que construímos sobre nós mesmos e a possibilidade de transformar o próprio destino.'),
('Sancho Pança, o fiel escudeiro', 3, 60, 1, 'Internado em um manicômio por jurar ser o fiel escudeiro de Dom Quixote, o Palhaço Piruá se coloca na pele e na alma de Sancho Pança na esperança de reencontrar o valente cavaleiro de La Mancha.'),
('Rei Lixo', 4, 85, 6, 'A trama acompanha a decadência de um rei idoso que decide dividir o próprio reino entre suas três filhas. Iludido pela falsa adulação das duas mais velhas, Goneril e Regana, ele acaba deserdando e banindo Cordélia, a única que lhe oferece afeto sincero.'),
('A descoberta', 5, 40, 4, 'Retrata a descoberta do átomo pelos cientistas de uma forma comica e irreverente com diversas situações cotidianas');

-- inserts dos inserts

INSERT INTO equipe (evento_id, nome, funcao, curriculo)
VALUES
(1, 'Marlon Britto', 'diretor', 'Formado em sla oq de sla onde 30 anos de era uma vez'),
(1, 'Diogo Froes', 'ator', 'Estudante de teatro desde os 6 anos com 13 em sua primeira profissional'),
(1, 'Pedro Dias', 'ator', 'Ator e artista circense trabalha como humorista na cia teatral era uma vez e fantasy circus'),
(1, 'Ludmilla Maioli', 'atriz', 'Atriz desde os 16 anos com mais de 30 premios em festivais nacionais e internacionais'),
(1, 'Kako Araújo', 'cenógrafo', 'Artista plástico monta cenários e props encantadores e tecnológiocos'),

(2, 'Grace Gianoukas', 'atriz', 'terça insana e globo UAAAAAAAAU'),
(2, 'Thereza Falcão', 'escritora', 'Thereza Falcão muito foda'),
(2, 'Gilberto Gawronski', 'diretor', 'Gilberto Gawronski muito foda tbm'),

(3, 'Rodrigo Bruggeman', 'Ator', 'premiado no Palco giratório 2026, diretor, ator e produtor'),
(3, 'Não sei quem é', 'diretor', 'me arrependi de cobrar curriculo'),

(4, 'Kleber', 'Ator', 'KLEBEEEEEEEEEER'),
(4, 'Kleber 2', 'diretor', 'AAAAAAAAAAAAAAAAAAA'),
(4, 'renato', 'ator', 'BBBBBBBBBBBBBBBBBBBB'),
(4, 'sequervito', 'atriz', 'meu sonho era por um lorem aqui'),

(5, 'Pedro Dias', 'Diretor', 'Ator e artista circense trabalha como humorista na cia teatral era uma vez e fantasy circus'),
(5, 'Bruno Rodrigues', 'Musicista', 'Violonista e ator'),
(5, 'Arthur Caçoilo', 'Ator', 'cacoilo oilo oilo oilo'),
(5, 'Ryan Gomes', 'Ator', 'rya an an an an an na an an an an'),
(5, 'Bianca Loureiro', 'atriz', 'Atriz da cia teatral era uma vez indicada 2 anos seguidos');

INSERT INTO sessoes (evento_id, datas, horarios, ingressos)
VALUES
(1, '2026-10-09', '14:30:00', 'R$ 15,00'),
(1, '2026-10-09', '16:00:00', 'R$ 15,00'),
(1, '2026-10-10', '11:00:00', 'R$ 15,00'),
(1, '2026-10-10', '13:30:00', 'R$ 15,00'),

(2, '2026-09-21', '19:00:00', 'Solidário'),
(2, '2026-09-21', '21:00:00', 'Solidário'),

(3, '2026-05-24', '20:00:00', 'Solidário'),

(4, '2026-11-06', '19:30:00', 'Gratuito'),
(4, '2026-11-06', '21:00:00', 'Gratuito'),
(4, '2026-11-07', '19:30:00', 'Gratuito'),
(4, '2026-11-07', '21:00:00', 'Gratuito'),
(4, '2026-11-08', '19:30:00', 'Gratuito'),
(4, '2026-11-08', '21:00:00', 'Gratuito'),

(5, '2026-03-15', '11:00:00', 'R$ 200,00');

INSERT INTO proponente (evento_id, nome, cpf, grupo, cnpj, email, telefone, inscricao_id, cota_id, curriculo)
VALUES
(1, 'Marlon Britto', '676.676.676-67', 'Era uma vez', null, 'ciateatraleraumavez@gmail.com', '53 6767-6767', 3, 1, 'A CIA. Era uma vez a 30 anos trabalha com jovens participando dos espetáculos,  com o tempo foi necessário abrir aulas e oficinas pós turno para alunos que gostariam e não tinham oportunidades de fazer teatro. Após a pandemia a procura e animo por aulas de teatro era alta, fazendo as turmas aumentarem, assim, atualmente há 40 alunos em 3 turmas.'),

(2, 'AgenciaABCD', '000.000.000-00', null, '0000-00', 'doraacomedia@gmail.com', '13 1313-1313', 2, 1, 'ABCDABCDABCDABCDABCDABCDABCD'),

(3, 'Rodrigo Bruggeman', '333.333.333-33', 'Giracirco', '3333-33', 'pancosancho@abc.com', '99 9999-9999', 1, 1, 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'),

(4, 'Kleber slaoq', '222.222.222-22', 'Maschara', '2222-22', 'kelber@kelber.com', '22 2222-2222', 2, 1, 'MASCHARAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA...A'),

(5, 'Pedro DIAs', '555.555.555-55', 'Pepitarts', null, 'pepitarts@hotmail.com', '53 894-3482', 1, 1, 'Pedro dias ias ias ias ias ias ias ias ias ias ias ias ias iiiiaaaaassssss');