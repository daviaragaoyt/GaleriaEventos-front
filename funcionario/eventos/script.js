const catalogo = document.getElementById("containerCatalogo"); //Variavel que busca os elementos do "containerCatalogo"

const produtos = [
    //Array com objetos dentro com suas propriedades
    {
        idProduto: 0,
        nome: "Secretaria da Mulher",
        descricao:"A Secretaria da Mulher do DF abriu 300 vagas no projeto Aviva Brasília, oferecendo capacitação gratuita em áreas como copeira e assistente administrativo para mulheres em vulnerabilidade. Os cursos, com 76 horas de duração, incluem treinamentos em habilidades profissionais e começam em 25 de novembro.",
        imgUrl: "../imgs/Ministerio.jpeg",
        Disponivel:50 ,
    },
    {
        idProduto: 1,
        nome: "Teia DF 2024-Celebrando a Cultura Viva!",
        descricao:"Neste sábado (09/11), das 9h às 18h, participe do 2º Encontro de Pontos de Cultura no Espaço Voar Teatro de Bonecos, no Gama! Oficinas incríveis de Hip Hop com DJ Raffa e ilustrações com Jô Oliveira<br/><strong>📍 Local: SMA Conjunto K, Lote 05 – PRÓ DF – Gama</strong><br/><strong>📱 Mais informações: @meninodeceilandia</strong>",
        imgUrl: "../imgs/Teia.jpeg",
        Disponivel:50 ,
    },
    {
        idProduto: 2,
        nome: "",
        descricao:"",
        imgUrl: "../imgs/Literatura.jpeg",
        Disponivel:50 ,
    },
   
   
];

produtos.map((item) => {
    //Inserindo Html no codigo pelo Js, falando que sempre que tiver um elemento no catalago a div sera criada, e passando o item
    catalogo.innerHTML += `<div class="event-item">
                <img class="img" src="${item.imgUrl}"/>
                <h3>${item.nome}</h3>
                <p>${item.descricao}</p>
                <button onclick="editarEvento(1)">Editar</button>
                <button onclick="excluirEvento(1)">Excluir</button>
            </div>`;
});

// function adicionarCarrinho(id, catalogo) {
//     //Função para adicionar os itens e seus elementos para a proxima page(carrinho)
//     let carrinhoNovo = []; //Array vazio

//     const carrinhoAtual = JSON.parse(
//         localStorage.getItem("carrinhoMelosConfeitaria") //Quarda as informações do objeto no Coockie
//     );

//     if (carrinhoAtual != null) {
//         //Se o carrinho atual tiver com itens, permanecerá com os itens
//         carrinhoNovo = carrinhoAtual;

//         if (catalogo == "catalago1") {
//             //Verifica se é item do catalago 1
//             carrinhoNovo.push(produtos[id]);
//         }
//         else {
//             //Se não 2
//             carrinhoNovo.push(outrosProdutos[id]);
//         }
//     } else {
//         //Se tiver vazio, receberá os novos itens
//         if (catalogo == "catalago1") {
//             carrinhoNovo.push(produtos[id]);
//         } else {
//             carrinhoNovo.push(produtos[id]);
//         }
//     }

//     localStorage.setItem(
//         //Quarda os itens do novo carrinho no Cookie
//         "carrinhoMelosConfeitaria",
//         JSON.stringify(carrinhoNovo)
//     );
// }

// const catalogo2 = document.getElementById("containerCatalogo2"); //A mesma coisa para o catalogo2

// const outrosProdutos = [
//     {
//         idProduto: 0,
//         nome: "Brigadeiro de Café",
//         descricao: "24,99",
//         imgUrl: "../imgs/cafe.jpg",
//         quantidade: 1,
//     },
//     {
//         idProduto: 1,
//         nome: "Brownie com sorvete",
//         descricao: "32,51",
//         imgUrl: "../imgs/browniesorvete.jpg",
//         quantidade: 1,
//     },
//     {
//         idProduto: 2,
//         nome: "Brigadeiro de Paçoca",
//         descricao: "24,99",
//         imgUrl: "../imgs/paçoca.jpg",
//         quantidade: 1,
//     },
// ];

// outrosProdutos.map((item) => {
//     catalogo2.innerHTML += `<div class="box">
//     <div class="image">
//         <img class="img" src=${item.imgUrl} alt />
//     </div>
//     <div class="content">
//         <h3>${item.nome}</h3 >
//         <div class="stars">
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star-half-alt"></i>
//         </div>
//         <div class="price">${item.descricao}</div>
//         <button id="candy12" type="submit" class="btn">
//             <a href="../cart.html" onclick='adicionarCarrinho(${item.idProduto}, "catalago2")'>Adicionar ao carrinho</a>
//         </button>
//     </div >
// </div > `;
// });