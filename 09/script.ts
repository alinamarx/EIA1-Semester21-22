namespace L09 {

    window.addEventListener("load", function(): void {
    // Umwandeln der HTMLElemente in Variabeln
    let total: HTMLElement = document.getElementById("total");
    const newtask: HTMLInputElement = document.querySelector("input");
    let tasks: HTMLElement = document.querySelector("ul");

    //Variablendeklaration
    let index: number = 0;
    let checked: boolean = false;


    window.addEventListener("keydown", function(event: KeyboardEvent): void {
        if (event.keyCode == 13) addingTask();
    });

    function totalCounter(index: number): void {
        total.innerHTML = index + " in total";
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
        circle.classList.add("far");
        li.appendChild(circle);
        circle.classList.add("fa-circle");
        li.appendChild(circle);
        circle.addEventListener("click", checkingTask);

        const checkmark: HTMLElement = document.createElement("i");
        checkmark.setAttribute("id", "check");
        li.appendChild(checkmark); 

        const taskString: HTMLSpanElement = document.createElement("span");
        li.appendChild(taskString);
        taskString.textContent = "" + textInput;

        const trash: HTMLElement = document.createElement("i");
        trash.classList.add("far");
        trash.classList.add("fa-trash-alt");
        li.appendChild(trash);
        li.insertBefore(trash, li.childNodes[2]); 
        trash.addEventListener("click", deletingTask);

        tasks.appendChild(li);

        //Task wird bei Klick gecheckt und entcheckt
        function checkingTask (): void {
            if (!checked) {
                checkmark.classList.add("fas", "fa-check");
                checked = true;
            } else  {
                checkmark.setAttribute("class", "");
                checked = false;
            }
        }

        //Task wird gelöscht, Counter -1
        function deletingTask (): void {
            li.innerHTML = ""; 
            totalCounter(index--);  
        }
    }

});
}