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



//For sticky header js
// const header = document.getElementById("mainHeader");
const header = document.querySelector(".header");

if (header) {
    const headerHeight = header.offsetHeight;
}

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


// Download syllabus popup
document.addEventListener("DOMContentLoaded", function () {

    const openBtn = document.getElementById("downloadSyllabusBtn");
    const popup = document.getElementById("syllabusPopup");
    const closeBtn = document.getElementById("closeSyllabusPopup");

    if (!openBtn || !popup || !closeBtn) return;

    // Open popup
    openBtn.addEventListener("click", function (e) {
        e.preventDefault();

        popup.classList.add("active");
        document.body.style.overflow = "hidden";
    });

    // Close popup
    function closePopup() {
        popup.classList.remove("active");
        document.body.style.overflow = "";
    }

    closeBtn.addEventListener("click", closePopup);

    // Close on outside click
    popup.addEventListener("click", function (e) {
        if (e.target === popup) {
            closePopup();
        }
    });

    // Close on Escape key
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && popup.classList.contains("active")) {
            closePopup();
        }
    });
    const registerBtn = document.getElementById("syllabusRegisterBtn");

    if (registerBtn) {
        registerBtn.addEventListener("click", function () {
            closePopup();
        });
    }
});
