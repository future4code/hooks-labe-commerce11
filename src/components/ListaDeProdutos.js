import React from 'react'
import Styled from 'styled-components'
import camiseta1 from '../img/camiseta1.png'
import camiseta2 from '../img/camiseta2.png'
import camiseta3 from '../img/camiseta3.png'
import camiseta4 from '../img/camiseta4.png'

const DivStyle = Styled.div`
display:inline-block;

margin-left:500px;
margin-bottom:1000px;
`
const ContainerLoja = Styled.div`
  display:flex;
  flex-wrap: wrap;
  padding-bottom: 30px;
 
`

const Cards = Styled.div`
  display: flex;
    flex-direction: column;
    box-sizing: border-box;
    box-shadow: 2px 2px 2px 2px #DCDCDC;
    width: 200px;
    justify-content: center;
    padding: 10px;
    margin: 10px 20px;

    :hover{
     
     
      background-color: aliceblue;
    }

    .Carrinho{

    margin: auto;
    height: 30px;
}
  `
const Conteudo = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

  img{
    margin: auto;
    margin-top: 20px;
    width: 70%;
  }
  
  .nome{
    margin: auto;
    font-size: 20px
  }

  .preco{
    margin: auto;
    font-size: 25px;

  }
`
export class ListaDeProdutos extends React.Component {
  state = {
    listaDeProdutos: [
      { nome: 'Camiseta 1', valor: 'R$50,00', img: camiseta1 },
      { nome: 'Camiseta 2', valor: 'R$80,00', img: camiseta2 },
      { nome: 'Camiseta 3', valor: 'R$30,00', img: camiseta3 },
      { nome: 'Camiseta 4', valor: 'R$100,00', img: camiseta4 }
    ]
  }

  render() {
    const ListaDeProdutos = this.state.listaDeProdutos.map((produto, chave) => {
      return (
        <Cards key={chave}>
          <Conteudo>
            <div className="nome">{produto.nome}</div>
            <div className="preco">{produto.valor}</div>
            <img src={produto.img} alt={produto.nome} />
          </Conteudo>
          <button className="Carrinho">Colocar no Carrinho</button>
        </Cards>
      )
    })
    return (
      <div>
        <h1>Produtos</h1>
        <ContainerLoja>{ListaDeProdutos}</ContainerLoja>
      </div>
    )
  }
}

export default ListaDeProdutos
