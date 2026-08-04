/* ==========================================
   ASSIGNMENT WORKSPACE
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Progress Bar Animation
    const progress = document.querySelector(".progress-fill");

    if(progress){

        progress.style.width = "0%";

        setTimeout(() => {

            progress.style.transition = "width 1.5s ease";

            progress.style.width = "40%";

        },300);

    }

    // Upload Button
    const uploadBtn = document.getElementById("uploadBtn");

    if(uploadBtn){

        uploadBtn.addEventListener("click",()=>{

            const file=document.getElementById("assignmentFile");

            if(file.files.length===0){

                alert("Please choose a file first.");

            }

            else{

                alert("Assignment uploaded successfully! (Demo)");

                document.querySelector(".not-submitted").innerText="Submitted";

                document.querySelector(".not-submitted").style.color="#16A34A";

            }

        });

    }

    // Download Buttons
    document.querySelectorAll(".resource button").forEach(button=>{

        button.addEventListener("click",()=>{

            alert("Download will be connected with the PHP backend.");

        });

    });

    // Discussion Board
    const postBtn=document.getElementById("postComment");

    if(postBtn){

        postBtn.addEventListener("click",()=>{

            const textarea=document.querySelector("textarea");

            if(textarea.value.trim()==="") return;

            const discussion=document.querySelector(".discussion");

            const message=document.createElement("div");

            message.className="message student";

            message.innerHTML=`
                <h4>👩‍🎓 You</h4>
                <p>${textarea.value}</p>
            `;

            discussion.appendChild(message);

            textarea.value="";

        });

    }

});