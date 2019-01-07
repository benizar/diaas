# Diagrams

## Mermaid examples
- [Flowchart](https://benito-zaragozi.com/diaas/?mmd=graph%20TD;A--%3EB;A--%3EC;B--%3ED;C--%3ED;)
- [Sequence diagram](https://benito-zaragozi.com/diaas/?mmd=sequenceDiagram;A-%3E%3E%20B:%20Query;B-%3E%3E%20C:%20Forward%20query;Note%20right%20of%20C:%20Thinking...;C-%3E%3E%20B:%20Response;B-%3E%3E%20A:%20Forward%20response;)
- [Gantt](https://benito-zaragozi.com/diaas/?mmd=gantt;dateFormat%20%20YYYY-MM-DD;title%20Adding%20GANTT%20diagram%20functionality%20to%20mermaid;section%20A%20section;Completed%20task%20%20%20%20%20%20%20%20%20%20%20%20:done,%20%20%20%20des1,%202014-01-06,2014-01-08;Active%20task%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20:active,%20%20des2,%202014-01-09,%203d;Future%20task%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20:%20%20%20%20%20%20%20%20%20des3,%20after%20des2,%205d;Future%20task2%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20:%20%20%20%20%20%20%20%20%20des4,%20after%20des3,%205d;section%20Critical%20tasks;Completed%20task%20in%20the%20critical%20line%20:crit,%20done,%202014-01-06,24h;Implement%20parser%20and%20jison%20%20%20%20%20%20%20%20%20%20:crit,%20done,%20after%20des1,%202d;Create%20tests%20for%20parser%20%20%20%20%20%20%20%20%20%20%20%20%20:crit,%20active,%203d;Future%20task%20in%20critical%20line%20%20%20%20%20%20%20%20:crit,%205d;Create%20tests%20for%20renderer%20%20%20%20%20%20%20%20%20%20%20:2d;Add%20to%20mermaid%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20:1d;)

## Gravizo
![Alt text](https://g.gravizo.com/svg?digraph%20G%20{aize%20=%224,4%22;main%20[shape=box];main%20-%3E%20parse%20[weight=8];parse%20-%3E%20execute;main%20-%3E%20init%20[style=dotted];main%20-%3E%20cleanup;execute%20-%3E%20{%20make_string;%20printf}init%20-%3E%20make_string;edge%20[color=red];main%20-%3E%20printf%20[style=bold,label=%22100%20times%22];make_string%20[label=%22make%20a%20string%22];node%20[shape=box,style=filled,color=%22.7%20.3%201.0%22];execute%20-%3E%20compare;}
)
