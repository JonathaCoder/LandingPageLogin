
const buttonColor = document.querySelector(".btn");
const ValueInput = document.querySelector("#name");
const ValueInputEmail = document.querySelector("#email");
const ItemsText = document.querySelector('.items')
const body = document.querySelector('body')
const Alert = document.querySelector('div')
const DarkMode = document.getElementById('LuaDark')


DarkMode.addEventListener("click",(e)=>{
   if(e){
      body.style.background = "white"
   }
   
})


buttonColor.addEventListener("click", (e) => {
  e.preventDefault();
  const nameValue = ValueInput.value;
  const emailValue = ValueInputEmail.value;
  const textInput = ItemsText

  if(nameValue === '' || emailValue === ''){
   body.style.background = "#e5462a"
    ValueInput.style.border = "2px solid red"
    ValueInputEmail.style.border = "2px solid red"
    ValueInput.style.transition = ".2s"
    ValueInputEmail.style.transition = ".3s"
    Alert.innerHTML = "<p>Erro Verifique os Campos!!</p>"
  
  }else if(nameValue.length > 0 || emailValue.length > 0){
   ValueInput.style.border = "2px solid green"
   ValueInputEmail.style.border = "2px solid green"
   body.style.background = "#3d7b30"
   Alert.innerHTML = "<h4>Cadastrado com Sucesso!!</h4>"
   ItemsText.style.opacity = '100%'
  }
  textInput.firstElementChild.textContent = nameValue
  textInput.children[1].textContent = emailValue
 
  

});
