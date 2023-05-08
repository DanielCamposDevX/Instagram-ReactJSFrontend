import Sugestion from "./Sugestion";

export default function Suggestions() {
    const data = [{
        id: 1,
        usuario: 'bad.vibes.memes',
        imagem: 'assets/img/bad.vibes.memes.svg'
    }, {
        id: 2,
        usuario: 'adorable_animals',
        imagem: 'assets/img/adorable_animals.svg'
    }, {
        id: 3,
        usuario: 'barked',
        imagem: 'assets/img/barked.svg'
    }, {
        id: 4,
        usuario: 'chibirdart',
        imagem: 'assets/img/chibirdart.svg'
    }]
    return (<div class="sugestoes">
        <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
        </div>


       
            {data.map((sugestion, index) => <Sugestion key={sugestion.id} usuario={sugestion.usuario} imagem={sugestion.imagem} />)}

    </div>)
}