import React, { Component } from "react";
import './styles.css';
import tradicao from '../../tradicao.svg'

export default class Main extends Component{
    render() {
        
        return(
            <main >
                {/*<section id="banner">
                    <article id="frames">
                        <div id="frame1"></div>
                        <div id="frame2"></div>
                        <div id="frame3"></div>
                        <div id="frame4"></div>
                    </article>
                </section>*/}
                <section id="sobre">
                    
                    <article >
                    <h2>Agripec</h2>
                        <p>Agripec o seu supermercado agropecuário, aonde irá encontrar diversos produtos de agropecuária à aquarismo.</p>
                        <img id="tradicao" src={tradicao}></img>
                    </article>

                    
                
                </section>
                
                <section id="produtos">
                    <article>
                    <h2>Produtos</h2>
                    <p className="destaque">- agricultura - pecuária - rações - 
                    acessórios pet - aquarismo - jardinagem - 
                    Materiais de piscina - medicamentos veterinários-</p>
                    </article>
                </section>
                
                <section id="servicos">
                    <h2>Serviços</h2>
                </section>
                
                <section id="contato">
                    <h2>Contato</h2>
                </section>
            </main>
        )
    }
}