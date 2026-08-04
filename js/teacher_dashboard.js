/* ==========================================
   TEACHER DASHBOARD JAVASCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ===========================
    // Sidebar Active Menu
    // ===========================

    const menuItems = document.querySelectorAll(".menu li");

    menuItems.forEach(item => {

        item.addEventListener("click", () => {

            menuItems.forEach(i => i.classList.remove("active"));

            item.classList.add("active");

        });

    });

    // ===========================
    // Search
    // ===========================

    const search = document.querySelector(".top-right input");

    if(search){

        search.addEventListener("keyup", function(){

            console.log("Searching:", this.value);

        });

    }

    // ===========================
    // Notifications
    // ===========================

    const bell = document.querySelector(".notification");

    if(bell){

        bell.addEventListener("click", () => {

            alert(
`Faculty Notifications

• 12 new assignment submissions

• 2 new student registrations

• Cloud Lab deadline tomorrow

• Database Assignment published`
            );

        });

    }

    // ===========================
    // Logout
    // ===========================

    const logout = document.querySelector(".logout");

    if(logout){

        logout.addEventListener("click", () => {

            if(confirm("Do you really want to logout?")){

                window.location.href = "login.html";

            }

        });

    }

    // ===========================
    // Quick Action Buttons
    // ===========================

    const buttons = document.querySelectorAll(".group-box button");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            alert(button.innerText + " page will be connected with PHP backend.");

        });

    });

    // ===========================
    // Dashboard Card Animation
    // ===========================

    const cards = document.querySelectorAll(".card");

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