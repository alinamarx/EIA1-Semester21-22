var L09;
(function (L09) {
    window.addEventListener("load", function () {
        // Umwandeln der HTMLElemente in Variabeln
        var total = document.getElementById("total");
        var newtask = document.querySelector("input");
        var tasks = document.querySelector("ul");
        //Variablendeklaration
        var index = 0;
        var checked = false;
        window.addEventListener("keydown", function (event) {
            if (event.keyCode == 13)
                addingTask();
        });
        function totalCounter(index) {
            total.innerHTML = index + " in total";
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
            circle.classList.add("far");
            li.appendChild(circle);
            circle.classList.add("fa-circle");
            li.appendChild(circle);
            circle.addEventListener("click", checkingTask);
            var checkmark = document.createElement("i");
            checkmark.setAttribute("id", "check");
            li.appendChild(checkmark);
            var taskString = document.createElement("span");
            li.appendChild(taskString);
            taskString.textContent = "" + textInput;
            var trash = document.createElement("i");
            trash.classList.add("far");
            trash.classList.add("fa-trash-alt");
            li.appendChild(trash);
            li.insertBefore(trash, li.childNodes[2]);
            trash.addEventListener("click", deletingTask);
            tasks.appendChild(li);
            //Task wird bei Klick gecheckt und entcheckt
            function checkingTask() {
                if (!checked) {
                    checkmark.classList.add("fas", "fa-check");
                    checked = true;
                }
                else {
                    checkmark.setAttribute("class", "");
                    checked = false;
                }
            }
            //Task wird gelöscht, Counter -1
            function deletingTask() {
                li.innerHTML = "";
                totalCounter(index--);
            }
        }
    });
})(L09 || (L09 = {}));
//# sourceMappingURL=script.js.map