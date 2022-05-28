// Algoritimo para calcular as compras no mercado

var preco_arroz_T1, preco_arroz_T2, preco_feijao_branco, preco_feijao_preto, preco_linguica, preco_lentilha, resposta, total_compras,

// Entrada dos preços dos produtos
  preco_arroz_T1 = prompt ("Insira o preço do kilo do arroz Tipo1:");
  preco_arroz_T2 = prompt ("Insira o preço do kilo do arroz Tipo2:");
  preco_feijao_branco = prompt ("Insira o preço do kilo do feijão branco:");
  preco_feijao_preto = prompt ("Insira o preço do kilo do feijão preto:");
  preco_linguica = prompt ("Insira o preço do kilo da linguiça defumada:");
  preco_lentilha = prompt ("Insira o preço do kilo da lentilha:");
    alert ("----------------------------------------------------------");

// Entrada com a resposta 's' ou 'n' do usuário
  resposta = prompt ("Tem arroz tipo 1? Responda S para SIM ou N para NÃO:"); 

// Estrutura de decisão 1° opção
  if (resposta == 's'){                
    preco_arroz_T1 = parseInt (preco_arroz_T1);    
    preco_feijao_preto = parseInt (preco_feijao_preto);
    total_compras = preco_arroz_T1 + (preco_feijao_preto * 2); 
    alert ("Você comprou 1kg de arroz Tipo 1 e 2kg de feijão preto"); 
} else {                   
    resposta = prompt ("Tem arroz tipo 2? Responda S para SIM ou N para NÃO");

// Estrutura de decisão 2° opção
    if (resposta == 's'){                
      preco_arroz_T2 = parseInt (preco_arroz_T2);    
      preco_feijao_branco = parseInt (preco_feijao_branco);
      total_compras = (preco_arroz_T2 * 3) + preco_feijao_branco;
        alert ("Você comprou 3kg de arroz Tipo 2 e 1kg de feijão branco");
  } 
    
// Estrutura de decisão caso a resposta seja 'n' para as duas opções anteriores
    else {                    
      preco_linguica = parseInt (preco_linguica);    
      preco_lentilha = parseInt (preco_lentilha);    
      total_compras = (preco_lentilha * 2) + preco_linguica;
        alert ("Você comprou 2kg de lentilha e 1kg de linguiça defumada");
    }                        
}

// Impreção do valor tatal da compra
  alert ("O valor da sua compra foi R$" + total_compras);
  alert ("----------------------------------------------------------");