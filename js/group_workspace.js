/* ==========================================
   GROUP WORKSPACE
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Progress Bar Animation
    const progress = document.querySelector(".progress-fill");

    if(progress){

        progress.style.width = "0%";

        setTimeout(() => {

            progress.style.transition = "width 1.5s ease";

            progress.style.width = "72%";

        },300);

    }

    // Send Chat Message
    const sendBtn = document.querySelector(".send-btn");
    const input = document.querySelector(".right-panel input");
    const chatBox = document.querySelector(".chat-box");

    if(sendBtn){

        sendBtn.addEventListener("click",()=>{

            if(input.value.trim() === "") return;

            const msg = document.createElement("p");

            msg.innerHTML = "<strong>You:</strong> " + input.value;

            chatBox.appendChild(msg);

            input.value = "";

            chatBox.scrollTop = chatBox.scrollHeight;

        });

    }

    // Upload Button (Demo)
    const uploadBtn = document.querySelector(".files + button");

    if(uploadBtn){

        uploadBtn.addEventListener("click",()=>{

            alert("File upload will be connected with PHP backend.");

        });

    }

    // Back Button
    const backBtn = document.querySelector("header button");

    if(backBtn){

        backBtn.addEventListener("click",()=>{

            history.back();

        });

    }

});