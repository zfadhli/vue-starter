const forms = require('windicss/plugin/forms')
const typography = require('windicss/plugin/typography')

export default {
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [forms, typography],
  shortcuts: {
    container: 'relative w-full px-6 mx-auto max-w-7xl',
    section: 'relative py-20 bg-slate-50',
    btn: 'py-2 px-4 font-semibold rounded-lg shadow-md',
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',
  },
}
