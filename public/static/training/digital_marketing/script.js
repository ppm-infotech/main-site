// Mail js configuration 

emailjs.init({
    publicKey: "1NGBx9jfq_2q4pffw"
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const submitBtn = document.getElementById("submitBtn");
    submitBtn.disabled = true;
    submitBtn.innerText = "Submitting...";

    emailjs.sendForm(
        "service_tsqq5fv",
        "template_yyp5y91",
        this
    )
        .then(() => {

            document.getElementById("successMsg").classList.remove("d-none");
            document.getElementById("errorMsg").classList.add("d-none");

            this.reset();

        })
        .catch((error) => {

            document.getElementById("errorMsg").classList.remove("d-none");
            document.getElementById("successMsg").classList.add("d-none");

            console.error(error);

        })
        .finally(() => {

            submitBtn.disabled = false;
            submitBtn.innerText = "Submit";

        });
});