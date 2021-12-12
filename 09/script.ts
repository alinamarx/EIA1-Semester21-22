namespace L09 {

// Umwandeln der HTMLElemente in Variabeln
let total: HTMLElement = document.getElementById("total");
const newtask: HTMLInputElement = document.querySelector("input");
const checkmark: HTMLElement = document.querySelector("#fa-check");
let tasks: HTMLElement = document.querySelector("ul");

//Variablendeklaration
let index: number = 0;


window.addEventListener("load", function(): void {
    window.addEventListener("keydown", function(event: KeyboardEvent): void {
        if (event.key === "Enter") addingTask();
    });

    function totalCounter(index: number): void {
        total.innerHTML = "" + index;
    }

    //Ausführung der Funktion, wenn man etwas eingibt und 'Enter' drückt
    function addingTask (): void {

        index++;
        totalCounter(index);

        //Übergabe des Inputs an neue Variable, um dann Textfeld zu leeren
        let textInput: string;
        if (newtask.value != "") textInput = newtask.value;
        newtask.value = "";
        
        const li: HTMLLIElement = document.createElement("li");

        //Erstellen der Listenelemente und Icons im DOM
        const circle: HTMLElement = document.createElement("i");
        circle.classList.add("far fa-circle");
        li.appendChild(circle);
        circle.addEventListener("click", checkingTask);

        const checkmark: HTMLElement = document.createElement("i");
        checkmark.classList.add("fas fa-check notdone");
        li.appendChild(checkmark);

        li.textContent = "" + textInput;
        
        const trash: HTMLElement = document.createElement("i");
        trash.classList.add("far fa-trash-alt");
        li.appendChild(trash); 
        trash.addEventListener("click", deletingTask);

        tasks.appendChild(li);
    }

    //Task wird bei Klick gecheckt und entcheckt
    function checkingTask (): void {
    if (checkmark.classList.contains("notdone")) {
        checkmark.classList.remove("notdone");
        checkmark.classList.add("done");
    } else  {
        checkmark.classList.remove("done");
        checkmark.classList.add("notdone");
    }
    }

    //Task wird gelöscht, Counter -1
    function deletingTask (): void {
        this.li.innerHTML = ""; 
        totalCounter(index--);  
    }

});
}