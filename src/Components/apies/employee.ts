import axios from 'axios'
export function getEmployee() {
    return axios({
        method: "GET",
        url: `http://localhost:34041/api/Employee`
    }).then((res) => {
        console.log(res);
        return JSON.parse(res.data.data)
    })
        .catch(err => console.error(err))
}

export function addEmployee(employee: Employee) {
    return axios({
        method: "POST",
        url: `http://localhost:34041/api/Employee`,
        data: employee
    }).then(res => console.log(res))
        .catch(err => console.log(err))
}

export function deleteEmployee(id: string) {
    return axios({
        method: "DELETE",
        url: `http://localhost:34041/api/Employee/${id}`,

    }).then(res => res.data.data)
        .catch(err => console.error(err))
}

export function getBookStoreID(){
    return axios({
        method:"GET",
        url:'http://localhost:34041/api/System/book-store-id'
    }).then(res => res.data)
    .catch(err => console.error(err))

}