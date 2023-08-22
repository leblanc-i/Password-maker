// Creation de nos données variables
const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "&é\"'(§è!ç)-$^ù`,;:";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");

function generatepassword() {
    let data = [];
    let password = "";

// Enregistrer les données dans un meme tableau
    if (lowercase.checked) data.push(...dataLowercase);
    if (uppercase.checked) data.push(...dataUppercase);
    if (numbers.checked) data.push(...dataNumbers);
    if (symbols.checked) data.push(...dataSymbols);

// Afficher une alerte quand rien n'est sélectionner
    if(data.length === 0) {
        alert("Veuillez sélectionner des critères");
        return;
    }
// Pour que la longueur du mot de pass correspond à la valeur du range on fait 
    for(i = 0; i < rangeValue.value; i++) {
        password += (data[Math.floor(Math.random() * data.length)]);
    }
// Pour afficher le code generer 
    passwordOutput.value = password;
}

generateButton.addEventListener("click", generatepassword);