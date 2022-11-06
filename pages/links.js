import siteMetadata from '@/data/siteMetadata'
import linksData from '@/data/linksData'
import WhiteOakLink from '@/components/WhiteOakLink'
import { PageSEO } from '@/components/SEO'

export default function Links() {
  return (
    <>
      <PageSEO title={`Links - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Important Links
          </h1>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {linksData.map((d) => (
              <WhiteOakLink
                key={d.href}
                title={d.title}
                description={d.description}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
