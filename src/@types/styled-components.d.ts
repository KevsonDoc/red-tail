import theme from '../asset/styles/theme'
import 'styled-components'

type Theme = typeof theme
// and extend them!
declare module 'styled-components' {
  /* eslint-disable-next-line @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends Theme {}
}
