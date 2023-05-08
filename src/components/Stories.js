import Story from "./Story"
export default function Stories() {
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
        usuario: '9gag',
        imagem: 'assets/img/9gag.svg'
    },
    {
        id: 5,
        usuario: 'chibirdart',
        imagem: 'assets/img/chibirdart.svg'
    },
    {
        id: 6,
        usuario: 'respondeai',
        imagem: 'assets/img/respondeai.svg'
    },
    {
        id: 7,
        usuario: 'razoes',
        imagem: 'assets/img/razoesparaacreditar.svg'
    },
    {
        id: 8,
        usuario: 'smallanimals',
        imagem: 'assets/img/smallcutecats.svg'
    }]
    return (
        <div class="stories">
            {data.map((story, index) => <Story key={story.id} usuario={story.usuario} imagem={story.imagem} />)}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}