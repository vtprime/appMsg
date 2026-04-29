let frases=["Nunca foi sorte sempre foi Deus",
"acredite em vocẽ mesmo e o universo vai conspirar a seu avor",
"não espere o momento perfeito. Crie o moment perfeito e transforme seus sonhos em realidade"];

function geradorMensagem(){
let indiceGerado= Math.floor(Math.random()*(frases.length));
let fraseGerada= frases[indiceGerado];
document.querySelector("#saída").textContent=fraseGerada;




}