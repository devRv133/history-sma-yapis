/* File Logika JavaScript Dinamis & Interaktif */
console.log("Website Arsip Sejarah Sekolah berhasil dimuat dengan fitur hidup!");

window.addEventListener("load", function () {
    // 1. Logika Sembunyikan Loading Screen
    const loadingScreen = document.getElementById("loading-screen");
    setTimeout(function () {
        loadingScreen.classList.add("fade-out");
    }, 1200);

    // 2. Dynamic Greeting Berdasarkan Waktu
    const greetingElement = document.getElementById("dynamicGreeting");
    const hour = new Date().getHours();
    let timeGreeting = "Jejak Langkah & Cerita Perjalanan SMA Yapis";

    if (hour >= 4 && hour < 11) {
        timeGreeting = "✨ Selamat Pagi! Cihuyy";
    } else if (hour >= 11 && hour < 15) {
        timeGreeting = "☀️ Selamat Siang! Cihuyy";
    } else if (hour >= 15 && hour < 18) {
        timeGreeting = "⛅ Selamat Sore! Cihuyy";
    } else {
        timeGreeting = "🌙 Selamat Malam! Siswa tidur besok kerja tugas ";
    }
    if (greetingElement) {
        greetingElement.textContent = timeGreeting;
    }
});

// 3. Jam Digital Real-Time di Footer
function updateLiveClock() {
    const clockElement = document.getElementById("liveClock");
    if (clockElement) {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
}
setInterval(updateLiveClock, 1000);
updateLiveClock();

// 4. Scroll Progress Bar & Tombol Kembali ke Atas
const scrollProgress = document.getElementById("scrollProgress");
const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", function () {
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const currentScroll = window.scrollY;
    
    // Hitung persentase scroll
    const progress = (currentScroll / totalHeight) * 100;
    if (scrollProgress) {
        scrollProgress.style.width = progress + "%";
    }

    // Tampilkan/Sembunyikan tombol Back to Top
    if (currentScroll > 300) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});

if (backToTopBtn) {
    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// 5. Fitur Salin Tautan (Share Button) & Toast Notification
const shareBtn = document.getElementById("shareBtn");
const toast = document.getElementById("toastNotification");

function showToast(message) {
    if (toast) {
        toast.textContent = message;
        toast.classList.add("show");
        setTimeout(function () {
            toast.classList.remove("show");
        }, 3000);
    }
}

if (shareBtn) {
    shareBtn.addEventListener("click", function () {
        const currentUrl = window.location.href;
        navigator.clipboard.writeText(currentUrl).then(() => {
            showToast("🔗 Tautan web berhasil disalin! Bagikan ke temanmu 🎉");
        }).catch(err => {
            showToast("Gagal menyalin tautan.");
        });
    });
}
