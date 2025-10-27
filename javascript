document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.desktop-nav');
    const buyNowMobile = document.getElementById('buyNowMobile');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // 🍔 Fungsi Toggle Menu Navigasi Mobile
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        // Mengubah ikon hamburger menjadi X dan sebaliknya
        const icon = menuToggle.querySelector('i');
        if (nav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // 🛒 Fungsi Tombol 'Beli Sekarang' Mobile
    buyNowMobile.addEventListener('click', function() {
        // Logika sederhana: Arahkan ke halaman checkout atau produk utama
        alert('🎉 Selamat! Anda akan diarahkan ke halaman Checkout/Promo Spesial Natal!');
        // Contoh: window.location.href = '#checkout';
    });

    // ✨ Fungsi Tombol 'Tambah ke Keranjang'
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.parentElement.querySelector('h3').textContent;
            
            // Animasi visual saat produk ditambahkan
            this.textContent = '✔️ Ditambahkan!';
            this.style.backgroundColor = '#1E8449'; // Hijau tua

            setTimeout(() => {
                this.textContent = 'Tambah ke Keranjang';
                this.style.backgroundColor = '#27AE60'; // Kembali ke hijau normal
            }, 1000);

            // Tambahkan logika keranjang nyata di sini (misalnya, update counter keranjang)
            console.log(`${productName} telah ditambahkan ke keranjang.`);
        });
    });

    // ❄️ Animasi Salju Ringan (Opsional: menambah nuansa Natal)
    function createSnowflake() {
        const snowflake = document.createElement('i');
        snowflake.classList.add('fas', 'fa-snowflake');
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // 2-5 detik
        snowflake.style.opacity = Math.random();
        snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'; // 10-20px
        
        // Atur posisi awal di atas layar
        snowflake.style.top = '-50px';
        
        document.body.appendChild(snowflake);

        // Hapus kepingan salju setelah animasi selesai
        setTimeout(() => {
            snowflake.remove();
        }, parseFloat(snowflake.style.animationDuration) * 1000);
    }

    // Hanya buat salju jika layar cukup besar (untuk performa)
    if (window.innerWidth > 768) {
        setInterval(createSnowflake, 500);
        // Tambahkan CSS untuk kepingan salju di style.css
        const snowStyle = document.createElement('style');
        snowStyle.innerHTML = `
            .fa-snowflake {
                position: fixed;
                color: white; /* Salju Putih di latar belakang gelap */
                z-index: 99;
                pointer-events: none;
                animation: fall linear infinite;
                text-shadow: 0 0 5px rgba(0,0,0,0.5);
            }
            @keyframes fall {
                to {
                    transform: translateY(100vh);
                }
            }
        `;
        document.head.appendChild(snowStyle);
    }
});