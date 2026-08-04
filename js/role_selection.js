document.getElementById("roleForm").addEventListener("submit", function(e){

    e.preventDefault();

    const selectedRole =
    document.querySelector('input[name="role"]:checked').value;

    if(selectedRole==="leader"){

        window.location.href="group_leader_dashboard.html";

    }

    else{

        window.location.href="student_dashboard.html";

    }

});