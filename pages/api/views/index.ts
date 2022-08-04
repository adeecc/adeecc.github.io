import type { NextApiRequest, NextApiResponse } from 'next';

import { NumViewsDao } from 'lib/dbConnect';

const totalViewQuery = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case 'GET': {
        const totalViews = await NumViewsDao.getTotal();
        console.log(totalViews);

        return res.status(200).json({
          total: totalViews.toString()
        });
      }

      default:
        throw new Error(`Invalid Request Method: ${req.method}`);
    }
  } catch (e) {
    return res.status(500).json({ exception: e });
  }
};

export default totalViewQuery;
