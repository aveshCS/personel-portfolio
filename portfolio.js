let hamburger = document.querySelector(".hamburger")
// console.log(hamburger)
document.querySelector(".cross").style.display="inline";
document.querySelector(".ham").style.display="none";
hamburger.addEventListener("click", ()=>{
    document.querySelector(".sidebar").classList.toggle("sidebarGo")
    if(document.querySelector(".sidebar").classList.contains("sidebarGo")){
        
        document.querySelector(".cross").style.display="none";
        setTimeout(()=>{

            document.querySelector(".ham").style.display="inline";
        },200)
    }else{
        document.querySelector(".ham").style.display="none";
        setTimeout(()=>{

            document.querySelector(".cross").style.display="inline";
        },200)

    }
})