import { NextPage } from 'next'
import OGItemsComp from '../components/OGItemsComp'
import { csrf } from '../utils/csrf'

export async function getServerSideProps({ req, res }) {
  await csrf(req, res)
  const csrfToken = req.csrfToken()
  return {
    props: { csrfToken },
  }
}

const OpenGraph: NextPage<{ csrfToken: string }> = ({ csrfToken }) => {
  const list = [
    'https://www.naver.com',
    'https://www.youtube.com/watch?v=mTz0GXj8NN0',
    'https://github.com/jshemas/openGraphScraper',
  ]

  const getOpenGraphInfo = async (url: string) => fetch(`/api/og?url=${url}`, { headers: { 'CSRF-Token': csrfToken } }).then(async (res) => res.json())

  return (
    <div className="m-4 grid grid-cols-4 gap-4">
      {list.map((url, idx) => (
        <OGItemsComp key={`og-${idx}`} url={url} onImageLoad={getOpenGraphInfo} />
      ))}
    </div>
  )
}

export default OpenGraph
