# GHARGHA STONE Website

Website katalog marmer dan batu alam berbasis HTML, CSS, dan JavaScript.

## Cara menjalankan
1. Ekstrak file ZIP.
2. Buka folder `ghargha_stone_website`.
3. Jalankan `index.html` menggunakan browser, atau gunakan ekstensi Live Server di VS Code.

## Pengaturan wajib sebelum digunakan
Buka `script.js`, lalu ubah:
`const WHATSAPP_NUMBER = "6281200000000";`
menjadi nomor WhatsApp bisnis Anda (format internasional, tanpa + atau spasi).

Ubah juga nomor WhatsApp, email, alamat workshop, Instagram, profil perusahaan, spesifikasi produk, dan foto sesuai data asli perusahaan. Nilai MOQ contoh saat ini adalah 1 unit untuk semua produk; sesuaikan properti `moq` di `script.js` dengan kebijakan resmi perusahaan. Pilihan Sea Freight dan Air Freight merupakan opsi informasi; biaya, jadwal, dan ketersediaan perlu dikonfirmasi saat penawaran.

## Fitur
- Responsive desktop dan mobile
- Logo SVG GHARGHA STONE
- Pilihan Bahasa Indonesia dan Inggris
- Filter kategori produk
- Detail produk dan spesifikasi
- Tombol pemesanan WhatsApp
- Form Request for Quotation (RFQ) ke WhatsApp, termasuk jumlah pesanan dan pilihan pengiriman
- Informasi MOQ (minimum order quantity) pada detail produk dan validasi jumlah pesanan
- Pilihan pengiriman Sea Freight (laut), Air Freight (udara), atau konsultasi
- Custom order, gallery, workshop, export information
- Unduh Company Profile dan Product Catalog PDF (template awal)

## Catatan
Foto menggunakan URL Unsplash sehingga membutuhkan koneksi internet. PDF yang disertakan merupakan template awal dan perlu disesuaikan dengan data resmi perusahaan. Form RFQ dikirim melalui WhatsApp, belum menggunakan database/backend.
