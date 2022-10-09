/* eslint-disable react/no-unknown-property */
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'

import styles from './index.module.css'

const MAX_DISPLAY = 5

export async function getStaticProps({ locale, defaultLocale, locales }) {
  const otherLocale = locale !== defaultLocale ? locale : ''
  const posts = await getAllFilesFrontMatter('blog', otherLocale)

  return { props: { posts, locale, availableLocales: locales } }
}

export default function Home({ posts, locale, availableLocales }) {
  const { t } = useTranslation()
  const typeWriterText = {
    para1: { fr: 'Gautier Arcin', en: 'Gautier Arcin' },
    para2: { fr: 'un ingénieur Robotique', en: 'a Robotics engineer' },
    para3: { fr: 'un ingénieur Fullstack', en: 'a Fullstack engineer' },
  }
  const typeWriterComponent = (
    <div className="inline-block">
      {/* <TypeIt
        id="typeWriter"
        key={locale}
        className="stroke-15 inline-block font-extrabold text-primary-500 duration-500 ease-in-out hover:text-primary-700  dark:text-primary-600 dark:hover:text-primary-300"
        getBeforeInit={(instance) => {
          instance
            .type(typeWriterText['para1'][locale])
            .pause(3500)
            .delete(1)
            .pause(100)
            .delete(1)
            .pause(100)
            .delete(null, { speed: 130 })
            .type(typeWriterText['para2'][locale])
            .pause(100)
            .type(' 🤖', { speed: 0 })
            .pause(3500)
            .delete(1)
            .pause(200)
            .delete(1)
            .pause(100)
            .delete(null, { speed: 130 })
            .type(typeWriterText['para3'][locale])
            .pause(200)
            .type(' 👨‍💻', { speed: 0 })
            .pause(3500)
            .delete(2, { speed: 0 })
            .pause(100)
            .delete(1)
            .pause(100)
            .delete(null, { speed: 130 })

          // Remember to return it!
          return instance
        }}
        options={{
          loop: true,
          speed: 60,
        }}
      /> */}
    </div>
  )

  return (
    <>
      <PageSEO
        title={siteMetadata.title[locale]}
        description={siteMetadata.description[locale]}
        availableLocales={availableLocales}
      />
      <div className="divide-y">
        <div className="pt-6 pb-4 ">
          {/* <TypeIt>This will be typed in a `span` element!</TypeIt> */}
          <h1 className="pb-4 text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {t('home:greetings')}
            <span className={styles.wave} role="img" aria-label="waving had">
              👋
            </span>
          </h1>
          <div className="pt-1 pb-5 text-lg leading-7 text-gray-500 dark:text-gray-400 sm:pt-0.5 sm:pb-0.5">
            <span>{t('home:subtitle11')}</span>
            {/* <TypeIt>Hello</TypeIt> */}

            <span>{t('home:subtitle12')}</span>
          </div>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            <Trans
              i18nKey="home:subtitle2"
              components={{
                link1: (
                  <Link
                    className="stroke-15 font-extrabold text-primary-500 duration-500 ease-in-out hover:text-primary-700  dark:text-primary-600 dark:hover:text-primary-300"
                    href="/about"
                  />
                ),
                link2: (
                  <Link
                    className="stroke-15 font-extrabold text-primary-500 duration-500 ease-in-out hover:text-primary-700  dark:text-primary-600 dark:hover:text-primary-300"
                    href="/projects"
                  />
                ),
              }}
            />
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">{t('common:pub')}</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          {t('common:more')} &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            {t('common:all')} &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
