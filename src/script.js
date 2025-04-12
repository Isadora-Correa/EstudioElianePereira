const courseModules = [
    {
        id: 1,
        title: "Boas-vindas aos Exercícios Vocais Matinais",
        description: "Comece o seu dia despertando sua voz de forma leve, saudável e divertida! Esses exercícios foram pensados para ativar sua musculatura vocal, melhorar a respiração e preparar você para falar ou cantar com mais liberdade e segurança. Vamos juntos nessa jornada sonora?",
        youtube_id: "Tp9qd8yu6fI",
        thumbnail: "https://img.youtube.com/vi/Tp9qd8yu6fI/hqdefault.jpg"
    },
    {
        id: 2,
        title: "Exercício: Vibração labial ou nasal",
        description: "Feche os lábios levemente e emita o som de 'mmm' ou 'nnn'. Comece num tom confortável e depois deslize para notas mais altas e baixas. Benefício: Aquece suavemente as pregas vocais sem forçar.",
        youtube_id: "nWOcXP4NLP8",
        thumbnail: "https://img.youtube.com/vi/nWOcXP4NLP8/hqdefault.jpg"
    },
    {
        id: 3,
        title: "Exercício: Faça o som de 'v' ou 'z'",
        description: "Emita som contínuo de 'vvvv' ou 'zzz' com pouca intensidade. Faça por cerca de 30 segundos. Benefício: Estimula a ressonância e ativa a musculatura sem esforço excessivo.",
        youtube_id: "8VYpvPQSq9U",
        thumbnail: "https://img.youtube.com/vi/8VYpvPQSq9U/hqdefault.jpg"
    },
    {
        id: 4,
        title: "Exercício: Sirene Vocal",
        description: "Com som de 'ng' (como em 'imagem'), deslize do tom mais grave ao mais agudo e volte, como uma sirene de ambulância. Benefício: Melhora a flexibilidade vocal e ativa toda a extensão da voz.",
        youtube_id: "9DwGAal3u_Y",
        thumbnail: "https://img.youtube.com/vi/9DwGAal3u_Y/hqdefault.jpg"
    },
    {
        id: 5,
        title: "Exercício: Vogais graves e vogais livres",
        description: "Solte um suspiro sonoro, como um 'ahhh' relaxado. Depois, faça vogais livres ('ok', 'éhh') em tons médios e baixos. Benefício: Relaxa a laringe e evita perdas desnecessárias.",
        youtube_id: "R0ywJjOG-Zc",
        thumbnail: "https://img.youtube.com/vi/R0ywJjOG-Zc/hqdefault.jpg"
    },
    {
        id: 6,
        title: "Exercício: Sons fricativos com 'F' e 'S'",
        description: "Solte um 'fff' ou 'ss ss ss' antes de iniciar qualquer frase cantada ou falada. Benefício: Ajuda a controlar o fluxo de ar e melhora a resistência vocal.",
        youtube_id: "rWjmAoIlSQo",
        thumbnail: "https://img.youtube.com/vi/rWjmAoIlSQo/hqdefault.jpg"
    },
    {
        id: 7,
        title: "Exercício: Sons trilhados com a língua",
        description: "Faça pequenos deslizes inquietos e emita um som contínuo como 'brrr'. Benefício: Reduz a tensão e melhora o controle da respiração.",
        youtube_id: "xDvbOWw0YUo",
        thumbnail: "https://img.youtube.com/vi/xDvbOWw0YUo/hqdefault.jpg"
    },
    {
        id: 8,
        title: "Exercício: Mastigação sonora",
        description: "Simule o movimento de mastigar e emita o som de 'm' de forma relaxada. Alterne entre tons médios e graves, mantendo a mandíbula solta. Benefício: Melhora a flexibilidade da articulação e a ressonância.",
        youtube_id: "F7HMkgalwPg",
        thumbnail: "https://img.youtube.com/vi/F7HMkgalwPg/hqdefault.jpg"
    }
];


// Carregar módulos do curso
function loadCourseModules() {
    const courseGrid = document.querySelector('.course-grid');
    courseGrid.innerHTML = courseModules.map(module => `
        <div class="course-card" onclick="openVideoModal('${module.youtube_id}', \`${module.title}\`, \`${module.description}\`)">
            <div class="course-image">
               <img src="src/img/${module.id}.jpg" alt="${module.title}">
                <div class="play-overlay">
                    <div class="play-button">
                        <i data-feather="play"></i>
                    </div>
                </div>
            </div>
            <div class="course-content">
                <h3>${module.id}. ${module.title}</h3>
                <p>${module.description}</p>
            </div>
        </div>
    `).join('');

    feather.replace();
}

// Modal de Vídeo
const modal = document.getElementById('video-modal');
const modalTitle = document.getElementById('modal-title');
const videoFrame = document.getElementById('video-frame');
const description = document.getElementById('description');

function openVideoModal(videoId, title, desc) {
    modal.classList.add('active');
    modalTitle.textContent = title;
    videoFrame.src = `https://www.youtube.com/embed/${videoId}`;
    description.textContent = desc;
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    modal.classList.remove('active');
    videoFrame.src = '';
    document.body.style.overflow = '';
}

// Event Listeners
document.querySelector('.close-button').addEventListener('click', closeVideoModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeVideoModal();
});

// Scroll suave para links âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Carregar módulos quando a página carregar
document.addEventListener('DOMContentLoaded', loadCourseModules);
