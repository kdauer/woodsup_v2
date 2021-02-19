import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import styles from '../styles/protection.module.sass'

const Protection = () => {
  const { t } = useTranslation('privacypolicy')

  return (
    <div className={styles.protection}>
      <p>
        <strong>
          <big>{t('p_1')}</big>
        </strong>
      </p>
      <h5>{t('h5_1')}</h5>
      <h5>{t('h5_2')}</h5>
      <p>{t('p_2')}</p>
      <p>
        <span id="s3-t-firma">WoodsUp e.V.</span>
        <br />
        <span id="s3-t-ansprechpartner">Falko Drescher</span>
        <br />
        <span id="s3-t-strasse">Wollestraße 52</span>
        <br />
        <span id="s3-t-plz">14482</span> <span id="s3-t-ort">Potsdam</span>
      </p>
      <p>{t('p_3')}</p>
      <h5>{t('h5_3')}</h5>
      <p>{t('p_4')}</p>
      <h5>{t('h5_4')}</h5>
      <p>{t('p_5')}
        <a
          rel="noopener noreferrer"
          href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
          target="_blank"
        >
          https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html
        </a>
        .
      </p>
      <h5>{t('h5_5')}</h5>
      <p>{t('p_6')}</p>
      <h5>{t('h5_6')}</h5>
      <p>{t('p_7')}</p>
      <h5>{t('h5_7')}</h5>
      <p>{t('p_8')}</p>
      <h5>{t('h5_8')}</h5>
      <p>{t('p_9')}</p>
      <p>{t('p_10')}</p>
      <p>{t('p_11')}</p>
      <h5>{t('h5_9')}</h5>
      <p>{t('p_12')}</p>
      <p>{t('p_13')}</p>
      <p>{t('p_14')}</p>
      <p>{t('p_15')}</p>
      <h5>{t('h5_10')}</h5>
      <p>{t('p_16')}</p>
      <ul>
        <li>{t('li_1')}</li>
        <li>{t('li_2')}</li>
        <li>{t('li_3')}</li>
        <li>{t('li_4')}</li>
        <li>{t('li_5')}</li>
        <li>{t('li_6')}</li>
        <li>{t('li_7')}</li>
      </ul>
      <h5>{t('h5_11')}</h5>
      <p>{t('p_17')}</p>
      <p>{t('p_18')}</p>
      <p>{t('p_19')}</p>
      <p>{t('p_20')}
        <a href="https://www.google.com/fonts#AboutPlace:about">
          https://www.google.com/fonts#AboutPlace:about
        </a>
        {t('p_21')}
        <a href="https://policies.google.com/privacy/partners?hl=de">
          https://policies.google.com/privacy/partners?hl=de
        </a>
      </p>
    </div>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['privavypolicy']),
  }
})

export default Protection