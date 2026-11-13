let audio: HTMLAudioElement | undefined;

class Playlist {
    nome: string;
    musicas: Musica[];

    constructor (nome: string, musicas: Musica[]) {
        this.nome = nome
        this.musicas = musicas
    }
}

class Musica {
    nome: string;
    autor: string;
    capa: string;
    musica: string;
    info: string;

    constructor (nome: string, autor: string, capa: string, musica = "", info = "placeholder") {
        this.nome = nome
        this.autor = autor
        this.capa = capa
        this.musica = musica
        this.info = info
    }
}

const playlists: Playlist[] = [
    new Playlist("Élkimo", [
        new Musica("Miss Murder", "AFI", "missmurder", "Missmurder", 
            "O refrão de Miss Murder, 'Can I make beauty stay if I take my life?' decreve o jeito que a LaVeau pensa. Além de já possuir idealizações suicídas, ela gostaria de manter tudo do jeito mais bonito e agradável, as vezes rejeitando o que a deixa desconfortável para não ter que lidar com a verdade. O resto do tema da música, que fala da perspectiva de possíveis fãs, combina bastante com a história dela, uma vez que ela foge da sua família e castelo para ter uma vida diferente."),
        new Musica("HUMANS", "GEN KLOUD",  "humans", "Humans",
            "HUMANS me lembra a Azéleis LaVeau por causa da culpa aos humanos na música inteira. Azéleis é uma híbrida, e sofre discriminação na maioria dos lugares onde o RPG se passa por conta disso. Conforme o tempo, ela passou a odiar a humanidade por não conseguir aceitar uma espécie que ela mesma criou."
        ),
        new Musica("Counting Sheep", "SAFIA", "countingsheep", "Countingsheep",
            "Counting Sheep é uma das músicas que eu coloquei pela aura sem pensar muito sobre como que combina com ela, mas pensando bem, a música pode descrever de uma maneira decente o que ela pensava durante sua estadia o castelo que vivia, com sua família. Por mais que ela goste do que é bonito, ela também tem muito desejo pela liberdade. Então os versos que falam 'I wanna let you down, make you toss and turn around' representa o objetivo dela ao fugir de casa."
        ),
        new Musica("The Wolf", "SIAMES", "thewolf", "Thewolf",
            "The Wolf não teve muita coisa que combina com ela, eu só consigo imaginar ela toda vez que essa música toca então fica por isso,"
        ),
        new Musica("Me and Mr. Wolf", "The Real Tuesday Weld", "meandmrwolf", "Meandmrwolf",
            "Me and Mister Wolf é muito a Azéleis.... Principalmente se você considerar que ela é a cantora femenina (a Chapeuzinho Vermelho, com eu gosto de pensar). Ela possui um medo da vulnerabilidade e do desejo, já que ela foi criada com lições com o objetivo em volta de não ter essas coisas. Ainda assim, ela quer compartilhar isso com alguém, mas tem medo de destruir a outra pessoa sem querer (you know too much so now I have to kill you vibes)."
        ),
        new Musica("GOLD TEEF", "The Skinner Brothers", "goldteef", "Goldteef",
            "Não pensei em como relaciona com ela. O refrão apenas combina. Aceite."
        )
    ]),

    new Playlist("Ordem (Finished)", [
        new Musica("Thought I was Dead", "Tyler, The Creator", "thoughtiwasdead", "Thoughtiwasdead",
            "Não sei :^"
        ),
        new Musica("Don't You Dare Forget The Sun", "Get Scared", "dontyoudareforgetthesun", "Dontyoudareforgetthesun",
            "Essa personagem não foi muito elaborada dawg, desculpa aí. É só porque ela combina com Creepypasta mesmo que eu coloquei essa música na playlist dela."
        ),
        new Musica("Song of Unhealing", "Jadusable", "soundofunhealing", "Songofunhealing",
            "Ela é uma ocultista.... Que tirou o próprio olho pra sacrificar pra um bicho.... Tá ligado. Combina."
        ),
        new Musica("Me, Myself & I", "G-Eazy", "memyselfandi", "Memyselfandi",
            "Individualismo e hiperindependência. Receba."
        ),
        new Musica("The Bidding", "Tally Hall", "thebidding", "Thebidding",
            "Vibes. Ela é lowkey uma arrombada."
        ),
        new Musica("People I Don't Like", "UPSAHL", "peopleidontlike", "Peopleidontlike",
            "O jeito que ela tratou todos be like:"
        ),
        new Musica("All Of The Lights", "Kayne West", "allofthelights", "Allofthelights",
            "ESSA DAQUI É A ÚNICA COM MOTIVO. O motivo, você pergunta? Imagine o seguinte: Eu não tinha chegado na sessão ainda. Um amigo tava controlando minha personagem. Teve uma batalha. Ela só tava tirando dado bosta, acabou desmaiando. Eu cheguei depois de um tempo, acordei minha personagem, dei dois hit e matei o bicho, e minha personagem começou a atacar uma árvore depois pra ganhar sanidade (hobby). Um amigo meu disse que esse momento de aura dois pontos farmada tinha essa música como vibe. Se essas playlists fossem exclusivamente o que eu coloquei alguns neurônios pra ter motivo de ter na playlist do personagem, essa playlist só teria essa música KKKKKKKKKKKKKK"
        )
    ])
]


const asidePlay = document.querySelector(".play") as HTMLElement

playlists.forEach(list => {
    const div = document.createElement("div")
    div.classList.add("playlist")
    div.innerText = list.nome
    div.addEventListener('click', () => {
        mostrarMusic(list.musicas)
    })
    asidePlay.appendChild(div)
})

function mostrarMusic (musicas: Musica[]) {
    const main = document.querySelector("#maincont") as HTMLElement
    main.innerHTML = ""
    musicas.forEach(musica => {
        const card = document.createElement("div")
        card.classList.add("songcard")
        const artist = document.createElement("p")
        const song = document.createElement("p")
        const capa = document.createElement("img")
        capa.src = `/capas/${musica.capa}.png`
        capa.classList.add("capas")

        artist.innerText = musica.autor
        song.innerText= musica.nome
        card.appendChild(capa)
        card.appendChild(song)
        card.appendChild(artist)
        main.appendChild(card)

        card.addEventListener('click', () => {
            playMusic(musica)
        })

    })
}

function playMusic (musica: Musica) {
    if (audio) {
        audio.pause()
        audio.remove()
        audio.src = ""
    }
    audio = new Audio(`/musicas/${musica.musica}.mp3`)
    audio.play()
    showInfo(musica.info)
}

function showInfo (info: string) {
    (document.querySelector(".info") as HTMLDivElement).textContent = info
}

document.querySelector("#pausebtn")?.addEventListener('click', () => audio?.paused ? audio.play() : audio?.pause())