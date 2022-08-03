import axios from 'axios'
export function getCustomer() {
    return axios({
        method: "GET",
        url: `http://localhost:34041/api/Customer`
    }).then(res => res.data)
        .catch(err => console.error(err))
}

export function addCustomer(customer: Customer) {
    return axios({
        method: "POST",
        url: `http://localhost:34041/api/Customer`,
        data: customer
    }).then(res => res.data)
        .catch(err => console.log(err))
}
export function deleteCustomer(id: string) {
    return axios({
        method: "DELETE",
        url: `http://localhost:34041/api/Customer/${id}`,

    }).then(res => res.data)
        .catch(err => console.error(err))
}


