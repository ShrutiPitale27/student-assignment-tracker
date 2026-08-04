/* ==========================================
   SETTINGS PAGE
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Save Settings
    const saveBtn = document.getElementById("saveSettings");

    if(saveBtn){

        saveBtn.addEventListener("click", () => {

            alert("Settings saved successfully! (Demo)");

        });

    }

    // Logout from all devices
    const logoutBtn = document.getElementById("logoutAll");

    if(logoutBtn){

        logoutBtn.addEventListener("click", () => {

            if(confirm("Logout from all devices?")){

                alert("Logged out from all devices. (Demo)");

            }

        });

    }

    // Delete Account
    const deleteBtn = document.getElementById("deleteAccount");

    if(deleteBtn){

        deleteBtn.addEventListener("click", () => {

            const confirmDelete = confirm(
                "This action cannot be undone.\n\nAre you sure you want to delete your account?"
            );

            if(confirmDelete){

                alert("Account deletion request sent. (Demo)");

            }

        });

    }

    // Theme Selector (Demo)
    const selects = document.querySelectorAll("select");

    selects.forEach(select => {

        select.addEventListener("change", () => {

            console.log("Changed:", select.value);

        });

    });

});