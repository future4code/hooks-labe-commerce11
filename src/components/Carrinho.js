import React from "react";
import styled from "styled-components";
import {Loja} from "./Produtos"

const ContainerCarrinho = styled.div`
display:grid;
gap:5px;
grid-template-columns:.5fr 1fr .5fr;
border: 1px solid black;
font-weight:bold;
font-size:20px;
height:200px;
padding:20px;
margin:15px;

.prodCard {
  border: 1px solid black;
  margin: 10px;
  color: purple;
  width: 200px;
}

.btn {
  width: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.btn-main {
  display: flex;
  flex-direction: row;
  width: 100%;
}
`;


class Carrinho extends React.Component {
  getTotal = () => {
    
    const total = this.props.carrinho.reduce(
      (acc, curr) => acc + curr.preco * curr.quantidade,
      0
    );
    return total;
  };

  

  render() {
    return (
      <ContainerCarrinho>
        <h2>Carrinho:</h2>
        {this.props.carrinho.map((produto) => {
          return (
            <div className="prodCar" key={produto.id}>
              <div>{produto.nome}</div>
              <div>{produto.valor}</div>

              <div className="btn-main">
                <button
                  className="btn"
                  onClick={() => this.props.removeProduto(produto.id)}
                >
                  -
                </button>

                <div>{produto.qtde} x </div>

                <button
                  className="btn"
                  onClick={() => this.props.addProduto(produto.id)}
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
        <div>Total: R$ </div>
      </ContainerCarrinho>
    );
  }
}

export default Carrinho;