let ul = document.querySelector("ul");
ul.addEventListener("click", (e)=> {
 if (e.target.tagName === "LI"){
    console.log(e.target.tagName)
     e.target.tagName.classList.toggle ("current")
 }
})