var L09;
(function (L09) {
    window.addEventListener("load", function () {
        // Umwandeln der HTMLElemente in Variabeln
        var total = document.getElementById("total");
        var newtask = document.querySelector("input");
        var tasks = document.querySelector("ul");
        var open = document.getElementById("open");
        var done = document.getElementById("done");
        //Variablendeklaration
        var indexTotal = 0;
        var indexOpen = 0;
        var indexDone = 0;
        var checked = false;
        var microphoneClicked = false;
        //Übergabe des Inputs an neue Variable, um dann Textfeld zu leeren
        var textInput;
        window.addEventListener("keydown", function (event) {
            if (event.keyCode == 13)
                addingTask(textInput);
        });
        function Counter(indexTotal, indexOpen, indexDone) {
            total.innerHTML = indexTotal + " in total";
            open.innerHTML = indexOpen + " open";
            done.innerHTML = ", " + indexDone + " done";
        }
        //Ausführung der Funktion, wenn man etwas eingibt und 'Enter' drückt
        function addingTask(input) {
            indexTotal++;
            indexOpen++;
            Counter(indexTotal, indexOpen, indexDone);
            if (newtask.value != "") {
                input = newtask.value;
                newtask.value = "";
            }
            //Erstellen der Listenelemente und Icons im DOM
            var li = document.createElement("li");
            var circle = document.createElement("i");
            circle.classList.add("far");
            li.appendChild(circle);
            circle.classList.add("fa-circle");
            li.appendChild(circle);
            circle.addEventListener("click", checkingTask);
            var checkmark = document.createElement("i");
            checkmark.setAttribute("class", "fas fa-check");
            checkmark.setAttribute("style", "opacity: 0");
            li.appendChild(checkmark);
            var taskString = document.createElement("span");
            li.appendChild(taskString);
            taskString.textContent = "" + input;
            console.log(taskString);
            var trash = document.createElement("i");
            trash.classList.add("far");
            trash.classList.add("fa-trash-alt");
            li.appendChild(trash);
            li.insertBefore(trash, li.childNodes[2]);
            trash.addEventListener("click", deletingTask);
            tasks.appendChild(li);
            //Task wird bei Klick gecheckt und entcheckt
            function checkingTask() {
                if (checkmark.getAttribute("style") == "opacity: 0") {
                    indexOpen--;
                    indexDone++;
                    Counter(indexTotal, indexOpen, indexDone);
                    checkmark.setAttribute("style", "opacity: 1");
                }
                else {
                    indexOpen++;
                    indexDone--;
                    Counter(indexTotal, indexOpen, indexDone);
                    checkmark.setAttribute("style", "opacity: 0");
                }
            }
            //Task wird gelöscht, total counter -1
            function deletingTask() {
                li.remove();
                indexTotal--;
                if (!checked) { //Die Task wird gelöscht, wenn sie nicht abgehakt ist -> -1 open
                    indexOpen--;
                }
                else { //Die Task wird gelöscht, wenn sie abgehakt ist -> -1 done
                    indexDone--;
                }
                Counter(indexTotal, indexOpen, indexDone);
            }
        }
        //Spracheingabe mit Artyom
        var artyom = new Artyom();
        artyom.addCommands([{
                indexes: ["erstelle Aufgabe *", "aufgabe erstellen *"],
                smart: true,
                action: function (i, voiceInput) {
                    console.log("Neue Aufgabe wird erstellt: " + voiceInput);
                    artyom.say("Neue Aufgabe wird erstellt: " + voiceInput);
                    addingTask(voiceInput);
                }
            }, {
                indexes: ["Lösche alle Aufgaben", "Lösche", "Löschen"],
                smart: false,
                action: function () {
                    tasks.innerHTML = "";
                    artyom.say("Alle Aufgaben wurden gelöscht");
                }
            }]);
        function startContinuousArtyom() {
            artyom.fatality();
            setTimeout(function () {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true,
                    speed: 0.8
                }).then(function () {
                    console.log("Ready!");
                });
            }, 250);
        }
        //Funktion "Record"-Button (Artyom hört zu/ hört auf zuzuhören) 
        document.querySelector(".fa-microphone-alt").addEventListener("click", function () {
            if (!microphoneClicked) {
                startContinuousArtyom();
                microphoneClicked = true;
            }
            else {
                artyom.fatality();
                console.log("Not ready!");
                microphoneClicked = false;
            }
        });
    });
})(L09 || (L09 = {}));
//# sourceMappingURL=script.js.map