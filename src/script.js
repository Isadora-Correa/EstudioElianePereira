const courseModules = [
    {
        id: 1,
        title: "Boas-vindas aos Exercícios Vocais Matinais",
        description: "Comece o seu dia despertando sua voz de forma leve, saudável e divertida! Esses exercícios foram pensados para ativar sua musculatura vocal, melhorar a respiração e preparar você para falar ou cantar com mais liberdade e segurança. Vamos juntos nessa jornada sonora?",
        youtube_id: "MYEBwSBSoyw",
        thumbnail: "https://youtu.be/MYEBwSBSoyw"
    },
    {
        id: 2,
        title: "Exercício: Vibração labial ou nasal",
        description: "Feche os lábios levemente e emita o som de 'mmm' ou 'nnn'. Comece num tom confortável e depois deslize para notas mais altas e baixas. Benefício: Aquece suavemente as pregas vocais sem forçar.",
        youtube_id: "zB9hUBelQdA",
        thumbnail: "https://youtu.be/zB9hUBelQdA"
    },
    {
        id: 3,
        title: "Exercício: Faça o som de 'v' ou 'z'",
        description: "Emita som contínuo de 'vvvv' ou 'zzz' com pouca intensidade. Faça por cerca de 30 segundos. Benefício: Estimula a ressonância e ativa a musculatura sem esforço excessivo.",
        youtube_id: "mXJOlgCQnAY",
        thumbnail: "https://youtu.be/mXJOlgCQnAY"
    },
    {
        id: 4,
        title: "Exercício: Sirene Vocal",
        description: "Com som de 'ng' (como em 'MANGA'), deslize do tom mais grave ao mais agudo e volte, como uma sirene de ambulância. Benefício: Melhora a flexibilidade vocal e ativa toda a extensão da voz.",
        youtube_id: "aIRiX71Y0lA",
        thumbnail: "https://youtu.be/aIRiX71Y0lA"
    },
    {
        id: 5,
        title: "Exercício: Suspiros sonoros e vogais suaves",
        description: "Solte um suspiro sonoro, como um 'ahhh' relaxado. Depois, faça vogais livres ('ok', 'éhh') em tons médios e baixos. Benefício: Relaxa a laringe e evita perdas desnecessárias.",
        youtube_id: "bE_xy-F6NDA",
        thumbnail: "https://youtu.be/bE_xy-F6NDA"
    },
    {
        id: 6,
        title: "Exercício: Mastigação sonora",
        description: "Altere entre tons médios. Simule o movimento de mastigar e emita o som de 'm' de forma relaxada. Alterne entre tons médios e graves, mantendo a mandíbula solta. Benefício: Melhora a flexibilidade da articulação temporomandibular e a ressonância.",
        youtube_id: "vAQ5jrQhDxE",
        thumbnail: "https://youtu.be/vAQ5jrQhDxE"
    },
    {
        id: 7,
        title: "Exercício: Sons fricativos com 'F' e 'S'",
        description: "Solte um 'fff' ou 'sss' antes de iniciar qualquer frase cantada ou falada, isso ajuda a ativar o apoio antes de usar a voz com mais intensidade. Benefício: Ajuda a controlar o fluxo de ar e melhora a resistência vocal.",
        youtube_id: "nkKTPhTgPRA",
        thumbnail: "https://youtu.be/nkKTPhTgPRA"
    },
    {
        id: 8,
        title: "Exercício: Vogais Encadeadas",
        description: "Emita Sons suaves conectando as vogais 'a,e,i,o,u', de forma fluida e relaxada. Comece com um tom confortável e vá explorar levemente diferentes alturas. Benefício: melhora a dicção e prepra a voz para falar e cantar",
        youtube_id: "v9N-gxjETXs",
        thumbnail: "https://youtu.be/v9N-gxjETXs"
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

if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}