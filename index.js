const form = document.querySelector("form");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.querySelector("#name");
            const email = document.querySelector("#email");
            const password = document.querySelector("#password");
            if (!name.checkValidity() ||
                !email.checkValidity() ||
                !password.checkValidity()
            ) {
                alert("Please fill out all field correctly.");
                return;
            }
            alert("Form submitted successfully!");
            document.getElementById("myForm").reset();
        });