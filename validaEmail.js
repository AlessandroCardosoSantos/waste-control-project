function validateFields(){
//pegar o valor dentro do campo email
//verificar se o email é valido, caso for valido, habilita botão recuperar senha
// se falso, desabilitar botão recuperar senha
const email = document.getElementById("email").value;
if (!email){
    document.getElementById('recover-password-button').desabled =true;

} else if (validateEmail(email)){
    document.getElementById('recover-password-button').desabled = false;

}else{
    document.getElementById('recover-password-button').desabled =true;

}
 

}