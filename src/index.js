import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import ReactForm from './pages/ReactForm/ReactForm';
import Page404 from './pages/Page404/Page404';
import ReactLifecycle from './pages/ReactLifecyle/ReactLifecycle'


//cau hinh react router dom
//cau hinh redux 
import { Provider } from 'react-redux';
import { store } from './redux/configRedux';


import DemoTangGiamSL from './pages/demoRedux/demoTangGiamSl/DemoTangGiamSL';
import DemoChonXe from './pages/demoRedux/demoChonxe/DemoChonXe';
import DemoFormComment from './pages/demoRedux/demoFormComment/DemoFormComment';
import DemoBurger from './pages/demoRedux/demoBurger/DemoBurger';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="" element={<App />}>
                    <Route path="home" element={<Home />}></Route>
                    <Route path="about" element={<About />}></Route>
                    <Route path="contact" element={<Contact />}></Route>
                    <Route path="reactForm" element={<ReactForm />}></Route>
                    {/* <Route path="*" element={<Page404 />}></Route> */}

                    {/* quay ve trang chu luon */}
                    <Route path="lifecycle" element={<ReactLifecycle />}></Route>

                    <Route path="demoChonxe" element={<DemoChonXe />}></Route>
                    <Route path="demoFormComment" element={<DemoFormComment />}></Route>
                    <Route path="demoBurger" element={<DemoBurger />}></Route>


                    <Route path="demoNumber" element={<DemoTangGiamSL />}></Route>
                    <Route path="*" element={<Navigate to="" />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
);
//jsx

