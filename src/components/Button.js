
import React from 'react'

export default function Button(props){
    const[ligado,setLigado] = React.useState(false)
    function handleclick(){
        setLigado(!ligado)
        props.atualizacurtidas(1)
    }
    if(ligado){return(<ion-icon {...props} name="heart" onClick={() => handleclick()} ></ion-icon>)}
    else{
    return (
        <ion-icon {...props} name="heart-outline" onClick={() => handleclick()}></ion-icon>
    )}
}
