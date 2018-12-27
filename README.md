# my-mermaid

![My diagram](https://benito-zaragozi.com/diagrams/?mmd=graph%20LR;A%20-->%20B;)

![Alt text](https://g.gravizo.com/svg?digraph%20G%20{aize%20=%224,4%22;main%20[shape=box];main%20-%3E%20parse%20[weight=8];parse%20-%3E%20execute;main%20-%3E%20init%20[style=dotted];main%20-%3E%20cleanup;execute%20-%3E%20{%20make_string;%20printf}init%20-%3E%20make_string;edge%20[color=red];main%20-%3E%20printf%20[style=bold,label=%22100%20times%22];make_string%20[label=%22make%20a%20string%22];node%20[shape=box,style=filled,color=%22.7%20.3%201.0%22];execute%20-%3E%20compare;}
)

<img width="800" height="600" src="https://benito-zaragozi.com/mermaid-api//?width=400&height=600&q=graph%20TD%0Asubgraph%20Baie%20r%C3%A9seau%0ARR(Switch%20r%C3%A9seau)--%3E%7CRJ45%7CE%0AA1(Alim%205V%20micro%20USB)--%3EE(Player%20Audio%20raspi)%0Aend%0Asubgraph%20Salle%20de%20jeu%0AE--%3E%7Ccable%20audio%7CF(HP%20amplifi%C3%A9%201)%0AA2(Alim%20PC16)--%3EF%0AF-.-%3E%7Ccable%20audio%7CG(HP%20amplifi%C3%A9%202)%0AA3(Alim%20PC16)--%3EG%0AW1(Webcam%20D5020L)%0AR1(Arriv%C3%A9e%20RJ45)--%3EW1%0AA4(Alim%20PC16)--%3EW1%0Aend%0A"/> 
