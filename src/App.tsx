import { ThemeProvider } from 'styled-components'
import { useEffect, useState } from 'react'
import { darkTheme, lightTheme } from './asset/styles/theme'
import Background from './components/Background'
import Routes from './route'
import GLobalStyle from './asset/styles/css/global'
import { GlobalContext, IUserContext } from './context'

function App() {
  const [user, setUser] = useState<IUserContext>({
    theme: darkTheme,
    toggleTheme: () =>
      setUser(({ theme, ...rest }) =>
        theme.title === 'light' ? { ...rest, theme: darkTheme } : { theme: lightTheme, ...rest },
      ),
  })

  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      <GLobalStyle />
      <ThemeProvider theme={user.theme}>
        <Background>
          <Routes />
        </Background>
      </ThemeProvider>
    </GlobalContext.Provider>
  )
}

export default App
