import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { useRouter } from 'next/router'

import useTranslation from 'next-translate/useTranslation'
import NewsletterForm from '@/components/NewsletterForm'
// import TypeIt from 'typeit-react'

export default function Footer() {
  const { locale } = useRouter()
  const { t } = useTranslation()
  return (
    <footer>
      <div className="mt-20 flex flex-col items-center">
        <div className="mb-4 flex space-x-4">
          {siteMetadata.newsletter.provider !== '' && (
            <div className="flex items-center justify-center pt-4">
              <NewsletterForm title={t('newsletter:title')} />
            </div>
          )}
        </div>
        <div className="mb-4 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div className="whitespace-nowrap">{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div className="whitespace-nowrap">{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <div className="whitespace-nowrap">{siteMetadata.occupation[locale]}</div>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/GautierArcin/i18n-tailwind-nextjs-starter-blog">
            I18n fork of&nbsp;
          </Link>
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Tailwind Nextjs Theme
          </Link>
          {/* <TypeIt>This will be typed in a `span` element!</TypeIt> */}
        </div>
      </div>
    </footer>
  )
}
