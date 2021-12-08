namespace L08 {

    /*Soundeffects als Variablen zur Verfügung stellen*/
    var soundA: HTMLAudioElement = new Audio("./L08/task_material/assets/A.mp3");
    var soundC: HTMLAudioElement = new Audio("./L08/task_material/assets/C.mp3");
    var soundF: HTMLAudioElement = new Audio("./L08/task_material/assets/F.mp3");
    var soundG: HTMLAudioElement = new Audio("./L08/task_material/assets/G.mp3");
    var hihat: HTMLAudioElement = new Audio("./L08/task_material/assets/hihat.mp3");
    var kick: HTMLAudioElement = new Audio("./L08/task_material/assets/kick.mp3");
    var laugh1: HTMLAudioElement = new Audio("./L08/task_material/assets/laugh-1.mp3");
    var laugh2: HTMLAudioElement = new Audio("./L08/task_material/assets/laugh-2.mp3");
    var snare: HTMLAudioElement = new Audio("./L08/task_material/assets/snare.mp3");


    //Abspielen der zugehörigen Sounds
    function playSample(samples: HTMLAudioElement): void {
            samples.play();
    }

    //Variablen Icons
    let drummachine: HTMLAudioElement[] = [kick, snare, hihat, kick];

    var pausingBeat: boolean = false;
    let interval: number = 220;
    var key: number = 0;

    var beatInterval: number;
    

    //Der PlayButton switcht bei Klick Funktion und Aussehen
    function playstopBeat(): void {
        if (!pausingBeat) {
            document.querySelector("#playStop").setAttribute("class", "");
            document.querySelector("#playStop").setAttribute("class", "fas fa-stop fa-6x");
            beatInterval = setInterval(playBeat, interval);
            pausingBeat = true;
        } else {
            document.querySelector("#playStop").setAttribute("class", "");
            document.querySelector("#playStop").setAttribute("class", " fas fa-play fa-6x");
            stopBeat(); 
            pausingBeat = false;        
        }
      
    }

    
    function playBeat (): void { 
        drummachine[key].play();
        key++;
        if (key >= drummachine.length) { key = 0; }
    }

    function stopBeat(): void {
        clearInterval(beatInterval);
    }

    function deleteBeat (): void {
        drummachine = [];
        pausingBeat = true;
        playstopBeat();
    }

    function Remix (): void {
        drummachine.push (kick, snare, hihat, kick);
        interval = Math.floor((Math.random() * 1000) + 1);
        playstopBeat();
    }

    // EventListener horcht auf Klicks im Document
    window.addEventListener("load", function (): void {
        document.querySelector("#button1").addEventListener("click", function (): void {
            playSample(kick);
        });
        document.querySelector("#button2").addEventListener("click", function (): void {
            playSample(snare);
        });
        document.querySelector("#button3").addEventListener("click", function (): void {
            playSample(hihat);
        });
        document.querySelector("#button4").addEventListener("click", function (): void {
            playSample(soundA);
        });
        document.querySelector("#button5").addEventListener("click", function (): void {
            playSample(soundC);
        });
        document.querySelector("#button6").addEventListener("click", function (): void {
            playSample(soundF);
        });
        document.querySelector("#button7").addEventListener("click", function (): void {
            playSample(soundG);
        });
        document.querySelector("#button8").addEventListener("click", function (): void {
            playSample(laugh1);
        });
        document.querySelector("#button9").addEventListener("click", function (): void {
            playSample(laugh2);
        });

        document.querySelector("#playStop").addEventListener("click", playstopBeat);
        document.querySelector("#remix").addEventListener("click", Remix);
        document.querySelector("#delete").addEventListener("click", deleteBeat);
    });



    // EventListener für das Keyboard
    window.addEventListener("load", function (): void {
        document.addEventListener("keydown", function (event: KeyboardEvent): void {
            if (event.key == "1") {
                playSample(kick);
            } else if (event.key == "2") {
                playSample(snare);
            } else if (event.key == "3") {
                playSample(hihat);
            } else if (event.key == "4") {
                playSample(soundA);
            } else if (event.key == "5") {
                playSample(soundC);
            } else if (event.key == "6") {
                playSample(soundF);
            } else if (event.key == "7") {
                playSample(soundG);
            } else if (event.key == "8") {
                playSample(laugh1);
            } else if (event.key == "9") {
                playSample(laugh2);
            } else if (event.key == "0") {
                playstopBeat();
            }
        });
    });

}