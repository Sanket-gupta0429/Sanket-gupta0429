var selectedRow = null;
function showAlert(message, className){
    const div=document.createElement("div");
    div.className =`alert alert-${className}`;
    
    
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div,main);

    setTimeout(() => document.querySelector(".alert").remove() ,3000);
};
//clear all
function clearField(){
document.querySelector("#ProductCode").value= "";
document.querySelector("#ProductName").value= "";
document.querySelector("#ProductType").value= "";
}

//add data
document.querySelector("#toy-form").addEventListener("submit".(e) =>{
    
    
}


//Delete
document.querySelector("#code").addEventListener("click",(e) =>{
    target = e.target;
    if(target.className.contains("delete")){
        target.parantElement.parantElement.remove()
        showAlert("Product Deleted", "Danger");
    }
    
});