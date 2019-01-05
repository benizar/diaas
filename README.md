# Diagrams

## Mermaid examples
- [Sequence diagram](https://benito-zaragozi.com/diagrams/?mmd=sequenceDiagram;A-%3E%3E%20B:%20Query;B-%3E%3E%20C:%20Forward%20query;Note%20right%20of%20C:%20Thinking...;C-%3E%3E%20B:%20Response;B-%3E%3E%20A:%20Forward%20response;)
- [Flowchart](https://benito-zaragozi.com/diagrams/?mmd=graph%20LR;A%20-->%20B;)

![Alt text](https://g.gravizo.com/svg?digraph%20G%20{aize%20=%224,4%22;main%20[shape=box];main%20-%3E%20parse%20[weight=8];parse%20-%3E%20execute;main%20-%3E%20init%20[style=dotted];main%20-%3E%20cleanup;execute%20-%3E%20{%20make_string;%20printf}init%20-%3E%20make_string;edge%20[color=red];main%20-%3E%20printf%20[style=bold,label=%22100%20times%22];make_string%20[label=%22make%20a%20string%22];node%20[shape=box,style=filled,color=%22.7%20.3%201.0%22];execute%20-%3E%20compare;}
)
