/* ==========================================
   NOTIFICATIONS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const search = document.getElementById("searchNotification");
    const notifications = document.querySelectorAll(".notification");

    // Search Notifications
    search.addEventListener("keyup", function(){

        const value = this.value.toLowerCase();

        notifications.forEach(notification=>{

            notification.style.display =
            notification.innerText.toLowerCase().includes(value)
            ? "flex"
            : "none";

        });

    });

    // Delete Notification
    document.querySelectorAll(".delete").forEach(button=>{

        button.addEventListener("click",()=>{

            if(confirm("Delete this notification?")){

                button.parentElement.remove();

            }

        });

    });

    // Mark All as Read
    document.getElementById("markRead").addEventListener("click",()=>{

        notifications.forEach(notification=>{

            notification.classList.remove("unread");

            notification.classList.add("read");

        });

        alert("All notifications marked as read.");

    });

});