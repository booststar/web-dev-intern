const forms = document.querySelector(".forms"),
   pwShowHide = document.querySelectorAll(".eye-icon"),
   links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bxs-hide", "bxs-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bxs-show", "bxs-hide");
        })
    })
})

