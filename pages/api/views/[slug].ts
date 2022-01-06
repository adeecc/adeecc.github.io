import { NumViewsDao } from 'lib/dbConnect';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const slug = req.query.slug.toString();

    switch (req.method) {
      case 'POST': {
        const newOrUpdateViews = await NumViewsDao.upsertBySlug(slug);

        if (!newOrUpdateViews.success) {
          throw new Error('Update Failed');
        }

        return res.status(200).json({
          total: newOrUpdateViews.count?.toString()
        });
      }

      case 'GET': {
        const views = await NumViewsDao.getBySlug(slug);
        return res.status(200).json({
          total: views?.count.toString()
        });
      }

      default:
        throw new Error(`Invalid Request Method: ${req.method}`);
    }
  } catch (e) {
    return res.status(500).json({ exception: e });
  }
};
