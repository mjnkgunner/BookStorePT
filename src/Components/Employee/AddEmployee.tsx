import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addEmployee, getBookStoreID } from "../apies/employee";
import Navbar from "../Nav/Navbar";

export default function AddEmployee() {
    const [EmployeeID, setEmployeeID] = useState("");
    const [EmployeeName, setEmployeeName] = useState("");
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const [Position, setPosition] = useState("");
    const [BookStoreID, setBookStoreID] = useState("");

    useEffect(() => {
      getBookStoreID().then(id=>{
        setBookStoreID(id)
      })
    }, [BookStoreID])
    

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        let newEmployeeInfo = {
            EmployeeID: EmployeeID,
            EmployeeName: EmployeeName,
            UserName: Username,
            Password: Password,
            Position: Position,
            BookStoreID: BookStoreID,
        };

        addEmployee(newEmployeeInfo)
            .then((res) => {
                if (res.status === 200) {
                    alert("Thêm người dùng thành công.")
                }
                else {
                    alert("Thêm người dùng thất bại.")
                }
            })
            .catch((err) => console.log(err));
    }
    return (
        <div className="m-4">

            <Navbar />
            <div className="container m-4 align-center">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="col">
                        <div className="col-6 col-md-4">
                            <div className="mb-3">
                                <label htmlFor="EmployeeID" className="form-label">
                                    Mã Nhân viên
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="EmployeeID"
                                    value={EmployeeID}
                                    onChange={(e) => setEmployeeID(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="col-6 col-md-4">
                            <div className="mb-3">
                                <label htmlFor="EmployeeName" className="form-label">
                                    Tên Nhân Viên
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="EmployeeName"
                                    value={EmployeeName}
                                    onChange={(e) => setEmployeeName(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="col-6 col-md-4">
                            <div className="mb-3">
                                <label htmlFor="Username" className="form-label">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Username"
                                    value={Username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="col-6 col-md-4">
                            <div className="mb-3">
                                <label htmlFor="Password" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Password"
                                    value={Password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="col-6 col-md-4">
                            <div className="mb-3">
                                <label htmlFor="Position" className="form-label">
                                    Vị Trí
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Position"
                                    value={Position}
                                    onChange={(e) => setPosition(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="col-6 col-md-4">
                            <div className="mb-3">
                                <label htmlFor="BookStoreID" className="form-label">
                                    Mã Nhà Sách
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="BookStoreID"
                                    value={BookStoreID}
                                    required
                                    disabled
                                />
                            </div>
                        </div>
                    </div>
                    <button type="button" className="btn btn-warning me-4">
                        <Link to="/employee">Huỷ</Link>
                    </button>
                    <button type="submit" className="btn btn-success">
                        Thêm
                    </button>
                </form>
            </div>
        </div>

    );
}