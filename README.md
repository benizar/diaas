# my-mermaid

![Alt text](https://benito-zaragozi.com/diagrams/?mmmd=;
graph LR;
A --- B;
B-->C[fa:fa-ban forbidden];
B-->D(fa:fa-spinner);
)

![test](https://benito-zaragozi.com/diagrams/?mmmd=graph%20LR;A%20---%20B;B--%3EC[fa:fa-ban%20forbidden];B--%3ED(fa:fa-spinner);)

![Alt text](https://g.gravizo.com/svg?
  digraph G {
    aize ="4,4";
    main [shape=box];
    main -> parse [weight=8];
    parse -> execute;
    main -> init [style=dotted];
    main -> cleanup;
    execute -> { make_string; printf}
    init -> make_string;
    edge [color=red];
    main -> printf [style=bold,label="100 times"];
    make_string [label="make a string"];
    node [shape=box,style=filled,color=".7 .3 1.0"];
    execute -> compare;
  }
)
