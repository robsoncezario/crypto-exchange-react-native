import i18n from 'i18n-js'
import * as Localization from 'expo-localization'
import localeList from './locales'

i18n.defaultLocale = 'en'
i18n.translations = localeList
i18n.locale = Localization.locale
i18n.fallbacks = true

export const isRTL = i18n.t('isRTL')
export function t(key) {
  return i18n.t('translation.' + key)
}
export default i18n