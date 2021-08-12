export default {
  en: {
    translation: {
      get common() {
        return require('../../assets/locales/en/common.json')
      },

      get home() {
        return require('../../assets/locales/en/home.json')
      },

			get wallet() {
        return require('../../assets/locales/en/wallet.json')
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
      },

			get wallet() {
        return require('../../assets/locales/pt/wallet.json')
      }
    },
    isRTL: false
  }
}