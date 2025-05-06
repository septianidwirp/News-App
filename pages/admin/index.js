import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await fetch('/api/articles');
      const data = await res.json();
      setArticles(data);
    };
    fetchArticles();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <Link href="/admin/create" className="text-blue-600 hover:underline mb-4 block">
        Create New Article
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold">{article.title}</h2>
            <p className="text-gray-700 mt-2">{article.content.slice(0, 100)}...</p>
            <div className="mt-4 flex space-x-4">
              <Link href={`/admin/edit/${article.id}`} className="text-blue-600 hover:underline">
                Edit
              </Link>
              <a
                href="#"
                onClick={() => deleteArticle(article.id)}
                className="text-red-600 hover:underline"
              >
                Delete
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  async function deleteArticle(id) {
    const res = await fetch(`/api/articles/${id}`, {
      method: 'DELETE',
    });
    if (res.ok) {
      setArticles(articles.filter((article) => article.id !== id));
    }
  }
}
