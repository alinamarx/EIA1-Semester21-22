namespace L09 {
// tslint:disable: no-any
declare var Artyom: any;

window.addEventListener("load", function(): void {
    // Umwandeln der HTMLElemente in Variabeln
    let total: HTMLSpanElement = document.getElementById("total");
    let newtask: HTMLInputElement = document.querySelector("input");
    let tasks: HTMLElement = document.querySelector("ul");
    let open: HTMLSpanElement = document.getElementById("open");
    let done: HTMLSpanElement = document.getElementById("done");

    //Variablendeklaration
    let indexTotal: number = 0;
    let indexOpen: number = 0;
    let indexDone: number = 0;
    let checked: boolean = false;
    let microphoneClicked: boolean = false;

    //Übergabe des Inputs an neue Variable, um dann Textfeld zu leeren
    let textInput: string;

    window.addEventListener("keydown", function(event: KeyboardEvent): void {
        if (event.keyCode == 13) addingTask(textInput);
    });

    function Counter(indexTotal: number, indexOpen: number, indexDone: number): void {
        total.innerHTML = indexTotal + " in total";
        open.innerHTML = indexOpen + " open";
        done.innerHTML = ", " + indexDone + " done";
    }
    
    //Ausführung der Funktion, wenn man etwas eingibt und 'Enter' drückt
    function addingTask (input: string): void {

        indexTotal++;
        indexOpen++;
        Counter(indexTotal, indexOpen, indexDone);  
    
        if (newtask.value != "") {
            input = newtask.value;
            newtask.value = "";
        } 
         
        //Erstellen der Listenelemente und Icons im DOM
        const li: HTMLLIElement = document.createElement("li");
        
        const circle: HTMLElement = document.createElement("i");
        circle.classList.add("far");
        li.appendChild(circle);
        circle.classList.add("fa-circle");
        li.appendChild(circle);
        circle.addEventListener("click", checkingTask);

        const checkmark: HTMLElement = document.createElement("i");
        checkmark.setAttribute("class", "fas fa-check");
        checkmark.setAttribute("style", "opacity: 0");
        li.appendChild(checkmark); 

        const taskString: HTMLSpanElement = document.createElement("span");
        li.appendChild(taskString);
        taskString.textContent = "" + input;
        console.log(taskString);

        const trash: HTMLElement = document.createElement("i");
        trash.classList.add("far");
        trash.classList.add("fa-trash-alt");
        li.appendChild(trash);
        li.insertBefore(trash, li.childNodes[2]); 
        trash.addEventListener("click", deletingTask);

        tasks.appendChild(li);

        //Task wird bei Klick gecheckt und entcheckt
        function checkingTask (): void {
            if (checkmark.getAttribute("style") == "opacity: 0") {
                indexOpen--;
                indexDone++;
                Counter(indexTotal, indexOpen, indexDone);
                checkmark.setAttribute("style", "opacity: 1");
            } else {
                indexOpen++;
                indexDone--;
                Counter(indexTotal, indexOpen, indexDone);
                checkmark.setAttribute("style", "opacity: 0");
            }
        }

        //Task wird gelöscht, total counter -1
        function deletingTask (): void {
            li.remove(); 
            indexTotal--;
            if (checkmark.getAttribute("style") == "opacity: 0") {   //Die Task wird gelöscht, wenn sie nicht abgehakt ist -> -1 open
                indexOpen--;
                checkmark.setAttribute("style", "opacity: 1");
            } else {          //Die Task wird gelöscht, wenn sie abgehakt ist -> -1 done
                indexDone--;
                checkmark.setAttribute("style", "opacity: 0");
            }
            Counter(indexTotal, indexOpen, indexDone);
        }    
    }

    //Spracheingabe mit Artyom
    const artyom: any = new Artyom();
    
    artyom.addCommands([{
        indexes: ["erstelle Aufgabe *", "aufgabe erstellen *"],
        smart: true,
        action: function(i: any, voiceInput: string): void {
            console.log("Neue Aufgabe wird erstellt: " + voiceInput);
            artyom.say("Neue Aufgabe wird erstellt: " + voiceInput);
            addingTask(voiceInput);
        }
        }, {
        indexes: ["Lösche alle Aufgaben", "Lösche", "Löschen"],
        smart: false,  
        action: function(): void {
            tasks.innerHTML = "";
            artyom.say("Alle Aufgaben wurden gelöscht");
        }        
        }]);

    function startContinuousArtyom(): void {
        artyom.fatality();
        setTimeout(
            function(): void {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true, 
                    speed: 0.8
                }).then(function(): void {
                    console.log("Ready!");
                });
            },
            250);
    }
    //Funktion "Record"-Button (Artyom hört zu/ hört auf zuzuhören) 
    document.querySelector(".fa-microphone-alt").addEventListener("click", function(): void {
        if (!microphoneClicked) {
            startContinuousArtyom();
            microphoneClicked = true; 
        } else {
            artyom.fatality();
            console.log("Not ready!");
            microphoneClicked = false;
        }
    });
});
}