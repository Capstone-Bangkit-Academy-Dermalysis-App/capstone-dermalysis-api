const tf = require("@tensorflow/tfjs-node");
const InputError = require("../exceptions/InputError");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const predictClassification = async (model, image) => {
  try {
    console.log("start inference");
    const tensor = tf.node
      .decodeJpeg(image, 3)
      .resizeBilinear([416, 416])
      .expandDims(0)
      .toFloat()
      .div(tf.scalar(255));
    // console.log(tensor);
    const prediction = await model.predict(tensor);
    // console.log(prediction);
    const score = await prediction.data();
    console.log(score);

    const confidenceScore = Math.max(...score) * 100;

    const classes = ["cacar-air", "jamur-kuku", "jerawat", "kurap", "kutu-air"];
    const classresult = await prisma.disease.findMany({
      select: {
        label: true,
      },
    });
    console.log(classresult);

    const classResult = tf.argMax(prediction, 1).dataSync()[0];
    const label = classes[classResult];

    let suggestion;

    if (label === "cacar-air") {
      suggestion =
        "Ini adalah cacar air. Cacar air adalah infeksi virus yang menyebabkan ruam kulit gatal dan lepuh berisi cairan. Penting untuk menjaga kebersihan kulit dan menghindari menggaruk lepuh untuk mencegah infeksi sekunder. Konsultasikan dengan dokter untuk pengobatan lebih lanjut, termasuk obat antipruritus dan antivirus jika diperlukan.";
    } else if (label === "jamur-kuku") {
      suggestion =
        "Ini adalah jamur kuku. Infeksi jamur pada kuku dapat menyebabkan kuku menjadi tebal, rapuh, dan berubah warna. Perawatan meliputi menjaga kebersihan kaki, menggunakan krim atau obat antijamur topikal, dan dalam beberapa kasus, obat antijamur oral. Disarankan untuk konsultasi dengan dokter untuk mendapatkan diagnosis dan pengobatan yang tepat.";
    } else if (label === "jerawat") {
      suggestion =
        "Ini adalah jerawat. Jerawat adalah kondisi kulit yang umum terjadi karena penyumbatan pori-pori oleh minyak dan sel kulit mati. Perawatan meliputi menjaga kebersihan kulit, menggunakan pembersih wajah yang sesuai, dan produk perawatan jerawat seperti benzoyl peroxide atau salicylic acid. Untuk kasus yang lebih parah, konsultasikan dengan dokter kulit untuk perawatan lebih lanjut seperti retinoid atau antibiotik.";
    } else if (label === "kurap") {
      suggestion =
        "Ini adalah kurap. Kurap adalah infeksi jamur yang menyebabkan ruam melingkar berwarna merah dengan tepi yang lebih menonjol. Penting untuk menjaga kebersihan dan menghindari kontak kulit dengan orang lain untuk mencegah penyebaran. Pengobatan meliputi penggunaan krim atau salep antijamur. Jika infeksi menyebar atau tidak membaik, segera konsultasikan dengan dokter.";
    } else if (label === "kutu-air") {
      suggestion =
        "Ini adalah kutu air. Kutu air adalah infeksi jamur yang biasanya terjadi di antara jari-jari kaki. Penting untuk menjaga kaki tetap kering dan bersih, mengganti kaus kaki secara teratur, dan menggunakan bedak antijamur. Pengobatan meliputi krim atau salep antijamur. Jika gejala tidak membaik, konsultasikan dengan dokter untuk pengobatan lebih lanjut.";
    }
    return { confidenceScore, label, suggestion };
  } catch (error) {
    throw new InputError(
      `Terjadi kesalahan dalam melakukan prediksi ${error.message}`
    );
  }
};

module.exports = predictClassification;
