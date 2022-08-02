import { useEffect, useState } from "react";
import { getCustomer } from "../apies/customer";
import { Link } from "react-router-dom";
import Navbar from "../Nav/Navbar";

export default function Home() {
    const [listCustomer, setlistCustomer] = useState<Customer[]>([]);
    const [result, setResult] = useState<Customer[]>([]);


    useEffect(() => {
        getCustomer().then(data => {
            setlistCustomer(data.reduce((prev: Customer[], next: Customer) => {
                return [next, ...prev]
            }, [] as Customer[]));
            setResult(data.reduce((prev: Customer[], next: Customer) => {
                return [next, ...prev]
            }, [] as Customer[]));
        }).catch(err => console.error(err))
    }, [])
    const _onChangeSearchCustomer = (value: string) => {
        setResult(listCustomer.filter(item => {
            return item.CustomerName.toLowerCase().includes(value)
        }))
    }
    return (
        <div className="m-4">
            <Navbar/>
            <h2>Quản lí khách hàng</h2>
            <div className="col-12 col-md-4">
                <input
                    type="text"
                    className="form-control search"
                    placeholder="Search"
                    onChange={(e) => _onChangeSearchCustomer(e.target.value)}
                />
            </div>
            <Link to="/home/addcustomer" className="btn btn-success mb-4 mt-4">
                Thêm Khách Hàng
            </Link>
            <div className="table-overflow">
                <table className="table table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Mã Khách Hàng</th>
                            <th scope="col">Tên Khách Hàng</th>
                            <th scope="col">Địa chỉ</th>
                            <th scope="col">Số điện thoại</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                            {result ? (
                                result.map((customer) => {
                                    return (
                                        <tr key={customer.CustomerID}>
                                            <th scope="row">{customer.CustomerID}</th>
                                            <td >{customer.CustomerName}</td>
                                            <td>{customer.Address}</td>
                                            <td>{customer.PhoneNumber}</td>
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
    );
}