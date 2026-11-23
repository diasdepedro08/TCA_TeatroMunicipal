-- inserts padrao das partes de selecionar um só

INSERT INTO publico (nome)
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
('Negra'),
('Trans'),
('Indigena'),
('PCD');

-- inserts de eventos

INSERT INTO evento (titulo, proponente_id, duracao, publico_id, sinopse)
VALUES
('A Fábrica', 1, 50, 3, 'Chuvisco uma criança que questiona a guerra e a falta do pai em casa motivada pela necessidade de produção de armas da fábrica decide criar uma maquina que fizesse as pessoas lembrarem do passado sem guerras'),
('Dora', 2, 90, 5, 'Na peça, Grace encarna uma mulher que acreditava que sua história já estava escrita. Mas a vida provou que ainda faltavam alguns capítulos. Dora passou décadas cuidando dos outros. Dedicou-se à família, preservou suas histórias, assumiu responsabilidades e adiou desejos que pareciam poder esperar. Acreditava conhecer perfeitamente a mulher que havia se tornado e as razões que determinaram cada uma de suas escolhas. Até que as certezas que sustentavam sua existência começam a perder o lugar. É desse ponto de partida que a comédia se desdobra, transitando com naturalidade entre o riso e a emoção para falar sobre aquilo que todos carregamos: as escolhas que fazemos, as versões que construímos sobre nós mesmos e a possibilidade de transformar o próprio destino.'),
('Sancho Pança, o fiel escudeiro', 3, 60, 1, 'Internado em um manicômio por jurar ser o fiel escudeiro de Dom Quixote, o Palhaço Piruá se coloca na pele e na alma de Sancho Pança na esperança de reencontrar o valente cavaleiro de La Mancha.'),
('Rei Lixo', 4, 85, 6, 'A trama acompanha a decadência de um rei idoso que decide dividir o próprio reino entre suas três filhas. Iludido pela falsa adulação das duas mais velhas, Goneril e Regana, ele acaba deserdando e banindo Cordélia, a única que lhe oferece afeto sincero.');

-- inserts dos inserts

INSERT INTO equipe (evento_id, nome, funcao, curriculo)
VALUES
(1, 'Marlon Britto', 'diretor', 'Formado em sla oq de sla onde 30 anos de era uma vez'),
(1, 'Diogo Froes', 'ator', 'Estudante de teatro desde os 6 anos com 13 em sua primeira profissional'),
(1, 'Pedro Dias', 'ator', 'Ator e artista circense trabalha como humorista na cia teatral era uma vez e fantasy circus'),
(1, 'Ludmilla Maioli', 'atriz', 'Atriz desde os 16 anos com mais de 30 premios em festivais nacionais e internacionais'),
(1, "Kako Araújo", 'cenógrafo', 'Artista plástico monta cenários e props encantadores e tecnológiocos'),

(2, 'Grace Gianoukas', 'atriz', 'terça insana e globo UAAAAAAAAU'),
(2, 'Thereza Falcão', 'escritora', 'Thereza Falcão muito foda'),
(2, 'Gilberto Gawronski', 'diretor', 'Gilberto Gawronski muito foda tbm'),

(3, 'Rodrigo Bruggeman', 'Ator', 'premiado no Palco giratório 2026, diretor, ator e produtor'),
(3, 'Não sei quem é', 'diretor', 'me arrependi de cobrar curriculo'),

(4, 'Kleber', 'Ator', 'KLEBEEEEEEEEEER'),
(4, 'Kleber 2', 'diretor', 'AAAAAAAAAAAAAAAAAAA'),
(4, 'renato', 'ator', 'BBBBBBBBBBBBBBBBBBBB'),
(4, 'sequervito', 'atriz', 'meu sonho era por um lorem aqui');

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