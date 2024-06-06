const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
async function main() {
  await prisma.disease.createMany({
    data: [
      {
        id: 1,
        name: "Cacar Air",
        label: "cacar-air",
        image: "",
        description:
          "Cacar air adalah infeksi virus yang menyebabkan ruam kulit gatal dan lepuh berisi cairan. Penting untuk menjaga kebersihan kulit dan menghindari menggaruk lepuh untuk mencegah infeksi sekunder. Konsultasikan dengan dokter untuk pengobatan lebih lanjut, termasuk obat antipruritus dan antivirus jika diperlukan",
        latinName: "Varicella zoster",
      },
      {
        id: 2,
        name: "Jamur Kuku",
        label: "jamur-kuku",
        image: "",
        description:
          "Ini adalah jamur kuku. Infeksi jamur pada kuku dapat menyebabkan kuku menjadi tebal, rapuh, dan berubah warna. Perawatan meliputi menjaga kebersihan kaki, menggunakan krim atau obat antijamur topikal, dan dalam beberapa kasus, obat antijamur oral. Disarankan untuk konsultasi dengan dokter untuk mendapatkan diagnosis dan pengobatan yang tepat.",
        latinName: "Onikomikosis",
      },
      {
        id: 3,
        name: "Jerawat",
        label: "jerawat",
        image: "",
        description:
          "Ini adalah jerawat. Jerawat adalah kondisi kulit yang umum terjadi karena penyumbatan pori-pori oleh minyak dan sel kulit mati. Perawatan meliputi menjaga kebersihan kulit, menggunakan pembersih wajah yang sesuai, dan produk perawatan jerawat seperti benzoyl peroxide atau salicylic acid. Untuk kasus yang lebih parah, konsultasikan dengan dokter kulit untuk perawatan lebih lanjut seperti retinoid atau antibiotik.",
        latinName: "Acne vulgaris",
      },
      {
        id: 4,
        name: "Kurap",
        label: "kurap",
        image: "",
        description:
          "Ini adalah kurap. Kurap adalah infeksi jamur yang menyebabkan ruam melingkar berwarna merah dengan tepi yang lebih menonjol. Penting untuk menjaga kebersihan dan menghindari kontak kulit dengan orang lain untuk mencegah penyebaran. Pengobatan meliputi penggunaan krim atau salep antijamur. Jika infeksi menyebar atau tidak membaik, segera konsultasikan dengan dokter.",
        latinName: "Tinea Corporis",
      },
      {
        id: 5,
        name: "Kutu Air",
        label: "kutu-air",
        image: "",
        description:
          "Ini adalah kutu air. Kutu air adalah infeksi jamur yang biasanya terjadi di antara jari-jari kaki. Penting untuk menjaga kaki tetap kering dan bersih, mengganti kaus kaki secara teratur, dan menggunakan bedak antijamur. Pengobatan meliputi krim atau salep antijamur. Jika gejala tidak membaik, konsultasikan dengan dokter untuk pengobatan lebih lanjut.",
        latinName: "Athlete's foot",
      },
    ],
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
