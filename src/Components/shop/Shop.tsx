import { Link } from "react-router-dom";

export default function Shop() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container px-4 px-lg-5 mb-2">
                    <div className="navbar-brand">Book Store</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li className="nav-item"><Link to={"/shop"} className="nav-link active" aria-current="page" >Trang chủ</Link></li>
                            <li className="nav-item"><Link to={"/home"} className="nav-link" >Quản lí</Link></li>
                        </ul>
                        <form className="d-flex">
                            <button className="btn btn-outline-dark" type="submit">
                                <i className="bi-cart-fill me-1"></i>
                                Cart
                                <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>

            <header className="bg-dark py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h2 className="text-white-50 mb-0">Cửa hàng sách này</h2>
                        <h1 className="display-4 fw-bolder">có tất cả mọi loại sách trên đời</h1>
                    </div>
                </div>
            </header>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        <div className="col mb-5">
                            <div className="card h-100">

                                <img className="card-img-top" src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b3BlbiUyMGJvb2t8ZW58MHx8MHx8&w=1000&q=80" alt="..." />

                                <div className="card-body p-4">
                                    <div className="text-center">

                                        <h5 className="fw-bolder">Hạt giống tâm hồn</h5>

                                        $40.00 - $80.00
                                    </div>
                                </div>

                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><Link to={""} className="btn btn-outline-dark mt-auto" >Xem lựa chọn</Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                <div className="badge bg-dark text-white position-absolute styleSpace" >Sale</div>

                                <img className="card-img-top" src="https://img.freepik.com/free-psd/book-cover-mockup_125540-572.jpg?w=2000" alt="..." />

                                <div className="card-body p-4">
                                    <div className="text-center">

                                        <h5 className="fw-bolder">Học làm giàu</h5>

                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>

                                        <span className="text-muted text-decoration-line-through">$20.00</span>
                                        $18.00
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><Link to={""} className="btn btn-outline-dark mt-auto" >Thêm vào giỏ</Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                {/**/}
                                <div className="badge bg-dark text-white position-absolute styleSpace" >Sale</div>

                                <img className="card-img-top" src="https://static.vecteezy.com/system/resources/previews/000/216/140/original/motivational-book-cover-template-vector.jpg" alt="..." />

                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* */}
                                        <h5 className="fw-bolder">Become a better you</h5>

                                        <span className="text-muted text-decoration-line-through">$50.00</span>
                                        $25.00
                                    </div>
                                </div>

                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><Link to={""} className="btn btn-outline-dark mt-auto" >Thêm vào giỏ</Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">

                                <img className="card-img-top" src="https://thumbs.dreamstime.com/b/book-cover-spine-ornament-vintage-old-frames-royal-golden-dark-blue-style-design-border-to-be-printed-covers-books-194803046.jpg" alt="..." />

                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* */}
                                        <h5 className="fw-bolder">Bố già</h5>

                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>

                                        $40.00
                                    </div>
                                </div>

                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><Link to={""} className="btn btn-outline-dark mt-auto" >Thêm vào giỏ</Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                {/**/}
                                <div className="badge bg-dark text-white position-absolute styleSpace" >Sale</div>

                                <img className="card-img-top" src="https://legiit-service.s3.amazonaws.com/ff8455099791788cb767bcaa420e46c0/01985830cbaaa4e3b18c0f4074cfb23d.jpg" alt="..." />

                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* */}
                                        <h5 className="fw-bolder">The way</h5>

                                        <span className="text-muted text-decoration-line-through">$50.00</span>
                                        $25.00
                                    </div>
                                </div>

                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><Link to={""} className="btn btn-outline-dark mt-auto" >Thêm vào giỏ</Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">

                                <img className="card-img-top" src="https://img.freepik.com/free-psd/book-hardcover-mockup-three-views_125540-226.jpg?w=2000" alt="..." />

                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* */}
                                        <h5 className="fw-bolder">Hardcover</h5>

                                        $120.00 - $280.00
                                    </div>
                                </div>

                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><Link to={""} className="btn btn-outline-dark mt-auto" >Xem lựa chọn</Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                {/**/}
                                <div className="badge bg-dark text-white position-absolute styleSpace">Sale</div>

                                <img className="card-img-top" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/f1284291229191.5e2c46564f4ff.jpg" alt="..." />

                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* */}
                                        <h5 className="fw-bolder">Love of my life</h5>

                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>

                                        <span className="text-muted text-decoration-line-through">$20.00</span>
                                        $18.00
                                    </div>
                                </div>

                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><Link to={""} className="btn btn-outline-dark mt-auto" >Thêm vào giỏ</Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">

                                <img className="card-img-top" src="https://img.freepik.com/free-psd/book-hardcover-mockup_125540-225.jpg?w=2000" alt="..." />

                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* */}
                                        <h5 className="fw-bolder">Instant Effect</h5>

                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>

                                        $40.00
                                    </div>
                                </div>

                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><Link to={""} className="btn btn-outline-dark mt-auto" >Thêm vào giỏ</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="py-5 bg-dark">
                <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
            </footer>
        </div>
    );
}