import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBookStoreID } from "../apies/employee";

export default function Navbar() {
    const [bookStoreId, setbookStoreId] = useState("");
    useEffect(() => {
      getBookStoreID().then(id=>{
            setbookStoreId(id)
      })
    }, [bookStoreId])
    
    return (
        <div >
            <div>
                <h1>Quản lí cửa hàng sách chi nhánh: {bookStoreId}</h1>
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