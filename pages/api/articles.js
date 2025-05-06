import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const articles = await prisma.article.findMany();
    res.status(200).json(articles);
  }

  if (req.method === 'POST') {
    const { title, content, imageUrl } = req.body;
    const newArticle = await prisma.article.create({
      data: { title, content, imageUrl },
    });
    res.status(201).json(newArticle);
  }
}
