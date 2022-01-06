import { NumViewsDao } from 'lib/dbConnect';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const totalViews = await NumViewsDao.getTotal();
    console.log(totalViews);

    return res.status(200).json({
      total: totalViews.toString()
    });
  } catch (e) {
    return res.status(500).json({ exception: e });
  }
};
