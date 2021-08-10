export default {
  en: {
    translation: {
      get common() {
        return require('../../assets/locales/en/common.json')
      },

      get home() {
        return require('../../assets/locales/en/home.json')
      }
    },
    isRTL: false
  },

  pt: {
    translation: {
      get common() {
        return require('../../assets/locales/pt/common.json')
      },

      get home() {
        return require('../../assets/locales/pt/home.json')
      }
    },
    isRTL: false
  }
}