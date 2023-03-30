const button = document.querySelector("#btn");
const par = document.querySelector("#par");
const quotes =[
"« Las cosas buenas llegan a los que saben esperar. »",
"«  El camino al éxito es la actitud. »",
"« Dale a cada día la oportunidad de ser el mejor día de tu vida. »",
"«Si el plan no funciona, cambia el plan, pero no cambies la meta.»",
"« Si te cansas, aprender a descansar, no a renunciar. »",
"«  El éxito es la suma de pequeños esfuerzos, repetidos día tras día.»",
"« La gente positiva es la que se cae, se levanta, se sacude, se cura los raspones, le sonríe a la vida y dice: ¡ahí voy de nuevo!.»",
"« La única lucha que se pierde es la que se abandona. »",
"«Enfócate en lo que quieras y verás llegar las oportunidades.»",
"« La confianza en sí mismo es el primer secreto del éxito. »",
"« Lo importante no es lo que se promete, sino lo que se cumple. »",
]
button.addEventListener("click",  function() {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    par.style.display="block";
  par.textContent=randomQuote;
   
})