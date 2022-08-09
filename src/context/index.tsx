import { createContext } from 'react'
import theme from '../asset/styles/theme'

type Theme = typeof theme

export type IUserContext = {
  theme: Theme
  toggleTheme: () => void
}

export interface IUserCotextState {
  user: IUserContext
  setUser: React.Dispatch<React.SetStateAction<IUserContext>>
}

const defaultContext = null

export const GlobalContext = createContext<IUserCotextState | null>(defaultContext)
