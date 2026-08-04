/* ==========================================
   STUDENT ASSIGNMENT TRACKER
   DASHBOARD JAVASCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // Sidebar Active Menu
    // =========================

    const menuItems = document.querySelectorAll(".menu li");

    menuItems.forEach(item => {

        item.addEventListener("click", () => {

            menuItems.forEach(i => i.classList.remove("active"));

            item.classList.add("active");

        });

    });

    // =========================
    // Search Assignments
    // =========================

    const searchBox = document.querySelector(".top-right input");

    const rows = document.querySelectorAll("table tr");

    if(searchBox){

        searchBox.addEventListener("keyup", function(){

            const value = this.value.toLowerCase();

            rows.forEach((row,index)=>{

                if(index===0) return;

                row.style.display = row.innerText.toLowerCase().includes(value)
                ? ""
                : "none";

            });

        });

    }

    // =========================
    // Logout
    // =========================

    const logoutBtn = document.querySelector(".logout");

    if(logoutBtn){

        logoutBtn.addEventListener("click", ()=>{

            const answer = confirm("Are you sure you want to logout?");

            if(answer){

                window.location.href="login.html";

            }

        });

    }

    // =========================
    // Notification
    // =========================

    const bell = document.querySelector(".notification");

    if(bell){

        bell.addEventListener("click", ()=>{

            alert(
`Notifications

• DBMS Assignment due tomorrow

• Cloud Lab submission approved

• New announcement posted`

            );

        });

    }

    // =========================
    // Open Workspace Button
    // =========================

    const workspaceBtn=document.querySelector(".group-box button");

    if(workspaceBtn){

        workspaceBtn.addEventListener("click",()=>{

            window.location.href="group_workspace.html";

        });

    }

    // =========================
    // Dashboard Cards Animation
    // =========================

    const cards=document.querySelectorAll(".card");

    cards.forEach((card,index)=>{

        card.style.opacity="0";

        card.style.transform="translateY(25px)";

        setTimeout(()=>{

            card.style.transition=".5s";

            card.style.opacity="1";

            card.style.transform="translateY(0)";

        },index*120);

    });

});