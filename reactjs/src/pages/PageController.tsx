import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import HomeOther from './HomeOther';


const PageController: React.FC = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/other" element={<HomeOther/>}/>
            </Routes>
         </BrowserRouter>
        </>
    );
  };
  
export default PageController;