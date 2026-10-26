// Mail js configuration 

emailjs.init({
    publicKey: "1NGBx9jfq_2q4pffw"
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
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



//For sticky header js
const header = document.getElementById("mainHeader");

const placeholder = document.createElement("div");
placeholder.className = "header-placeholder";
placeholder.style.height = header.offsetHeight + "px";

header.parentNode.insertBefore(placeholder, header);

window.addEventListener("scroll", function () {

    if (window.scrollY > 80) { // blue bar height

        header.classList.add("sticky");
        placeholder.classList.add("active");

    } else {

        header.classList.remove("sticky");
        placeholder.classList.remove("active");

    }

});