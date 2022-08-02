import { useState } from "react";
import { Link } from "react-router-dom";
import { addCustomer } from "../apies/customer";
import Navbar from "../Nav/Navbar";

export default function AddCustomer() {
    const [CustomerID, setCustomerID] = useState("");
    const [CustomerName, setCustomerName] = useState("");
    const [Address, setAddress] = useState("");
    const [Phone, setPhone] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        let newCustomerInfo = {
            CustomerID: CustomerID,
            CustomerName: CustomerName,
            Address: Address,
            PhoneNumber: Phone,
        };

        addCustomer(newCustomerInfo)
            .then((res) =>
                alert("Add customer successfully. Click Ok to back to product page!")
            )
            .catch((err) => console.log(err));
    }
    return (
        <div className="m-4">
            <Navbar/>
            <div className="container m-4">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="col">
                        <div className="col-6 col-md-4">
                            <div className="mb-3">
                                <label htmlFor="CustomerID" className="form-label">
                                    Mã Khách Hàng
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="CustomerID"
                                    value={CustomerID}
                                    onChange={(e) => setCustomerID(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="col-6 col-md-4">
                            <div className="mb-3">
                                <label htmlFor="CustomerName" className="form-label">
                                    Tên Khách Hàng
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="CustomerName"
                                    value={CustomerName}
                                    onChange={(e) => setCustomerName(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="col-6 col-md-4">
                            <div className="mb-3">
                                <label htmlFor="Address" className="form-label">
                                    Địa chỉ
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Address"
                                    value={Address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="col-6 col-md-4">
                            <div className="mb-3">
                                <label htmlFor="Phone" className="form-label">
                                    Số điện thoại
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Phone"
                                    value={Phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <button type="button" className="btn btn-warning me-4">
                        <Link to="/">Huỷ</Link>
                    </button>
                    <button type="submit" className="btn btn-success">
                        Thêm
                    </button>
                </form>
            </div>
        </div>

    );
}