/* eslint-disable jsx-a11y/no-onchange */
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
// import Logo from '@/data/logo.svg'
import Logo from '@/components/Logo'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const LayoutWrapper = ({ children }) => {
  const { t } = useTranslation()

  const router = useRouter()

  const { locale, locales, defaultLocale } = router
  const [lang, setLang] = useState(locale)

  const changeLanguage = (e) => {
    console.log('changing !!')
    console.log(e)
    console.log(e.target.value)
    setLang(e.target.value)
  }

  useEffect(() => {
    console.log('routing to : ', lang)
    router.asPath.includes('/tags')
      ? router.push('/tags/', '/tags/', { locale: lang })
      : router.push(router.asPath, router.asPath, { locale: lang })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang])

  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label="Tailwind CSS Blog">
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Logo
                    className1={
                      'fill-current stroke-current text-primary-500 dark:text-primary-600 hover:text-primary-600 dark:hover:text-primary-400 stroke-15  ease-in-out duration-500 '
                    }
                    className2={
                      'fill-current stroke-current text-gray-500  dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400 stroke-15  ease-in-out duration-500 '
                    }
                  />
                </div>
                {typeof siteMetadata.headerTitle[locale] === 'string' ? (
                  <div className="h-6 text-2xl invisible xl:visible xl: font-semibold sm:block">
                    {siteMetadata.headerTitle[locale]}
                  </div>
                ) : (
                  siteMetadata.headerTitle[locale]
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 whitespace-nowrap font-medium text-gray-900 sm:p-4 dark:text-gray-100"
                >
                  {t(`headerNavLinks:${link.title.toLowerCase()}`)}
                </Link>
              ))}
            </div>
            <select
              onChange={changeLanguage}
              defaultValue={locale}
              style={{ textAlignLast: 'center' }}
              className="text-gray-900 dark:text-gray-100 text-shadow-sm text-sm bg-transparent tracking-wide"
            >
              {locales.map((e) => (
                <option
                  className="text-gray-900 dark:text-gray-100 dark:bg-gray-900 bg-gray-100"
                  classsvalue={e}
                  key={e}
                >
                  {e}
                </option>
              ))}
            </select>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
