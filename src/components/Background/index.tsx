import * as S from './styles'

export default function Background({ children }: { children: React.ReactNode }) {
  return <S.WrapperApplication>{children}</S.WrapperApplication>
}
