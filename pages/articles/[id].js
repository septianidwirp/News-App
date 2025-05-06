import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Link from "next/link";

const articles = [
  {
    id: "1",
    title:
      "Sprei Rumbai Bonita: Ubah Kamar Tidurmu Jadi Lebih Mewah ala Hotel Bintang Lima",
    imageUrl: "https://bonitasprei.id/assets/img/820fc-product-banner.png",
    content: `Pernahkah kamu membayangkan bisa tidur di kamar yang tampilannya elegan seperti hotel berbintang, tapi tetap nyaman dan hangat seperti rumah sendiri? Ternyata, kamu nggak perlu renovasi besar-besaran atau beli perabot mahal untuk mewujudkannya. Cukup mulai dari mengganti sprei tempat tidurmu, dan salah satu pilihan terbaik saat ini adalah sprei rumbai Bonita. Yuk, kita kupas kenapa sprei ini bisa jadi kunci tampilan kamar yang lebih mewah!\n
**Apa Sih Sprei Rumbai Bonita Itu?**\n
Sprei rumbai adalah jenis sprei yang dilengkapi dengan aksen rumbai di bagian sampingnya. Aksen ini memberi kesan klasik dan mewah, mirip seperti tempat tidur di hotel premium. Nah, merek Bonita terkenal karena menghadirkan sprei rumbai dengan tampilan yang menarik tapi tetap mengutamakan kenyamanan. Nggak cuma cantik dilihat, sprei ini juga punya kualitas bahan yang bisa diandalkan.\n
**Kenapa Banyak Orang Suka Sprei Rumbai Bonita?**\n
\nSprei rumbai Bonita menjadi incaran banyak orang karena menawarkan berbagai keunggulan, terutama bagi mereka yang menginginkan tampilan kamar yang rapi, nyaman, dan estetik. Dengan rumbai-rumbai di bagian tepinya, sprei ini memberikan kesan mewah dan anggun, seolah-olah sedang menginap di hotel berbintang setiap malam. Selain tampilannya yang elegan, sprei ini juga nyaman digunakan karena terbuat dari bahan lembut yang adem di kulit, sehingga sangat cocok untuk kamu yang memiliki kulit sensitif atau mudah merasa gerah. Tak hanya itu, kualitas bahannya yang tahan lama dan tidak mudah luntur membuat sprei ini menjadi pilihan yang ekonomis dalam jangka panjang, asalkan dirawat dengan benar.\n
**Soal Harga, Apakah Sprei Bonita Mahal?**\n
Memang, dibandingkan sprei biasa, harganya sedikit lebih tinggi. Tapi dengan kisaran **RP.100.000-an**, kamu sudah bisa punya sprei rumbai Bonita yang bisa mengubah suasana kamar jadi lebih elegan. Harga tersebut tergantung dari ukuran dan motif yang kamu pilih. Worth it banget, apalagi kalau kamu ingin suasana baru tanpa keluar banyak biaya untuk dekorasi lainnya.\n
**Gaya Kamar Ala Hotel Bintang 5, Siapa Takut?**\n
Ciri khas kamar hotel bintang lima biasanya ada pada desain yang bersih, warna-warna netral, pencahayaan hangat, dan tekstil berkualitas tinggi. Sprei rumbai Bonita pas banget untuk menunjang konsep ini. Kamu bisa menambahkan beberapa bantal dekoratif, lampu meja yang cantik, atau tirai dengan warna senada. Nggak perlu banyak barang, yang penting serasi dan tertata rapi.\n
**Sprei Rumbai vs Sprei Fitted: Pilih yang Mana?**\n
Sprei rumbai dan sprei fitted memiliki karakteristik yang berbeda, sehingga pilihan tergantung pada gaya dan kebutuhan kamu. Sprei rumbai dilengkapi dengan aksen rumbai di bagian pinggirnya, memberikan sentuhan klasik dan mewah yang cocok untuk kamu yang ingin tampilan kamar lebih elegan dan berkelas. Sementara itu, sprei fitted memiliki karet di ujung-ujungnya, membuatnya lebih praktis dan mudah dipasang, serta memberikan kesan simpel dan minimalis sehingga pas banget untuk kamu yang menyukai kepraktisan. Jadi, kalau kamu ingin kamar yang tampil beda dan terlihat lebih mewah, sprei rumbai bisa jadi pilihan yang tepat.
**Apa Saja Kelebihan Sprei Bonita?**\n
• Desain Bervariasi dan Elegan  \nBonita punya banyak motif, dari floral yang lembut hingga warna polos yang elegan. Kamu tinggal pilih sesuai selera.\n
• Bahan Lembut dan Adem  \nTerbuat dari katun berkualitas yang nggak bikin gerah, tidur pun jadi lebih nyenyak.\n
• Perawatan Gampang  \nMeskipun ada rumbainya, sprei ini mudah dicuci dan nggak rewel dalam perawatan.\n
**Tips Menyulap Kamar Jadi Lebih Mewah**\n
• Mulai dari sprei berkualitas dengan ganti sprei lamamu dengan sprei rumbai Bonita yang tampak premium.\n
• Tambahkan aksen elegan dengan memakai bantal dekoratif, bed cover, atau selimut bertekstur lembut untuk nuansa yang lebih hangat dan mewah.\n
• Atur pencahayaan dengan menggunakan lampu berwarna kuning hangat atau lampu tidur dengan desain klasik.\n
• Rutin membersihkan dan menata ulang kamar agar selalu terlihat cantik meski tanpa banyak dekorasi.\n
**Rekomendasi Warna & Motif Elegan dari Bonita**\n
Kalau kamu masih bingung memilih motif sprei yang cocok, ada beberapa pilihan yang bisa disesuaikan dengan suasana kamar yang kamu inginkan. Motif floral sangat pas untuk menciptakan nuansa kamar yang feminin dan romantis, cocok untuk kamu yang menyukai sentuhan lembut dan manis. Jika lebih suka tampilan yang simpel namun tetap elegan, warna-warna netral seperti putih, abu-abu, atau beige bisa jadi pilihan yang aman dan menenangkan. Sementara itu, untuk kesan yang lebih misterius dan mewah, warna gelap seperti navy atau hitam bisa memberikan sentuhan dramatis yang tetap berkelas.
**Cara Merawat Sprei Rumbai Bonita Agar Tetap Awet**\n
• Cuci dengan air dingin supaya bahan tetap terjaga dan warna nggak cepat pudar.\n
• Gunakan deterjen yang lembut.\n
• Jemur di tempat teduh.\n
• Setrika suhu sendah.

\nBayangin Kamar Kamu Seperti Ini…\n\n
Masuk kamar, lihat kasur rapi dengan rumbai elegan menjuntai ke bawah. Warna sprei pas banget sama dekor kamar. Tidur jadi lebih nyenyak, bangun pagi jadi semangat. Nggak cuma estetik buat dilihat, tapi juga nyaman buat ditidurin.\n

Jadi, kalau kamu ingin mengubah suasana kamar tanpa ribet dan tanpa perlu budget besar, mulailah dari hal kecil seperti mengganti sprei. Dengan memilih sprei rumbai Bonita, kamu bisa mendapatkan kamar yang nggak cuma cantik tapi juga nyaman, elegan, dan terasa seperti hotel bintang lima setiap hari. Sudah siap buat tidur lebih nyenyak dan bangun dalam suasana yang bikin semangat?.
Kamu bisa langsung cari sprei rumbai Bonita di : \n
🛒 Website resmi: bonitasprei.id\n
🛍️ Marketplace kesayanganmu\n
🛍️ Merchan Bonita Seluruh Wilayah Indonesia
✨ Mulai dari Rp100 ribuan, kamar kamu bisa jadi seperti hotel mahal! Nggak perlu mahal, yang penting niat dan pilih produk yang tepat 💖`,
  },
  {
    id: "2",
    title: "Apa Sih Fungsi Bed Cover?",
    imageUrl:
      "https://bonitasprei.id/assets/img/article/7c727-2.berapa-macam-ukuran-bed-cover.png",
    content: `Saat akan membeli bed cover banyak pembeli melakukan kesalahan dalam menentukan ukuran. Sebab, dimensi bed cover dengan selimut dan kasur sendiri cukup berbeda, meskipun memiliki sebutan/nama ukuran yang sama. 

Sama halnya dengan sprei, bed cover hadir dengan berbagai ukuran dan desain. Pengukuran bed cover ini juga dapat dilihat dari berbagai aspek, mulai dari panjang dan lebar, hingga beratnya. 

Selain itu, setiap merek bed cover terkadang memiliki standar masing-masing. Karena itu, kamu perlu dengan cermat memilih bed cover yang tepat untuk mendekorasi kamar tidur.

Nah, agar tak salah beli, kamu dapat menyimak 6 macam ukuran bed cover dan karakteristiknya di bawah ini.`,
  },
  {
    id: "3",
    title: "Perlengkapan Bed Cover Bagus",
    imageUrl:
      "https://bonitasprei.id/assets/img/article/12707-3.apa-sih-fungsi-bed-cover.png",
    content: `Untuk menciptakan suasana tidur senyaman hotel, kamu bisa menambahkan perlengkapan berikut:\n\n- Bed Skirt\n- Comforter\n- Blanket\n- 1st & 2nd Sheet\n- Top Sheet\n- Pillow & Pillowcase\n\nPerpaduan perlengkapan ini menciptakan nuansa premium yang mewah dan nyaman.`,
  },
  {
    id: "4",
    title: "Cara Memilih Bed Cover yang Tepat",
    imageUrl:
      "https://bonitasprei.id/assets/img/820fc-product-banner.png",
    content: `Pemilihan bed cover yang tepat bisa meningkatkan kenyamanan tidur. Berikut adalah beberapa tips:\n\n- Sesuaikan dengan ukuran kasur.\n- Pilih bahan yang nyaman dan mudah perawatannya.\n- Sesuaikan dengan tema kamar tidur agar tampak serasi.`,
  },
  {
    id: "5",
    title: "5 Kesalahan dalam Memilih Bed Cover",
    imageUrl:
      "https://bonitasprei.id/assets/img/upload/3_2_bed_cover_Bonita.png",
    content: `Ada beberapa kesalahan umum yang sering dilakukan saat memilih bed cover, seperti:\n\n- Tidak memperhatikan ukuran kasur.\n- Mengabaikan kualitas bahan.\n- Tidak mempertimbangkan tema kamar.`,
  },
];

export async function getStaticPaths() {
  const paths = articles.map((article) => ({
    params: { id: article.id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const article = articles.find((a) => a.id === params.id);
  return { props: { article } };
}

export default function ArticleDetail({ article }) {
  const related = articles.filter((a) => a.id !== article.id);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Konten Utama */}
          <div className="lg:w-2/3">
            <h1 className="text-4xl font-bold text-black mb-10">
              {article.title}
            </h1>
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-96 object-cover rounded-xl mb-15"
            />
            <div className="text-lg text-gray-800 leading-relaxed">
              {article.content.split("\n").map((line, index) => (
                <p key={index} className="mb-4">
                  {line.split(/(\*\*[^\*]+\*\*)/g).map((chunk, i) => {
                    if (chunk.startsWith("**") && chunk.endsWith("**")) {
                      return (
                        <strong
                          key={i}
                          className="font-semibold text-black text-[25px]"
                        >
                          {chunk.replace(/\*\*/g, "")}
                        </strong>
                      );
                    }
                    return chunk;
                  })}
                </p>
              ))}
            </div>
          </div>

          {/* Related Articles */}
          <div className="lg:w-1/3">
            <div className="bg-white shadow-md rounded-md p-4">
              <h2 className="text-xl font-bold text-black mb-4 border-b-2 border-black inline-block pr-4">
                Related Articles
              </h2>
              {related.slice(0, 4).map((item) => (
                <Link href={`/article/${item.id}`} key={item.id}>
                  <div className="flex gap-4 mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-24 h-16 object-cover rounded-md"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-600">
                        {item.content.slice(0, 50)}...
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
