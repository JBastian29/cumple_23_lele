onload = () =>{
        document.body.classList.remove("container");
};

function openModal(buttonNumber) {
        var modal = document.getElementById("modal");
        var modalText = document.getElementById("modal-text");
        modal.style.display = "block";
        switch (buttonNumber) {
          case 1:
            modalText.textContent = "Hoy, es un dia muy especial, en el que una vez mas tengo la oportunidad de desearte un ¡Feliz cumpleaños!";
            break;
          case 2:
            modalText.textContent = "Vienen a mi mente tantos recuerdos, tantas experiencias, algunas tan lindas y otras dolorosas ntt, pero"
            + " todo lo recuerdo con una sonrisa en el rostro. Has estado presente en muchas etapas y agradezco tanto"
            + " que hayas aparecido en mi vida y poder compartir cada momento contigo.";
            break;
          case 3:
            modalText.textContent = "Quiza sea la ultima vez que este cerca para tu cumpleaños, asi que espero pueda llegar a verte y"
            + " darte un abrazo fuertisimo, por que la vida da muchas vueltas y parece que pronto estaras un poco mas lejos...";
            break;
          case 4:
            modalText.textContent = "Te amo Leslie! Que este año este lleno de muchas cosas buenas en tu vida."
            + " Experiencias, aprendizaje y sobretodo, bonitos recuerdos. Aprovecha el tiempo, esforzate por lo que quieres en tu vida,"
            + " defini tus objetivos y veras que las cosas iran cada vez mejor. Nunca dejes de luchar y si en algun momento necesitas ayuda,"
            + " no me llames pq estare ocupado nttt, me dices y vemos como resolvemos, como siempre ha sido <3."
            + "  Disfruta de tu dia al maximo, rodeada de tus seres amados, que los 23 te traigan lo que mas anhelas en tu corazon!"
            + " De nuevo, FELIZ CUMPLEAÑOSSSS!!!";
            break;
          case 5:
              modalText.textContent = "Con muchisimo amor. Atentamente, \nIngeniero en Ciencias y Sistemas de Huawei, Juan Sebastian Julajuj Zelada.\n5 de Mayo 2024";

                break;
          default:
            modalText.textContent = "Texto del modal.";
        }
      }
      
      function closeModal() {
        var modal = document.getElementById("modal");
        modal.style.display = "none";
      }
      
