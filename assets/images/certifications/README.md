# Certifications Images

Folder ini berisi gambar-gambar sertifikat yang akan ditampilkan di portfolio.

## Format Gambar

- **Ukuran yang disarankan**: 600x400 pixels
- **Format**: JPG atau PNG
- **Ukuran file**: Maksimal 500KB per gambar untuk performa optimal

## Cara Menambahkan Sertifikat Baru

1. **Simpan gambar sertifikat** ke folder ini dengan nama yang jelas (contoh: `aws-certified.jpg`)

2. **Edit file** `js/data.js` dan tambahkan sertifikat baru di array `certifications`:

```javascript
{
    id: 7,  // ID berikutnya secara berurutan
    title: "Nama Sertifikat",
    issuer: "Penerbit Sertifikat",
    date: "Bulan Tahun",
    credentialId: "ID-KREDENSIAL",
    link: "https://link-ke-verifikasi-sertifikat.com",
    image: "assets/images/certifications/nama-file-gambar.jpg",
    skills: ["Skill 1", "Skill 2", "Skill 3"]
}
```

3. **Refresh halaman** untuk melihat perubahan

## Contoh Sertifikat yang Sudah Ada

Saat ini template sudah include 6 contoh sertifikat:

1. AWS Certified Solutions Architect
2. Meta Front-End Developer Professional Certificate
3. Google Cloud Professional Developer
4. MongoDB Developer Certification
5. Full Stack Web Development (freeCodeCamp)
6. Docker Certified Associate

Silakan ganti dengan sertifikat Anda sendiri!

## Tips

- Gunakan screenshot atau scan sertifikat dengan kualitas baik
- Crop gambar agar fokus pada logo dan nama sertifikat
- Optimalkan ukuran gambar menggunakan tools seperti TinyPNG atau ImageOptim
