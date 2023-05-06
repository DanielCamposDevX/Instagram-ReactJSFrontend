import Button from "./Button"
import React from 'react'


export default function Post(props) {
    
    const[valor,setValor] = React.useState(0)
    function atualizacurtidas(valoro){
        setValor(valoro)
    }
    return (<div class="post">
        <div class="topo">
            <div class="usuario">
                <img src= {props.imagem} alt="meowed" />
                {props.usuario}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>

        <div class="conteudo">
            <img src="assets/img/gato-telefone.svg" alt="gato-telefone" />
        </div>

        <div class="fundo">
            <div class="acoes">
                <div>
                    <Button atualizacurtidas = {atualizacurtidas}/>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src="assets/img/respondeai.svg" alt="respondeai" />
                <div class="texto">
                    Curtido por <strong>respondeai</strong> e <strong>outras {valor} pessoas</strong>
                </div>
            </div>
        </div>
    </div>)
}