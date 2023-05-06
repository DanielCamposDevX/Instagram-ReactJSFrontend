import Post from "./Post"
export default function Posts() {

    const data = [{
        id: 1,
        usuario: 'Daniel',
        imagem: 'assets/img/gato-telefone.svg'
    }, {
        id: 2,
        usuario: 'Daniel',
        imagem: 'assets/img/gato-telefone.svg'
    }, {
        id: 3,
        usuario: 'Daniel',
        imagem: 'assets/img/gato-telefone.svg'
    }, {
        id: 4,
        usuario: 'Daniel',
        imagem: 'assets/img/gato-telefone.svg'
    }]
    return (
        <div class="posts">
            {data.map((post,index) => <Post key={post.id} usuario = {post.usuario} imagem = {post.imagem} />)}
            
        </div>)
}