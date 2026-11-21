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
('A Fábrica', 1, '50min', 3, 'Chuvisco uma criança que questiona a guerra e a falta do pai em casa motivada pela necessidade de produção de armas da fábrica decide criar uma maquina que fizesse as pessoas lembrarem do passado sem guerras'),
('Dora', 2, '90min', 5, 'Na peça, Grace encarna uma mulher que acreditava que sua história já estava escrita. Mas a vida provou que ainda faltavam alguns capítulos. Dora passou décadas cuidando dos outros. Dedicou-se à família, preservou suas histórias, assumiu responsabilidades e adiou desejos que pareciam poder esperar. Acreditava conhecer perfeitamente a mulher que havia se tornado e as razões que determinaram cada uma de suas escolhas. Até que as certezas que sustentavam sua existência começam a perder o lugar. É desse ponto de partida que a comédia se desdobra, transitando com naturalidade entre o riso e a emoção para falar sobre aquilo que todos carregamos: as escolhas que fazemos, as versões que construímos sobre nós mesmos e a possibilidade de transformar o próprio destino.'),
('Sancho Pança, o fiel escudeiro', 3, '60min', 1, 'Internado em um manicômio por jurar ser o fiel escudeiro de Dom Quixote, o Palhaço Piruá se coloca na pele e na alma de Sancho Pança na esperança de reencontrar o valente cavaleiro de La Mancha.'),
('Rei Lixo', 4, '85min', 6, 'A trama acompanha a decadência de um rei idoso que decide dividir o próprio reino entre suas três filhas. Iludido pela falsa adulação das duas mais velhas, Goneril e Regana, ele acaba deserdando e banindo Cordélia, a única que lhe oferece afeto sincero.');

