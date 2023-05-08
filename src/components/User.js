import React from "react";
export default function User() {
    const [nome, setNome] = React.useState('catanacomics');
    const [imagem, setImagem] = React.useState('assets/img/catanacomics.svg');

    function handleclick() {
        let troca = prompt('nome aqui');
        if (!troca) {
        }
        else {
            setNome(troca);
        }
    }
    function handleclickimg() {
        let troca = prompt('imagem aqui');
        if (!troca) {
        }
        else {
            setImagem(troca);
        }
    }
    return (
        <div class="usuario">
            <img onClick={() => handleclickimg()} src={imagem}alt="imagem de perfil" data-test="profile-image" />
            <div class="texto" data-test="name">
                <span>
                    <strong>{nome}</strong>
                    <ion-icon onClick={() => handleclick()} name="pencil" data-test="edit-name"></ion-icon>
                </span>
            </div>
        </div>)
}