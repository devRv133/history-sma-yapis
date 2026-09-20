/* File Logika JavaScript */
console.log("Website Arsip Sejarah Sekolah berhasil dimuat dengan file terpisah!");

// === SCRIPT ANIMASI LOADING ===
window.addEventListener("load", function () {
    const loadingScreen = document.getElementById("loading-screen");
    
    // Kasih jeda sedikit (1.2 detik) biar animasinya kelihatan mulus sebelum pudar
    setTimeout(function () {
        loadingScreen.classList.add("fade-out");
    }, 1200);
});
