import React from 'react'

export default function Button(props){
    const[ligado,setLigado] = React.useState(false)
    function handleclick(){
        setLigado(!ligado)
    }
    if(ligado){return(<ion-icon {...props} name="bookmark" onClick={() => handleclick()} ></ion-icon>)}
    else{
    return (
        <ion-icon {...props} name="bookmark-outline" onClick={() => handleclick()} data-test="save-post"></ion-icon>
    )}
}