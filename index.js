// Doc Element
const button = document.querySelector(".random-bt");
const text_box = document.querySelector(".fact");


// Fact fetch function
const getCatFact = async () =>{
    try{
        const response = await fetch("https://catfact.ninja/fact");
        const data = await response.json();
        text_box.textContent = data.fact;
    }
    catch(e) {
        text_box.textContent = "API ERROR 😞"
        console.log("ERROR!",e)
    }
}
// Add event listener
button.addEventListener("click",getCatFact);

// Intial
getCatFact()