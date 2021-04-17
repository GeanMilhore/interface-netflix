# Interface-Netflix :desktop_computer:

## ( Projeto implementado durante uma aula na Digital Innovation One :pencil2: ) 

### Tecnologias utilizadas: :yellow_square: JavaScript


#### **Código:** Digital Innovation One.
#### **Refazendo-o-Código:** Projeto apresentado abaixo. 

Neste projeto implementei a tela inicial da netflix em html, css e __JavaScript__ com <br> a utilização do framework __Owl Carousel__. 


## Visão Geral do Projeto

!["pagina-inicial"](/pagina-inicial.png "Imagem principal.")

no mesmo utilizasse muito o modelo de layout flexbox, que organiza os itens <br> dentro de um container dependendo do tamanho da tela.

##### Parte do código CSS
```
    main .filme-principal{
        
        display: flex;
        flex-direction: column;
        
    }
```

## Implementação de um Pop-Up

!["Pop-Up"](/pop-up.png "Imagem principal.")

Implementado com __JavaScript__ torna-se visivel através da adição de uma <br>
classe no código de __*main.js*__.

```
        function iniciaModal(modalID){
        
            const pop = document.getElementsByClassName(modalID)
            
            pop[0].classList.add('mostrar')
        
```

iniciaModal é uma a função que vai receber um parametro igual a classe<BR>
da __*div*__ que contem o pop-up.

```
pop[0].addEventListener('click',(e)=>{

            if(e.target.className == "mais-informacoes mostrar" ||
            e.target.className == "fechar"){
            
                pop[0].classList.remove('mostrar')
                
            }
```

Nesta parte do código estamos colocando uma escuta no evento click, que ira <br>
verificar se os clicks estão fora da parte do Pop-up.
