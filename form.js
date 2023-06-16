const FORM = document.querySelector("#footerForm")

let succes

FORM.addEventListener("submit", function (event){
    event.preventDefault()
    Array.from(event.target).forEach(element => validateForm(element))
    if (succes === true) {
    FORM.innerHTML = ""
    makeThankYouMessage()
    } else return
})

function validateForm(element) {
    if (element.type === "submit" && succes != false) succes = true
    else if (element.type === "text" && !element.value) makeMassage(element, "Du skal skrive dit navn!")
    else if (element.type === "email" && !element.value) makeMassage(element, "Du skal skrive din email!")
    else if (element.type === "email"){
        if (!element.value.includes("@")) makeMassage(element, "Email skal indeholde @!")
        else if (element.value.split("@").length > 2) makeMassage(element, "For mange @!")
        else if (element.value.indexOf("@") === 0) makeMassage(element, "Der skal stå noget foran @!")
        else if (element.value.indexOf("@") === element.value.length -1) makeMassage(element, "Der skal stå noget efter @!")
        else makeMassage(element, "")
    } 
    else if (element.type === "textarea" && !element.value) makeMassage(element, "Hvad er din besked?")
    else if (element.value) {
        makeMassage(element, "") 
        succes = true
    } 
}

function makeMassage(element, massage) {
    const SUBMITFORM__MASSAGE = element.nextSibling.nextSibling
    SUBMITFORM__MASSAGE.innerHTML = massage
    succes = false
}

function makeThankYouMessage() {
    const H1 = document.createElement("h1")
    H1.innerHTML = "Tak for din besked"
    H1.classList.add("thankYouMessage")
    FORM.appendChild(H1)
}