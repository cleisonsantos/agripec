import React, { Component } from 'react';
import './styles.css';
import logo from '../../logo.svg';


export default class Header extends Component{
    constructor(props){
        super(props);
        this.state = {left: '-75%'};
        
    }
    activeMobileMenu(value){
        this.state.left = value;
    }
    
    render(){
        return(
    <header>
        <div id="minimenu" onClick={this.activeMobileMenu('0%')}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div id="menumobile" >
            <nav>
                <ul>
                    {
                    //<li>
                    //    <button id="fechar" onClick={this.activeMobileMenu('-75%')}>FECHAR</button>
                    //</li>
                    }
                    <li>
                        <a href="">Sobre</a>
                    </li>
                    <li>
                        <a href="">Produtos</a>
                    </li>
                    <li>
                        <a href="">Serviços</a>
                    </li>
                    <li>
                        <a href="">Contatos</a>
                    </li>
                </ul>
            </nav>
        </div>
        <img src={logo}></img>
        <div id="menu">
        <nav >
            <ul>
                <li>
                    <a href="">Sobre</a>
                </li>
                <li>
                    <a href="">Produtos</a>
                </li>
                <li>
                    <a href="">Serviços</a>
                </li>
                <li>
                    <a href="">Contato</a>
                </li>
            </ul>
        </nav>
        </div>
       {
           // <p style={{float: "right"}}>{this.state.left}</p>
       }
    </header>
    )
 };
}
