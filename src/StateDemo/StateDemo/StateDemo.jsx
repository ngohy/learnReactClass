import React, { Component } from 'react'
// import BaiTapChonXe from '../Baitap/BaiTapChonXe';



export default class StateDemo extends Component {
  //state : thuộc tính có sẵn của react , dùng dể chứa các giá trị thay đổi trên giao diện, khi state thay đổi thì giao diện render lại

  state = {
    login: false,
  }

  renderLogin = () => {
    if (this.state.login) {
      return <button className="btn btn-outline-success" onClick={() => { this.setState({ login: false }) }}>đăng xuất</button>
    }


    return <button className="btn btn-outline-success" onClick={() => {
      this.handleLogin()
    }}> Dang Nhap</button>
  }

  handleLogin = () => {
    // this.state.login = true; không được thay đổi trực tiếp
    let newState = { login: true };
    this.setState(newState, () => {
      console.log(this.state)
    });
    /*
      + setState là phương thức làm thay đổi giá trị state cũ và render lại giao diện
      + là phương thức bất đồng bộ
    */
  }
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-sm navbar-dark text-danger " style={{background:'rgba(255,0,255,.2'}}>
          <a className="navbar-brand" href="#">Film</a>
          <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="visually-hidden">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="#">Action 1</a>
                  <a className="dropdown-item" href="#">Action 2</a>
                </div>
              </li>
            </ul>
            <form className="d-flex my-2 my-lg-0">
              {/* {this.login ?<span className="text-light"> heloooo</span>:<button className="btn btn-outline-success" >Dang Nhap</button> } */}
              {this.renderLogin()}
            </form>
          </div>
        </nav>
        {/* <BaiTapChonXe/> */}
      </>
    )
  }
}
