import './App.css';
import React from 'react';
import styled from 'styled-components';
import Produtos from './components/Produtos';
import Carrinho  from './components/Carrinho';
import camiseta1 from './img/camiseta1.png'
import camiseta2 from './img/camiseta2.png'
import camiseta3 from './img/camiseta3.png'
import camiseta4 from './img/camiseta4.png'

const ContainerPage= styled.div`
display:grid;
gap:5px;
grid-template-columns:.5fr 1fr .5fr;
`

const Container= styled.div`
display:grid;
gap:5px;
grid-template-columns:.5fr 1fr .5fr;
 `

const Section1 = styled.section`
border: 1px solid black;
font-weight:bold;
font-size:20px;
height:200px;
padding:20px;
margin:15px;
`


 const produtos= [
  { id: 1, nome: 'Camiseta 1', valor: 'R$50,00', img: camiseta1 },
  { id: 2, nome: 'Camiseta 2', valor: 'R$80,00', img: camiseta2 },
  { id: 3, nome: 'Camiseta 3', valor: 'R$30,00', img: camiseta3 },
  { id: 4, nome: 'Camiseta 4', valor: 'R$100,00', img: camiseta4 }
]

class App extends React.Component {
  state = {
    carrinho:[]
  }

addProduto = (prodId) =>{
  const produtoNoCar = this.state.carrinho.find((produto)=> prodId===produto.id)
  if (produtoNoCar){
    const novosProdutosNoCar = this.state.carrinho.map((produto)=>{
      if (prodId===produto.id){
      
        return{
          ...produto,
          qtde:produto.qtde + 1
      
      }
    }
    return produto
    })
    this.setState({carrinho:novosProdutosNoCar})
  } else{
    const addProdutoNoCar = produtos.find((produto)=> prodId===produto.id)
    const novosProdutosNoCar=[
      ...this.state.carrinho,
      {...addProdutoNoCar, qtde:1}
    ]
    this.setState({carrinho:novosProdutosNoCar})
  }
} 

removeProduto =(prodId)=>{
const updateCar = this.state.carrinho.map((produto)=>{
  if(produto.id===prodId){
    return{...produto, qtde: produto.qtde -1}
    }
    return produto
  })
  .filter((produto)=>produto.qtde > 0)
  this.setState({carrinho:updateCar})
}

render(){
  return(
    <ContainerPage>

    
      <Section1>
      {' '}
          Filtros
          <div>
            <p>Valor Minimo</p>
            <input type="Valor-Min" />
            <input type="Valor-Min" />
            <input type="Valor-Min" />
          </div>
      </Section1>
      


    <div>
      <h2>Produtos</h2>
      <Produtos produtos={produtos} addProduto={this.addProduto}/>
  

<Carrinho carrinho={this.state.carrinho} removeProduto={this.removeProduto} addProduto={this.addProduto} />
      
      
    </div>

    
 
 
      
    
    </ContainerPage>
  )
}
}

  

export default App;
