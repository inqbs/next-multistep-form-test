import type { NextApiRequest, NextApiResponse } from 'next'
import { unescape } from 'html-escaper'
import ogs, { ErrorResult, SuccessResult } from 'open-graph-scraper'

import { csrf } from '../../utils/csrf'

type Data = SuccessResult | ErrorResult

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  await csrf(req, res).catch(() => {
    res.status(403).end()
  })

  const urlParam = req.query.url
  const url = unescape(Array.isArray(urlParam) ? urlParam[0] : `${urlParam}`)

  ogs({ url }, (error: boolean, result) => {
    if (error) {
      res.status(400).json(result)
    } else {
      res.status(200).json(result)
    }
  })
}
