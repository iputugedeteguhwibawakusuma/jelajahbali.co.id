import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HalamanDaftar from './screens/HalamanDaftar';
import HalamanDetail from './screens/HalamanDetail';
import HalamanKontak from './screens/HalamanKontak';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HalamanDaftar />} />
        <Route path="/detail/:id" element={<HalamanDetail />} />
        <Route path="/kontak" element={<HalamanKontak />} />
      </Routes>
    </BrowserRouter>
  );
}
