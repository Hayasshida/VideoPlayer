const info = document.querySelector('.img-info');
const like = document.querySelector('.like');
const dislike = document.getElementById('dislike');
const fav = document.querySelector('.fav');
const more = document.querySelector('.more');
const barra = document.querySelector('.bar.fechar');
const desc = document.querySelector('.descricao');
const comp = document.querySelector('.comp');
const barra2 = document.querySelector('.bar.fecha');
const plus = document.querySelector('.plus');
const comment = document.querySelector('.exp-com');
const barra3 = document.querySelector('.bar.fecha2');
const form = document.querySelector('.form');
const text = document.querySelector('.campo');
const comentariosGeral = document.querySelector('.comentarios-abr');

console.log(text);
var imgLike = 1;
var imgDislike = 1;
var imgFav = 1;

info.addEventListener('click', descricao);

function descricao(){
    desc.classList.add('show');
    desc.classList.remove('hidden');
}

like.addEventListener('click', gostar);

function gostar(){
    if(imgLike == 1)
    {
        like.src = "Img/like-pres.png";
        imgLike = 2;
    }
    else
    {
        like.src = "Img/like.png";
        imgLike = 1;
    }
    if(imgLike == 2 && dislike.src.endsWith("Img/dislike-pres.png"))
    {
        like.scr = "Img/like-press.png";
        dislike.src = "Img/dislike.png"
        imgLike = 2;
        imgDislike = 1;
    }
}

dislike.addEventListener('click', desgostar);

function desgostar(){
    if(imgDislike == 1)
    {
        dislike.src = "Img/dislike-pres.png";
        imgDislike = 2;
    }
    else
    {
        dislike.src = "Img/dislike.png";
        imgDislike = 1;
    }
    if(imgDislike == 2 && like.src.endsWith("Img/like-pres.png"))
    {
        dislike.src = "Img/dislike-pres.png";
        like.src = "Img/like.png";
        imgLike = 1;
        imgDislike = 2;
    }
}

fav.addEventListener('click', favoritar);

function favoritar(){
    if(imgFav == 1)
    {
        fav.src = "Img/fav-pres.png";
        imgFav = 2;
    }
    else
    {
        fav.src = "Img/fav.png";
        imgFav = 1;
    }

}

more.addEventListener('click', mais);

function mais(){
    comp.classList.add('show');
    comp.classList.remove('hidden');
}

barra2.addEventListener('click', fechar2);

function fechar2(){
    comp.classList.remove('show');
    comp.classList.add('hidden')
}

barra.addEventListener('click', fechar);

function fechar(){
    desc.classList.remove('show');
    desc.classList.add('hidden');
}

plus.addEventListener('click', abrir);

function abrir(){
    comment.classList.remove('hidden');
    comment.classList.add('show')
}

barra3.addEventListener('click', fecharComment);

function fecharComment(){
    comment.classList.remove('show');
    comment.classList.add('hidden')
}

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    
        let comentario = document.createElement('div');
        comentario.classList.add('comentario');

        let profile = document.createElement('div');
        profile.classList.add('profile');

        let userComment = document.createElement('div');
        userComment.classList.add('user-comment2');

        let user = document.createElement('p');
        user.classList.add('user2');
        user.innerHTML = 'Aluno'

        let commentText = document.createElement('p');
        commentText.classList.add('comment-text2');
        commentText.innerHTML = `${text.value}`;
        comentariosGeral.appendChild(comentario);

        comentario.appendChild(profile);

        profile.appendChild(userComment);

        userComment.appendChild(user);

        user.appendChild(commentText);

        text.value = '';
});
