/* ==========================================
   PROFILE PAGE
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Change Password
    const passwordBtn = document.getElementById("changePassword");

    if(passwordBtn){

        passwordBtn.addEventListener("click", () => {

            alert("Password updated successfully! (Demo)");

        });

    }

    // Change Profile Photo
    const photoBtn = document.querySelector(".profile-image button");

    if(photoBtn){

        photoBtn.addEventListener("click", () => {

            alert("Profile photo upload will be connected with the PHP backend.");

        });

    }

    // Save Profile
    const saveBtn = document.querySelector(".save-btn");

    if(saveBtn){

        saveBtn.addEventListener("click", () => {

            alert("Profile saved successfully! (Demo)");

        });

    }

});