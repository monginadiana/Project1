const collapseToggle = document.querySelector(".collapse-toggle")
const navItems = document.querySelector(".nav-items")
const navLink = document.querySelectorAll(".nav-link")
collapseToggle.addEventListener("click",()=>{
    collapseToggle.classList.toggle("active")
    navItems.classList.toggle("show")
})

navLink.forEach(n=>{
    n.addEventListener("click", ()=>{
        collapseToggle.classList.remove("active")
        navItems.classList.remove("show")
    })
})
