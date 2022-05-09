import React from "react";
import Styled from 'styled-components'

const DivStyle = Styled.div `
display:inline-block;

margin-left:500px;
margin-bottom:1000px;
`

export class ListaDeProdutos extends React.Component {

    state={
        listaDeProdutos: [
            <p>Produto 1</p>,
            <p>Produto 2</p>,
            <p>Produto 3</p>,
            <p>Produto 4</p>
        ]
    }
    render(){
        return(
            <div>
                <DivStyle>
                <h1>Produtos</h1>
                
                <div>{this.state.listaDeProdutos}</div>
                </DivStyle>
            </div>
        )
    }
}