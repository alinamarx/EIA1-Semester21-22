var L09;
(function (L09) {
    // Umwandeln der HTMLElemente in Variabeln
    var total = document.getElementById("total");
    var newtask = document.querySelector("input");
    var checkmark = document.querySelector("#fa-check");
    var tasks = document.querySelector("ul");
    //Variablendeklaration
    var index = 0;
    window.addEventListener("load", function () {
        window.addEventListener("keydown", function (event) {
            if (event.key === "Enter")
                addingTask();
        });
        function totalCounter(index) {
            total.innerHTML = "" + index;
        }
        //Ausführung der Funktion, wenn man etwas eingibt und 'Enter' drückt
        function addingTask() {
            index++;
            totalCounter(index);
            //Übergabe des Inputs an neue Variable, um dann Textfeld zu leeren
            var textInput;
            if (newtask.value != "")
                textInput = newtask.value;
            newtask.value = "";
            var li = document.createElement("li");
            //Erstellen der Listenelemente und Icons im DOM
            var circle = document.createElement("i");
            circle.classList.add("far fa-circle");
            li.appendChild(circle);
            circle.addEventListener("click", checkingTask);
            var checkmark = document.createElement("i");
            checkmark.classList.add("fas fa-check notdone");
            li.appendChild(checkmark);
            li.textContent = "" + textInput;
            var trash = document.createElement("i");
            trash.classList.add("far fa-trash-alt");
            li.appendChild(trash);
            trash.addEventListener("click", deletingTask);
            tasks.appendChild(li);
        }
        //Task wird bei Klick gecheckt und entcheckt
        function checkingTask() {
            if (checkmark.classList.contains("notdone")) {
                checkmark.classList.remove("notdone");
                checkmark.classList.add("done");
            }
            else {
                checkmark.classList.remove("done");
                checkmark.classList.add("notdone");
            }
        }
        //Task wird gelöscht, Counter -1
        function deletingTask() {
            this.li.innerHTML = "";
            totalCounter(index--);
        }
    });
})(L09 || (L09 = {}));
//# sourceMappingURL=script.js.map