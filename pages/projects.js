import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Image from '@/components/Image'
import Link from '@/components/Link'
import Card from '@/components/Card'
import { PageSeo } from '@/components/SEO'
import useTranslation from 'next-translate/useTranslation'

import { useState, useEffect, useMemo } from 'react'

export async function getStaticProps({ locale, locales }) {
  return { props: { locale, availableLocales: locales } }
}

export default function Projects({ locale, availableLocales }) {
  const { t } = useTranslation()
  const [filter, setFilter] = useState('')

  const listeFilter = useMemo(
    () =>
      projectsData[locale].reduce(
        (acc, e) => (acc.includes(e.category) ? acc : [...acc, e.category]),
        []
      ),
    [locale]
  )

  useEffect(() => {
    // console.log(filter)
    setFilter('')
  }, [locale])

  console.log(projectsData)
  return (
    <>
      <PageSeo
        title={`Projects - ${siteMetadata.author}`}
        description={siteMetadata.description[locale]}
        availableLocales={availableLocales}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-4 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {t('projects:title')}
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {t('projects:subtitle')}
          </p>
          {/* <div className="space-x-4 > * + *"> */}
          <div className="flex flex-wrap justify-start -my-1 -mx-3">
            {listeFilter.map((e) => (
              <button
                key={e}
                className={`${
                  filter === e ? 'ring-2 dark:ring-2 ring-gray-900 dark:ring-white' : ''
                } bg-primary-500 my-1 mx-3 hover:bg-primary-600  dark:hover:bg-primary-400 text-white font-bold py-2 px-4 rounded`}
                name={e}
                onClick={() => setFilter(filter === e ? '' : e)}
              >
                {e}
              </button>
            ))}
          </div>
        </div>
        <div className="container py-6">
          <div className="flex flex-wrap -m-4">
            {projectsData[locale]
              ?.filter((e) => e.category.includes(filter))
              .map((d, i) => (
                <Card
                  key={d.title + i}
                  title={d.title}
                  description={d.description}
                  imgSrc={d.imgSrc}
                  href={d.href}
                />
              ))}
            {/* {t('common:construction')} */}
          </div>
        </div>
      </div>
    </>
  )
}
