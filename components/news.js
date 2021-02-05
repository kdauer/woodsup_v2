import PropTypes from 'prop-types'
import { withTranslation } from 'next-i18next'
import styles from "../styles/news.module.sass"

const News = ({t}) => {
    return (
        <div className={styles.news_container}>
            <h2>{t('h2')}</h2>
            <h5>{t("topic_1")}</h5>
            <img src="/IMG_2869.JPG" alt="Island"/>
            <h5>{t("topic_2")}</h5>
            <img src="/IMG_2870.JPG" alt="Brandenburg"/>
        </div>
    )
}

News.propTypes = {
    t: PropTypes.func.isRequired,
  }

export default withTranslation('news')(News)