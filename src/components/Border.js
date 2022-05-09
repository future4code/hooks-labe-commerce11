import React from "react";
import Styled from 'styled-components'

const Div = Styled.div`
display:grid;
gap:5px;
grid-template-columns:.5fr 1fr .5fr;
`
const Section1 = Styled.section`
border: 1px solid black;
font-weight:bold;
font-size:20px;
height:200px;
padding:20px;
margin:15px;
`
const Section3 = Styled.section`
border: 1px solid black;
font-weight:bold;
font-size:20px;
height:200px;
padding:20px;
margin:15px;
`

const P = Styled.p`

`



const Border = () => {
    return (
        <div>
            <Div className="Container">
                <Section1> Filtros
                    <div>
                        <p>Valor Minimo</p>
                        <input type="Valor-Min" />
                        <input type="Valor-Min" />
                        <input type="Valor-Min" />
                    </div>

                </Section1>
                <section> card 2 </section>
                <Section3> card 3 </Section3>
            </Div>
        </div>
    )
}
export default Border