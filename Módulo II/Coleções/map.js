/*
Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

Crie uma função getAdmins que recebe um Map;
Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usu;arios que são administradores.
*/


//Função feita por mim, igual a da professora :)
function getAdmins(map){
    if(!map) return;
    let admins = [];
    for(const [user, role] of map){
        if (role === 'Admin'){
            admins.push(user);
        }
    }
    return `São administradores do sistema: 
    ${admins}`
}

const userMap = new Map([
    ['Caique', 'Admin'],
    ['Carol', 'Admin'],
    ['Xaxe', 'Reg-user'],
    ['Mimi', 'Reg-user'],
]);

const myAdmins = getAdmins(userMap);

console.log(myAdmins);
