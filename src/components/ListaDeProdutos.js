import React from "react";
import Styled from 'styled-components'
import camiseta1 from '../img/camiseta1.png'
import camiseta2 from '../img/camiseta2.png'
import camiseta3 from '../img/camiseta3.png'
import camiseta4 from '../img/camiseta4.png'

const DivStyle = Styled.div `
display:inline-block;

margin-left:500px;
margin-bottom:1000px;
`
export class ListaDeProdutos extends React.Component {

    state={
        listaDeProdutos: [
            {nome:"Camiseta 1", valor: "R$50,00", img: camiseta1},
    {nome:"Camiseta 2", valor: "R$80,00", img: camiseta2},
    {nome:"Camiseta 3", valor: "R$30,00", img: camiseta3},
    {nome:"Camiseta 4", valor: "R$100,00", img: camiseta4}
        ]
    }
   

    render (){
        const ListaDeProdutos = this.state.listaDeProdutos.map((produto, chave)=>{
          return(
            <div className="container"
            key={chave}>
                
              <div className="descricao">{produto.nome}</div>
              <p className="preco">{produto.valor}</p>
              <img className="fotos" src={produto.img} alt={produto.nome}/>
              <button className="Carrinho">Colocar no Carrinho</button>
            </div>
          )
        })
        return(
          <div>
            <h2>Produtos</h2>
            {ListaDeProdutos}
          </div>
        )
      }
    }
    
    export default ListaDeProdutos










        
               
                