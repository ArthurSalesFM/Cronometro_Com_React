import React, {Component} from "react";
import './style.css';

class App extends Component{

    constructor(props){

        super(props);

        this.state = {
            numero: 0,
            botao: 'Iniciar'
        }
        this.timer = null;
        this.iniciar = this.iniciar.bind(this);
        this.zerar = this.zerar.bind(this);
    }

    iniciar(){

        let btn = this.state;

        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer =  null;
            btn.botao = "Continuar";
        }
        else{
            this.timer = setInterval(() => {
                let estado = this.state;
                estado.numero += 0.1;
                this.setState(estado);                
            }, 100);
            btn.botao = "Pausar"
        }
        this.setState(btn);        
    }

    zerar(){
        let estado = this.state;

        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer =  null;            
        }

        estado.numero = 0.0;
        estado.botao = "Iniciar";
        this.setState(estado);
    }

    render(){

        return(

            <div className="container">

                <h2 className="titulo">Cronômetro</h2>

                <img src={require('./assets/cronometro.png')} className="img"></img>
                <br/>
                
                <a className="timer">{this.state.numero.toFixed(1)}</a>
                <br/>

                <div className="areaBtn">

                    <a className="botao" onClick={this.iniciar}>{this.state.botao}</a>
                    <a className="botao" onClick={this.zerar}>Zerar</a>

                </div>

            </div>

        );

    }

}

export default App;