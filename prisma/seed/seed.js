const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
async function main() {
  await prisma.disease.createMany({
    data: [
      {
        id: 1,
        name: "Cacar Air",
        label: "cacar-air",
        image:
          "https://storage.googleapis.com/bangkit-capstone-dermalysis-prod/assets/Cacar%20air/gambar-2-alodokter.jpg",
        description:
          "Varicella atau yang dikenal juga secara awam sebagai cacar air adalah penyakit infeksi virus yang disebabkan oleh virus Varicella Zoster. Gejala utamanya adalah ruam atau kemerahan di kulit yang menyerupai jerawat atau sengatan serangga dan terasa sangat gatal. Virus ini ditularkan melalui udara (lewat percikan ludah pada saat penderita batuk atau bersin) dan melalui kontak langsung dengan cairan dari lepuhan atau ruam.",
        latinName: "Varicella zoster",
        cause: {
          section1:
            "Penyebab utama cacar air adalah infeksi virus Varicella zoster. Virus tersebut dapat menyebar melalui kontak langsung dengan ruam. Selain itu, penularan virus Varicella zoster juga dapat menyebar ketika seseorang dengan cacar air batuk atau bersin dan terhirup oleh seseorang melalui droplet di udara.Jika seseorang tertular, maka infeksi akan dimulai dengan munculnya ruam. Kemudian, ruam tersebut berubah menjadi bintil merah berisi cairan yang terasa gatal, dan mengering dalam jangka waktu tertentu. Bintil tersebut kemudian menjadi koreng dan terkelupas dalam waktu 7 hingga 14 hari.",
          section2: "",
        },
        symptom: {
          section1:
            "Cacar air adalah penyakit yang ditandai dengan ruam gatal berisi air. Sebelum gejala lain berkembang, ruam biasanya menetap di tubuh pengidap selama 7-21 hari.Setelah 48 terinfeksi, pengidap sudah bisa menularkan kepada orang lain, bahkan sebelum gejala berupa ruam kulit muncul. Di fase awal sebelum munculnya ruam, gejala dari penyakit tersebut ditandai dengan demam, sakit kepala.kehilangan selera makan, nyeri otot, rasa lelah berlebihan, atau mual. Setelah 1-2 hari mengalami gejala tersebut, sejumlah ruam mulai muncul dan berkembang. Ruam tersebut mengalami 3 fase perkembangan, seperti:          ",
          section2: [
            "Muncul benjolan merah atau merah muda di seluruh tubuh",
            "Benjolan tersebut kemudian berubah menjadi lepuhan berisi cairan",
            "Ketika mulai sembuh, benjolan menjadi pecah, kering, dan berkerak",
          ],
        },
        treatment: [
          {
            zatAktif: "Zat Aktif: Acyclovir",
            tipe: "Bentuk Sediaan : Krim",
            merk: ["Acyclovir", "Azohir"],
          },
          {
            zatAktif: "Zat Aktif: Valasiklovir",
            tipe: "Bentuk Sediaan : Tablet",
            merk: ["Herclov", "Iclovar", "Inlacyl"],
          },
        ],
      },
      {
        id: 2,
        name: "Jamur Kuku",
        label: "jamur-kuku",
        image:
          "https://storage.googleapis.com/bangkit-capstone-dermalysis-prod/assets/Jamur%20Kuku/fungal-nail-infection-750-3cb54cc0d4d76f3e45070c2d0377e624_600x400.jpg",
        description:
          "Infeksi jamur kuku atau dalam bahasa medis Tinea unguium adalah kondisi umum yang dimulai dengan bintik atau kuning di bawah ujung kuku tangan atau kuku jari kaki. Infeksi jamur yang parah dapat menyebabkan kuku menghitam, menebal, dan hancur di tepi. Infeksi ini dapat mempengaruhi beberapa kuku tetapi biasanya tidak semua kuku terinfeksi. Jika terinfeksi jamur pada kuku masih tergolong ringan maka tidak membutuhkan pengobatan. ",
        latinName: "Tinea unguium",
        cause: {
          section1:
            "Jamur Kuku (Onychomycosis) disebabkan oleh dermatofita yang dikenal sebagai tinea unguium. Dermatofit yang terlibat termasuk Trichophyton rubrum, T. mentagrophytes T. soudanense, T. tonsurans, Epidermophyton floccosum.  Non-dermatofita yang terlibat sebagai penyebab Jamur Kuku adalah Hendersonula toruloidea dan Scytalidium hyalinum, Aspergillus sp, Acremonium sp, Fusarium oxysporum, Scopulariopsis brevicaulis dan spesies candida yang terlibat terutama pada orang dengan penurunan daya tahan tubuh (misal HIV) adalah C. albicans.",
          section2: "",
        },
        symptom: {
          section1:
            "Terdapat beberapa tipe gejala penyakit ini. Subtipe klinis yang paling umum dari Jamur Kuku (Onychomycosis)  adalah Onychomycosis subungual lateral distal (DSLO). Pada kondisi ini ujung kuku menebal dan rapuh. Pada tipe  Onychomycosis  dangkal putih (SWO) terdapat seperti tumpukan kapur  putih pada permukaan lempeng kuku yang terkena.Pada Onychomycosis subungual proksimal (PSO) terjadi kerusakan pada bantalan kuku. Tipe ini sering kali dikaitkan dengan AIDS dan mungkin menyebar ke dalam darah. Adapun Onychomycosis dystrophic total (TD) memiliki ciri bentuk penebalan kulit di bawah kuku hingga lempeng kuku hancur yang abnormal dan kuku terangkat.",
          section2: "",
        },
        treatment: [
          {
            zatAktif: "Zat Aktif: Ketoconazole",
            tipe: "Bentuk Sediaan : Krim",
            merk: ["Zoralin", "Mycoral", "Anfuhex"],
          },
          {
            zatAktif: "Zat Aktif: Miconazole",
            tipe: "Bentuk Sediaan : Krim",
            merk: ["Thecart", "Kalpanax", "Fungares"],
          },
          {
            zatAktif: "Zat Aktif: Clotrimazole",
            tipe: "Bentuk Sediaan : Krim",
            merk: ["Fungiderm", "Bernesten", "Hufaderm"],
          },
        ],
      },
      {
        id: 3,
        name: "Jerawat",
        label: "jerawat",
        image:
          "https://storage.googleapis.com/bangkit-capstone-dermalysis-prod/assets/Jerawat/Foto-by-Alomedika.jpg",
        description:
          "Jerawat merupakan salah satu masalah pada kulit yang disebabkan oleh peningkatan produksi sebum, pengelupasan keratinosit, in amasis erta pertumbuhan bakteri. Masalah ini sering dialami oleh banyak orang dan berdampak pada penurunan kepercayaan diri, menimbulkan rasa tidak nyaman, serta berkurangnya interaksi sosial. Staphylococcus aureus dan Propionibacterium acnes merupakan bakteri yang sering menginfeksi jerawat.",
        latinName: "Acne vulgaris",
        cause: {
          section1:
            "Beberapa kondisi yang memicu munculnya kondisi ini, antara lain:",
          section2: [
            "Produksi sebum berlebih, yaitu zat yang merupakan hasil produksi kelenjar minyak untuk mencegah kulit kering.",
            "Sumbatan pada folikel rambut oleh campuran sel kulit mati dan sebum",
            "Bakteri jenis Propionibacterium acnes yang berkembang, menyumbat folikel rambut, serta menyebabkan peradangan",
            "Faktor genetik atau keturunan. Kamu bisa mengalaminya jika salah satu orangtua memiliki masalah jerawat.",
            "Folikel yang tersumbat bisa membengkak dan membentuk komedo putih atau komedo hitam jika terpapar dengan udara luar. Kondisi tersebut jangan dianggap remeh. Sebab, bisa berkembang menjadi pustula, papula, nodul, atau bahkan kista, apabila terkontaminasi oleh bakteri kulit.",
            "Hormon, yaitu saat aktivitas hormon androgen berlebih atau saat terjadi perubahan hormon saat masa menstruasi.",
            "Penggunaan kosmetik yang tidak selalu cocok pada kulit setiap orang.",
            "Stres mempengaruhi gaya hidup seseorang, termasuk dalam pola makan yang dapat memicu jerawat.",
          ],
        },
        symptom: {
          section1:
            "Ciri ciri jerawat adalah munculnya beberapa gejala umum, seperti:",
          section2: [
            "Benjolan berwarna kemerahan atau kuning (karena mengandung nanah).",
            "Benjolan kecil (papul) yang muncul di atas kulit.",
            "Sensasi panas atau terbakar akibat adanya peradangan.",
            "Timbul rasa gatal pada benjolan.",
            "Kondisi ini juga rentan mengalami peradangan apabila kamu sering menyentuhnya atau bahkan dipecahkan secara paksa.",
            "Kondisi yang mengalami peradangan rentan mengalami kondisi berikut:",
            "Pustula, yaitu benjolan kecil yang di ujungnya terdapat nanah.",
            "Papula, yaitu benjolan kecil kemerahan yang terasa nyeri.",
            "Nodul, yaitu benjolan keras yang terbentuk di bawah permukaan kulit dan dapat terasa nyeri.",
            "Kista, yaitu benjolan besar yang terbentuk di bawah permukaan kulit yang berisi nanah dan rasa nyeri.",
          ],
        },
        treatment: [
          {
            zatAktif: "Zat Aktif: Asam Salisilat",
            tipe: "Bentuk Sediaan: Serum",
            merk: ["Skintific", "Avoskin", "Somethinc"],
          },
          {
            zatAktif: "Zat Aktif: Asam Azelat",
            tipe: "Bentuk Sediaan: Krim/Gel",
            merk: ["Aza 20", "Zelface", "Avfaza Acne Foundation"],
          },
          {
            zatAktif: "Zat Aktif: Benzoil Peroksida",
            tipe: "Bentuk Sediaan: Salep",
            merk: ["Benzolac", "Benzolac Cl"],
          },
        ],
      },
      {
        id: 4,
        name: "Kurap",
        label: "kurap",
        image:
          "https://storage.googleapis.com/bangkit-capstone-dermalysis-prod/assets/Kurap/668461_720.jpg",
        description:
          "Kurap adalah infeksi jamur yang menyebabkan ruam melingkar berwarna merah dengan tepi yang lebih menonjol. Penting untuk menjaga kebersihan dan menghindari kontak kulit dengan orang lain untuk mencegah penyebaran. Pengobatan meliputi penggunaan krim atau salep antijamur. Jika infeksi menyebar atau tidak membaik, segera konsultasikan dengan dokter.",
        latinName: "Tinea Corporis",
        cause: {
          section1:
            "Penyebab kurap adalah jamur yang tumbuh dan berkembang biak dengan cepat pada kulit manusia. Setidaknya, terdapat tiga jenis jamur yang bisa menyebabkan penyakit kurap, yaitu Trichophyton, Epidermophyton, dan Microsporum. Kurap sendiri termasuk jenis infeksi kulit yang mudah menular. Adapun penularan dapat terjadi melalui beberapa cara berikut:",
          section2: [
            "Melakukan kontak langsung dengan pengidap kurap.",
            "Pernah melakukan kontak langsung dengan hewan yang sudah terinfeksi.",
            "Melakukan kontak dengan benda yang sudah terkontaminasi oleh jamur.",
            "Melakukan kontak langsung dengan tanah yang terkontaminasi oleh spora jamur.",
          ],
        },
        symptom: {
          section1:
            "Gejala kurap dimulai dengan munculnya area bersisik dengan warna kemerahan pada kulit. Ruam ini dapat meluas berbentuk melingkar yang mirip dengan cincin. Warna bagian dalam lingkaran akan terlihat lebih pudar dibandingkan dengan bagian tepinya dan dibatasi oleh bintil berwarna merah. Selain itu, gejala kurap tidak langsung terlihat saat pertama kali kulit terkena jamur. Diperlukan waktu setidaknya hingga 2 minggu sebelum kamu menyadari gejalanya. Beberapa tahapan gejala kurap yang dapat kamu lihat yaitu:  ",
          section2: [
            "Tahap awal. Selama tahap ini, kamu mungkin melihat adanya bercak kulit yang berubah warna dan teriritasi. Terkadang penampilan kulit hanya tampak sangat kering dan bersisik, yang mungkin tidak terlihat seperti kurap.",
            "Tahap kedua. Kamu akan melihat adanya lesi yang mulai membesar. Bagian tengah rumah atau lesi menyerupai kulit sehat, tapi di area sekitarnya terlihat bersisik. a pertama. Jika tidak, itu bisa menyebar dan tumbuh.",
          ],
        },
        treatment: [
          {
            zatAktif: "Zat Aktif: Ketokonazol",
            tipe: "Bentuk sediaan: Salep/Krim",
            merk: ["Zoralin", "Mycoral", "Anfuhex"],
          },
          {
            zatAktif: "Zat Aktif: Miconazole",
            tipe: "Bentuk sediaan: Salep/Krim",
            merk: ["Thecart", "Kalpanax", "Fungares"],
          },
          {
            zatAktif: "Zat Aktif: Clotrimazole",
            tipe: "Bentuk sediaan: Salep/Krim",
            merk: ["Fungiderm", "Bernesten", "Hufaderm"],
          },
        ],
      },
      {
        id: 5,
        name: "Kutu Air",
        label: "kutu-air",
        image:
          "https://storage.googleapis.com/bangkit-capstone-dermalysis-prod/assets/Kutu%20Air/6321992e645eb.jpg",
        description:
          "Kutu air atau kerap juga disebut athlete’s foot merupakan penyakit tinea pedis yang disebabkan dermatofita terutama Trichophyton rubrum, Trichophyton mentagrophytes dan Epidermophyton floccosum. Penyakit ini dapat menyebabkan ruam kemerahan yang bersisik dan gatal di kulit kaki. Penyakit ini dapat menular dan dapat dipengaruhi oleh faktor kaki yang sering basah atau lembab akibat berkeringat akibat memakai sepatu boots atau sepatu ketat.",
        latinName: "Athlete's foot",
        cause: {
          section1:
            "Penyebab kutu air atau tinea pedis adalah berbagai jenis jamur. Namun, penyebab yang paling umum ditemui adalah jenis dermatophytes, yaitu jenis jamur yang juga menjadi penyebab kurap. Jenis jamur ini hidup di lingkungan yang bersuhu hangat dan lembap, seperti kamar mandi dan kolam renang. Penularan jamur ini dapat melalui sentuhan langsung dengan kulit yang terinfeksi atau benda yang terkontaminasi. Selanjutnya, jamur kutu air akan menetap dan berkembang biak pada permukaan kulit, dan dapat masuk ke dalam kulit dan menimbulkan infeksi, jika terdapat celah pada kulit. Berikut tiga jamur dermatofit yang paling umum menyebabkan kutu air:",
          section2: [
            "Trichophyton (T.) rubrum.",
            "T. interdigitale, sebelumnya disebut T. mentagrophytes var. Interdigital.",
            "Epidermophyton floccosum.",
          ],
        },
        symptom: {
          section1: "Beberapa gejala kutu air yang umum terjadi, antara lain: ",
          section2: [
            "Iritasi seperti gatal, sensasi panas, terbakar, dan menyengat di antara jari-jari kaki.",
            "Area kulit kaki yang terkena tampak berwarna kemerahan.",
            "Bagian samping dan telapak kaki juga terasa sangat gatal.",
            "Kuku kaki mengalami perubahan warna, menjadi lebih tebal, dan mudah rapuh.",
            "Kuku kaki terluka bahkan tampak lepas tempatnya semula.",
            "Kulit kaki terlihat pecah-pecah dan mengelupas, terutama di antara jari kaki dan pada telapak kaki.",
            "Kulit melepuh dan lecet akibat gatal pada kaki.",
            "Kulit tampak lebih kering pada area telapak atau sisi samping kaki.",
            "Timbul cairan dari area kulit kaki yang ditumbuhi jamur.",
          ],
        },
        treatment: [
          {
            zatAktif: "Zat aktif: Ketokonazol",
            tipe: "Bentuk sediaan: Salep/Krim",
            merk: ["Zoralin", "Mycoral", "Anfuhex"],
          },
          {
            zatAktif: "Zat aktif: Miconazole",
            tipe: "Bentuk sediaan: Salep/Krim",
            merk: ["Thecart", "Kalpanax", "Fungares"],
          },
          {
            zatAktif: "Zat aktif: Clotrimazole",
            tipe: "Bentuk sediaan: Salep/Krim",
            merk: ["Fungiderm", "Bernesten", "Hufaderm"],
          },
        ],
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
