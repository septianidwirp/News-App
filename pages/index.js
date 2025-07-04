import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home() {
  const articles = [
    {
      id: "1",
      title: "Sprei Rumbai Bonita: Ubah Kamar Tidurmu Jadi Lebih Mewah ala Hotel Bintang Lima",
      imageUrl:
        "https://bonitasprei.id/assets/img/820fc-product-banner.png",
      content: `Ingin punya kamar semewah hotel bintang 5? Simak tips dekorasi menggunakan sprei rumbai Bonita yang elegan, terjangkau, dan bikin kamar makin estetik. `,
    },
    {
      id: "2",
      title: "Berapa Macam Ukuran Bed Cover?",
      imageUrl:
        "https://bonitasprei.id/assets/img/upload/3_2_bed_cover_Bonita.png",
      content: `Saat akan membeli bed cover banyak pembeli melakukan kesalahan dalam menentukan ukuran. Sebab, dimensi bed cover dengan selimut dan kasur sendiri cukup berbeda, meskipun memiliki sebutan/nama ukuran yang sama. `,
    },
    {
      id: "3",
      title: "Perlengkapan Bed Cover Bagus",
      imageUrl:
        "https://bonitasprei.id/assets/img/article/12707-3.apa-sih-fungsi-bed-cover.png",
      content: `Kamu bisa langsung menyimak apa saja perlengkapan bed cover dan tempat tidur yang nyaman ala hotel.`,
    },
  ]; //

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="mx-auto flex flex-col max-w-[1440px] py-24 px-5 lg:px-20 items-center gap-14">
        <h2 className="text-4xl font-bold text-black text-center">
          Blog &amp; Berita Terbaru
        </h2>

        <div className="flex items-center gap-2 w-full">
          <p className="text-black font-medium">
            <strong>Filter :</strong>
          </p>
          <form>
            <select
              name="brand"
              className="bg-neutral-200 text-black p-2 rounded-lg cursor-pointer"
              onChange={(e) => handleFilterChange(e.target.value)}
            >
              <option value="">All</option>
              <option value="bonita">Bonita</option>
              <option value="viona">Viona</option>
            </select>
          </form>
        </div>

        <div className="flex flex-col w-full lg:grid lg:grid-cols-2 gap-x-8 gap-y-16">
          {articles.map((article) => (
            <div
              key={article.id}
              className="flex flex-col xs:flex-row lg:flex-col xl:flex-row gap-x-6 gap-y-[19px]"
            >
              <img
                className="rounded-2xl w-full xs:w-[238px] lg:w-full xl:w-[238px] h-auto xs:h-[220px] lg:h-auto xl:h-[220px] aspect-[238/220] xs:aspect-auto lg:aspect-[238/220] object-cover"
                src={article.imageUrl}
                alt={article.title}
              />
              <div className="flex flex-col items-start gap-6">
                <div className="flex flex-col gap-[5px]">
                  <h5 className="text-xl font-semibold text-black">
                    {article.title}
                  </h5>
                  <h6 className="text-neutral-500">{article.content}</h6>
                </div>
                <Link href={`/articles/${article.id}`}>
                  <span className="inline-block px-6 py-2 border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition cursor-pointer">
                    Lihat Detail
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
