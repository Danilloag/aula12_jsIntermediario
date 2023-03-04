let resultado = document.querySelector('#resultado');

const listaUsuarios = [
    {
        id: 1,
        nome: "Thiago Pereira",
        sexo: "Masculino",
        idade: 20,
        email: "thiagopereira@termail.com"
    },
    {
        id: 2,
        nome: "Thais Lins",
        sexo: "Feminino",
        idade: 19,
        email: "thaislins@termail.com"
    },
    {
        id: 3,
        nome: "Mariana Ferreira",
        sexo: "Feminino",
        idade: 25,
        email: "marianaferreira@termail.com"
    },
    {
        id: 4,
        nome: "Pedro Ivo Silva",
        sexo: "Feminino",
        idade: 28,
        email: "pedroivosilva@termail.com"
    }
];

const listarUsuario = (usuario) => {
    resultado.innerHTML += `
    <tr>
        <td>${usuario.id}</td>
        <td>${usuario.nome}</td>
        <td>${usuario.sexo}</td>
        <td>${usuario.idade}</td>
        <td>${usuario.email}</td>
    </tr>`}

addEventListener("load",listaUsuarios.forEach(listarUsuario))