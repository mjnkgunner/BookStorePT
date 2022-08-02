import { Link } from "react-router-dom";

export default function Navbar() {
    let a = "CN2";
    return (
        <div >
            <div>
                <h1 className="imgCover">Quản lí cửa hàng sách chi nhánh: {a}</h1>
            </div>
            {/* <img src={require('./671822c2f63dd5f65d8fd15c9710420b.jpg')} className="img-fluid"/> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                        <Link to={"/"} className="nav-item nav-link ">Khách Hàng</Link>
                        <Link to={"/employee"} className="nav-item nav-link ">Nhân Viên</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}