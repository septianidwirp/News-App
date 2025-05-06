import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function Home() {
  const articles = [
    {
      id: '1',
      title: 'Berapa Macam Ukuran Bed Cover?',
      imageUrl: 'https://bonitainterior.com/wp-content/uploads/2023/05/ukuran-bed-cover.jpg',
      content: `Agar tak salah beli, kamu dapat menyimak 6 macam ukuran bed cover dan karakteristiknya di bawah ini.`
    },
    {
      id: '2',
      title: 'Apa Sih Fungsi Bed Cover?',
      imageUrl: 'https://bonitainterior.com/wp-content/uploads/2023/05/fungsi-bed-cover.jpg',
      content: `Biar kamu tak salah, kali ini Bonita akan mengajak kamu untuk mengenali apa saja fungsi bed cover melalui ulasan berikut ini.`
    },
    {
      id: '3',
      title: 'Perlengkapan Bed Cover Bagus Ala Hotel',
      imageUrl: 'https://bonitainterior.com/wp-content/uploads/2023/05/bed-cover-hotel.jpg',
      content: `Kamu bisa langsung menyimak apa saja perlengkapan bed cover dan tempat tidur yang nyaman ala hotel.`
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-black text-center mb-10">Blog & Berita Terbaru</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 overflow-hidden"
            >
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
                <p className="text-gray-700 mb-4">{article.content}</p>
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
