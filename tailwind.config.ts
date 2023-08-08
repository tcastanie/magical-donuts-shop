import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        turquoise: '#00EAD3',
        blond: '#FFF5B7',
        strawberry: '#FF449F',
        sea: '#005F99'
      },
      fontFamily: {
        sans: ['Mona Sans', ...defaultTheme.fontFamily.sans]
      }
    }
  }
}
