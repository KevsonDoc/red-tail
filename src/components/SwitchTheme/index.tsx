import { useContext } from 'react'
import { Sun, Moon } from 'styled-icons/feather'
import { GlobalContext, IUserContext } from '../../context'
import * as S from './styles'

export default function SwitchTheme() {
  const context = useContext(GlobalContext)

  return (
    <S.Wrapper>
      <label>
        <input type='checkbox' onChange={() => context?.user.toggleTheme()} defaultChecked />
        <Sun size={20} className='sun' />
        <Moon size={20} className='moon' />
        <span className='slider' />
      </label>
    </S.Wrapper>
  )
}
