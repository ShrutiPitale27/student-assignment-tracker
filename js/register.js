/* ==========================================
   STUDENT REGISTER PAGE
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("registerForm");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    const strengthFill = document.getElementById("strengthFill");

    const togglePassword = document.querySelector(".toggle-password");
    const toggleConfirm = document.querySelector(".toggle-confirm");

    // ===========================
    // PASSWORD STRENGTH
    // ===========================

    password.addEventListener("input", () => {

        const value = password.value;
        let strength = 0;

        if (value.length >= 8) strength++;
        if (/[A-Z]/.test(value)) strength++;
        if (/[0-9]/.test(value)) strength++;
        if (/[^A-Za-z0-9]/.test(value)) strength++;

        switch (strength) {

            case 1:
                strengthFill.style.width = "25%";
                strengthFill.style.background = "#EF4444";
                break;

            case 2:
                strengthFill.style.width = "50%";
                strengthFill.style.background = "#F59E0B";
                break;

            case 3:
                strengthFill.style.width = "75%";
                strengthFill.style.background = "#3B82F6";
                break;

            case 4:
                strengthFill.style.width = "100%";
                strengthFill.style.background = "#22C55E";
                break;

            default:
                strengthFill.style.width = "0%";
                break;
        }

    });

    // ===========================
    // SHOW / HIDE PASSWORD
    // ===========================

    togglePassword.addEventListener("click", () => {

        if (password.type === "password") {
            password.type = "text";
            togglePassword.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
        } else {
            password.type = "password";
            togglePassword.innerHTML = '<i class="fa-solid fa-eye"></i>';
        }

    });

    toggleConfirm.addEventListener("click", () => {

        if (confirmPassword.type === "password") {
            confirmPassword.type = "text";
            toggleConfirm.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
        } else {
            confirmPassword.type = "password";
            toggleConfirm.innerHTML = '<i class="fa-solid fa-eye"></i>';
        }

    });

    // ===========================
    // FORM VALIDATION
    // ===========================

    form.addEventListener("submit", (e) => {

        // Password Match
        if (password.value !== confirmPassword.value) {

            e.preventDefault();

            alert("Passwords do not match!");

            confirmPassword.focus();

            return;
        }

        // Password Length
        if (password.value.length < 8) {

            e.preventDefault();

            alert("Password must contain at least 8 characters.");

            password.focus();

            return;
        }

        // If validation passes, the form submits automatically
        // to backend/register.php

    });

});