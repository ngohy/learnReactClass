import React, { Component } from 'react';
import ProductItem from './ProductItem';

const data = [
    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },

    { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },

    { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
]

class DemoXemChiTiet extends Component {
    state = {
        productDetail: {
            "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg"
        },
    }
    xemChiTiet = (item) => {
        //    console.log(item);
        this.setState({productDetail: item});
    }
    renderProduct = () => {
        return data.map((item) => {
            return (
                <div className="col-4" key={item.maSP}>
                    <ProductItem product={item}
                        xemChiTiet={this.xemChiTiet}
                    />
                </div>
            )
        })
    }
    render() {
        let { tenSP, cameraTruoc, cameraSau, ram, rom, manHinh, heDieuHanh, hinhAnh } = this.state.productDetail;
        return (
            <div className="container">
                <h3 >Danh sách sản phẩm</h3>
                <div className="row">
                    {this.renderProduct()}
                </div>
                <div className="detail-product mt-2">
                    <div className="row">
                        <div className="col-3">
                            <h3 className="text-center">{tenSP}</h3>
                            <img src={hinhAnh} className='w-100' />
                        </div>
                        <div className="col-9">
                            <h3> Thông Tin Chi Tiết</h3>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Man hinh</td>
                                        <td>{manHinh}</td>
                                    </tr>
                                    <tr>
                                        <td>He dieu hanh</td>
                                        <td>{heDieuHanh} </td>
                                    </tr>
                                    <tr>
                                        <td>cameraTruoc</td>
                                        <td>{cameraTruoc}</td>
                                    </tr>

                                    <tr>
                                        <td>cameraSau</td>
                                        <td>{cameraSau}</td>
                                    </tr>
                                    <tr>
                                        <td>ram</td>
                                        <td>{ram}</td>
                                    </tr>
                                    <tr>
                                        <td>rom</td>
                                        <td>{rom}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DemoXemChiTiet;