import './App.css';
import { NavLink, Outlet } from 'react-router-dom'
import ReactForm from './pages/ReactForm/ReactForm';
// import BaitapXeStore from './Prop/BaitapXe/BaitapXeStore';
// import DemoProp from './Prop/DemoProp/DemoProp';
// import DemoXemChiTiet from './Prop/DemoXemChiTiet/DemoXemChiTiet';
// import ShoesShop from './Prop/ShoesShop/ShoesShop';
// import LayOutFilm from './RenderWithMap/LayOutFilm';
//import RenderWithMap from './RenderWithMap/RenderWithMap';
//import BaiTapChonXe from './StateDemo/Baitap/BaiTapChonXe';
//import TangGiamFontSize from './StateDemo/Baitap/TangGiamFontSize';
// import Databinding from './Databinding/Databinding';
// import HandleEvent from './HandleEvent/HandleEvent';
// import StyleWithCss from './StyleWithCss/StyleWithCss';
// import StateDemo from './StateDemo/StateDemo/StateDemo';

function App() {
  return (
    <div className="App">
      {/* <Databinding /> */}
      {/* <HandleEvent/> */}
      {/* <StyleWithCss/> */}
      {/* <div className="text-red container">
                    lorem ipsum dolor sit amet, consectetur adipiscing
                </div>  */}
      {/* <StateDemo /> */}
      {/* <BaiTapChonXe/>
      <TangGiamFontSize/>
      <RenderWithMap/> */}
      {/* <LayOutFilm/> */}
      {/* <DemoProp/> */}
      {/* <ShoesShop/> */}
      {/* <DemoXemChiTiet/> */}
      {/* <BaitapXeStore/> */}

      {/* NavLink to = href */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="">Navbar</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* style={({isActive})=>isActive ? {borderRadius:'5px'}: {} } */}
                <NavLink className={({ isActive }) => isActive ? "nav-link  text-danger " : "nav-link "} aria-current="page" to="/home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link  text-danger " : "nav-link "} to="/reactForm">ReactForm</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link  text-danger " : "nav-link "} to="/lifecycle">ReactLifecycle</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link  text-danger " : "nav-link "} to="/contact">Contact</NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Redux
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink className={({ isActive }) => isActive ? "nav-link  text-danger " : "nav-link "} to="/demoNumber">DemoRedux</NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) => isActive ? "nav-link  text-danger " : "nav-link "} to="/demoChonXe">DemoChonXe</NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) => isActive ? "nav-link  text-danger " : "nav-link "} to="/demoFormComment">DemoFormComment</NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) => isActive ? "nav-link  text-danger " : "nav-link "} to="/demoBurger">DemoBurger</NavLink>
                  </li>
                </ul>
              </li>

            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>


      {/* vi tri component se duoc load o link con */}
      <Outlet />

    </div>
  );
}

export default App;

