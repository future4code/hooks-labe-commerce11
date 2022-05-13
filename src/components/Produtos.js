import React from 'react'
import styled from 'styled-components'

const ContainerLoja = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 30px;
`

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: 2px 2px 2px 2px #dcdcdc;
  width: 200px;
  justify-content: center;
  padding: 10px;
  margin: 10px 20px;

  :hover {
    background-color: aliceblue;
  }
  .carrinho {
    margin: auto;
    height: 30px;
  }
`
const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    margin: auto;
    margin-top: 20px;
    width: 70%;
  }

  .nome {
    margin: auto;
    font-size: 20px;
  }

  .preco {
    margin: auto;
    font-size: 25px;
  }
`
export class Produtos extends React.Component {
  render() {
    return (
      <ContainerLoja>
        {this.props.produtos.map(produto => {
          return (
            <Cards key={produto.id}>
              <Conteudo>
                <div className="nome">{produto.nome}</div>
                <div className="preco">{produto.valor}</div>
                <img src={produto.img} alt={produto.nome} />
              </Conteudo>
              <button
                className="carrinho"
                onClick={() => this.props.addProduto(produto.id)}
              >
                Comprar
              </button>
            </Cards>
          )
        })}
      </ContainerLoja>
    )
  }
}

export default Produtos
