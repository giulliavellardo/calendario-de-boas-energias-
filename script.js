
// Lista de frases do dia
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
  "Coragem não é ausência de medo, é seguir apesar dele.",
  "Seja a energia que você quer atrair.",
  "Mesmo as flores mais lindas precisam do tempo certo para florescer.",
  "Não se cobre tanto, você está aprendendo.",
  "A paz começa dentro de você.",
  "Permita-se ser um trabalho em progresso.",
  "Tudo que é seu encontrará o caminho até você.",
  "A vida é feita de recomeços e pequenas alegrias.",
  "Respire fundo — nada floresce o tempo todo.",
  "Você é o lar da sua própria calma.",
  "Gratidão abre portas que o medo fecha.",
  "Não compare seu capítulo 1 com o capítulo 20 de alguém.",
  "O silêncio também é uma resposta poderosa.",
  "Você não precisa ser perfeita, apenas verdadeira.",
  "Aprenda a descansar, não a desistir.",
  "Até as ondas mais fortes voltam a ser tranquilas.",
  "Ame o processo, não só o resultado.",
  "Não há pressa para florescer, cada estação tem seu tempo.",
  "Siga leve, mas siga firme.",
  "Tudo o que você cultiva com amor floresce.",
  "Você é feita de coragem e ternura.",
  "Não apresse o que precisa de calma.",
  "Há beleza em ser quem você é agora.",
  "O universo conspira a favor de quem confia.",
  "Ser gentil consigo mesma é o primeiro passo para a paz.",
  "O agora é o lugar onde a vida realmente acontece."
];

// Pega a data atual
const data = new Date();
const dia = data.getDate();

// Formata a data no estilo “4 de novembro de 2025”
const opcoes = { day: "numeric", month: "long", year: "numeric" };
const dataFormatada = data.toLocaleDateString("pt-BR", opcoes);

// Exibe a data na página
document.getElementById("data").textContent = dataFormatada;

// Escolhe a frase com base no dia do mês
const indice = dia % frases.length;
document.getElementById("frase").textContent = frases[indice];

// --- Botão de compartilhar no WhatsApp ---
document.getElementById("compartilhar").addEventListener("click", function() {
  const frase = document.getElementById("frase").textContent;
  const data = document.getElementById("data").textContent;

  const mensagem = `🌻 Frase do Dia (${data}): ${frase}\n\nConfira mais em: https://giulliavellardo.github.io/calendario-de-boas-energias-/`;
  const link = `https://wa.me/?text=${encodeURIComponent(mensagem)}`;
  
  window.open(link, "_blank");
});
