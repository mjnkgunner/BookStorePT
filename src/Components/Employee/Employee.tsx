import { deleteEmployee, getEmployee } from "../apies/employee";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Nav/Navbar";

export default function Employee() {
    const [listEmployee, setlistEmployee] = useState<Employee[]>([]);
    const [result, setResult] = useState<Employee[]>([]);

    useEffect(() => {
        getEmployee().then(data => {
            setlistEmployee(data.reduce((prev: Employee[], next: Employee) => {
                return [next, ...prev]
            }, [] as Employee[]));
            setResult(data.reduce((prev: Employee[], next: Employee) => {
                return [next, ...prev]
            }, [] as Employee[]));
        }).catch(err => console.error(err))
    }, [])

    const _onChangeSearchEmployee = (value: string) => {
        setResult(listEmployee.filter(item => {
            return item.EmployeeName.toLowerCase().includes(value)
        }))
    }

    const handleDelete = (id: string) => {
        deleteEmployee(id).then((res) => {
            if (res.status === 200) {
                alert("Xoá nhân viên thành công.")
            }
            else {
                alert("Xoá nhân viên thất bại.")
            }
        })
    }
    return (
        <div className="m-4">
            <Navbar />
            <h2>Quản lí Nhân Viên</h2>
            <div className="col-12 col-md-4">
                <input
                    type="text"
                    className="form-control search"
                    placeholder="Search"
                    onChange={(e) => _onChangeSearchEmployee(e.target.value)}
                />
            </div>
            <Link to="/employee/addemployee" className="btn btn-success mb-4 mt-4">
                Thêm Nhân Viên
            </Link>
            <div className="table-overflow">
                <table className="table table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Mã Nhân Viên</th>
                            <th scope="col">Tên Nhân Viên</th>
                            <th scope="col">Username</th>
                            <th scope="col">Password</th>
                            <th scope="col">Vị Trí</th>
                            <th scope="col">Mã Nhà Sách</th>
                            <th scope="col">Xoá Nhân Viên</th>
                        </tr>
                    </thead>
                    <tbody>
                        {result ? (
                            result.map((employee) => {
                                return (
                                    <tr key={employee.EmployeeID}>
                                        <th scope="row">{employee.EmployeeID}</th>
                                        <td>{employee.EmployeeName}</td>
                                        <td>{employee.UserName}</td>
                                        <td>{employee.Password}</td>
                                        <td>{employee.Position}</td>
                                        <td>{employee.BookStoreID}</td>
                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-danger deleteButton"
                                                onClick={() => handleDelete(employee.EmployeeID)}
                                            >
                                                Xoá
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        ) : (
                            <></>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}