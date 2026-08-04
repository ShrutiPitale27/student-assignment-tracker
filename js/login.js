document.getElementById("loginForm").addEventListener("submit", function(event){

    event.preventDefault();

    const role = document.getElementById("userRole").value;

    if(role==="teacher"){

        window.location.href="teacher_dashboard.html";

    }

    else{

        window.location.href="role_selection.html";

    }

});