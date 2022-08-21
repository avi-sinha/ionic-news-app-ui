import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';

const PageController: React.FC = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
         </BrowserRouter>
        </>
    );
  };
  
export default PageController;