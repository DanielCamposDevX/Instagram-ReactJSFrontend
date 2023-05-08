import Post from "./Post"
export default function Posts() {

    const data = [{
        id: 1,
        usuario: 'Barked',
        imagem: 'assets/img/barked.svg',
        postimg: 'assets/img/dog.svg'
    }, {
        id: 2,
        usuario: 'meowed',
        imagem: 'assets/img/meowed.svg',
        postimg: 'assets/img/gato-telefone.svg'
    }, {
        id: 3,
        usuario: 'filomoderna',
        imagem: 'assets/img/filomoderna.svg',
        postimg: 'assets/img/gato-telefone.svg'
    }, {
        id: 4,
        usuario: 'Daniel',
        imagem: 'assets/img/gato-telefone.svg',
        postimg: 'assets/img/gato-telefone.svg'
    }]
    return (
        <div class="posts">
            {data.map((post,index) => <Post key={post.id} usuario = {post.usuario} imagem = {post.imagem} postimg={post.postimg}/>)}
            
        </div>)
}