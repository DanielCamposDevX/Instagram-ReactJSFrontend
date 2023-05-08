import React from 'react'
import Savebutton from "./Savebutton"
export default function Button(props) {
    const [valor, setValor] = React.useState(10)
    function atualizacurtidas(valoro) {
        setValor(valoro)
    }
    const [ligado, setLigado] = React.useState(false)
    function handleclick(valore) {
        setLigado(!ligado)
        atualizacurtidas(valore)
    }
    if (ligado) {
        return (
            <div>
                <div class="conteudo">
                    <img src={props.postimg} />
                </div>
                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon {...props} name="heart" class="vermelho" onClick={() => handleclick(10)} data-test="like-post"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <Savebutton />
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src="assets/img/respondeai.svg" alt="respondeai" />
                        <div class="texto" >
                            Curtido por <strong>Fulano</strong> e <h6>outras {valor} pessoas</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <div class="conteudo">
                    <img onDoubleClick={() => handleclick(11)} src={props.postimg} data-test="post-image"/>
                </div>
                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon {...props} name="heart-outline" onClick={() => handleclick(11)} data-test="like-post"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <Savebutton />
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src="assets/img/respondeai.svg" alt="respondeai" />
                        <div class="texto">
                            Curtido por <strong>Fulano</strong> e <h6 data-test="likes-number">outras {valor} pessoas</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
