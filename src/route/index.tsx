import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Registration from '../page/registration'

export default function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Registration />} />
      </Routes>
    </BrowserRouter>
  )
}
