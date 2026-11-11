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
    duracao: number;
    info: string;

    constructor (nome: string, autor: string, capa: string, musica = "", duracao = Date.now(), info = "placeholder") {
        this.nome = nome
        this.autor = autor
        this.capa = capa
        this.musica = musica
        this.duracao = duracao
        this.info = info
    }
}

const playlists: Playlist[] = [
    new Playlist("Élkimo", [
        new Musica("Wawa", "WawaTracks", ""),
        new Musica("Wawa is bad", "WawaEnemy", "")
    ]),

    new Playlist("Ordem (Finished)", [
        new Musica("Wewe", "WeweTracks", ""),
        new Musica("Wewe is bad", "WeweEnemy", "")
    ])
]


const asidePlay = document.querySelector(".play") as HTMLElement

playlists.forEach(list => {
    const div = document.createElement("div")
    div.classList.add("playlist")
    div.innerText = list.nome
    div.addEventListener('click', () => {
        
    })
    asidePlay.appendChild(div)
})

function mostrarMusic (musicas: Musica[]) {
    const main = document.querySelector("main") as HTMLElement
    main.innerHTML = ""
    
}