import { OpenGraphImage, OpenGraphProperties } from 'open-graph-scraper'
import { escape } from 'html-escaper'
import { FC, useState, useEffect } from 'react'

type OGApiReponse = OpenGraphProperties & {
  ogImage?: OpenGraphImage | OpenGraphImage[] | undefined
  success: true
}

type Props = {
  url: string
  onImageLoad: (url: string) => Promise<OGApiReponse>
}

const OGItemsComp: FC<Props> = ({ url, onImageLoad }) => {
  const [imageUrl, setImageUrl] = useState<string>('')

  useEffect(() => {
    if (window) {
      onImageLoad(escape(url)).then((data: OGApiReponse) => {
        const { ogImage } = data
        if (ogImage == null) return

        const ogImageUrl = Array.isArray(ogImage) ? ogImage[0].url : ogImage.url
        setImageUrl(ogImageUrl)
      })
    }
  }, [url])

  return (
    <div className="border p-4 rounded">
      <img src={imageUrl} width={480} height={360} className="aspect-video object-cover" />
      <p>{url}</p>
    </div>
  )
}

export default OGItemsComp
