import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function EditArticle() {
  const [article, setArticle] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchArticle = async () => {
      const res = await fetch(`/api/articles/${id}`);
      const data = await res.json();
      setArticle(data);
    };
    if (id) fetchArticle();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/articles/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: article.title,
        content: article.content,
        imageUrl: article.imageUrl,
      }),
    });

    if (res.ok) {
      router.push('/admin'); // Redirect ke halaman admin setelah sukses
    }
  };

  if (!article) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Edit Article</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700">Title</label>
          <input
            id="title"
            type="text"
            value={article.title}
            onChange={(e) => setArticle({ ...article, title: e.target.value })}
            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700">Content</label>
          <textarea
            id="content"
            value={article.content}
            onChange={(e) => setArticle({ ...article, content: e.target.value })}
            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="imageUrl" className="block text-gray-700">Image URL</label>
          <input
            id="imageUrl"
            type="text"
            value={article.imageUrl}
            onChange={(e) => setArticle({ ...article, imageUrl: e.target.value })}
            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md"
        >
          Update Article
        </button>
      </form>
    </div>
  );
}
