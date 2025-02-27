document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("registration-modal");
    const signUpBtn = document.querySelector(".sing_up_btn");
    const closeBtn = document.querySelector(".close-btn");
    const registerBtn = document.querySelector(".register-btn");

    // Boshlang‘ich holatda modalni yashirish (agar localStorage ochiq bo‘lsa, yopamiz)
    modal.style.display = "none"; 

    // Modalni ochish
    signUpBtn.addEventListener("click", function () {
        modal.style.display = "flex";
        document.body.classList.add("modal-open"); // Orqa fondagi scrollingni bloklash
    });

    // Modalni yopish (X tugmasi bosilganda)
    closeBtn.addEventListener("click", function () {
        closeModal();
    });

    // Modal tashqarisini bosganda yopish
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Tasdiqlash tugmasi bosilganda modalni yopish
    registerBtn.addEventListener("click", function () {
        closeModal();
    });

    // Modalni yopish funksiyasi
    function closeModal() {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
    }
});















document.querySelector(".add_btn").addEventListener("click", function () {
    const name = document.querySelector(".rolex_name").innerText;
    const info = document.querySelector(".rolex_info").innerText;
    const price = document.querySelector(".rolex_price").innerText;
    const img = document.querySelector(".rolex3_img").src;

    const newWatch = { name, info, price, img };

    let selectedWatches = JSON.parse(localStorage.getItem("selectedWatches")) || [];
    selectedWatches.push(newWatch);
    localStorage.setItem("selectedWatches", JSON.stringify(selectedWatches));

});