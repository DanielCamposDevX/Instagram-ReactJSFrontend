import Likebutton from "./Likebutton"
import Savebutton from "./Savebutton"
import React from 'react'


export default function Post(props) {
    let postimg = props.postimg;
return (<div class="post" data-test="post">
     
        <div class="topo">
            <div class="usuario">
                <img src={props.imagem} alt="meowed" />
                {props.usuario}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
        <Likebutton postimg={postimg}/>
    </div>)
}