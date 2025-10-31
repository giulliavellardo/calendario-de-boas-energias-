const frases = [
    "O sucesso é a soma de pequenos esforços repetidos todos os dias.",
    "A persistência realiza o impossível.",
    "Acredite em você e tudo será possível.",
    "Cada dia é uma nova oportunidade para recomeçar.",
    "Pequenos passos também levam a grandes conquistas.",
    "O segredo da felicidade é apreciar cada momento.",
    "Nunca é tarde para ser quem você quer ser.",
    "Transforme seus sonhos em metas e suas metas em realidade.",
    "A gratidão transforma o que temos em suficiente.",
    "Coragem não é ausência de medo, é seguir apesar dele."
];

const fraseElemento = document.getElementById("frase");
const data = new Date();
const dia = data.getDate();
const indice = dia % frases.length;
fraseElemento.textContent = frases[indice];
