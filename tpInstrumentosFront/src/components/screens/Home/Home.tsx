import { Header } from "../../ui/Header/Header"


export const Home = () => {

    return (
        <>
            <Header />
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://http2.mlstatic.com/D_NQ_NP_602949-MLA32297056646_092019-O.webp" className="d-block w-100" alt="pizza" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.rappi.com.ar/restaurants_background/pizza12-1677263412565.jpg" className="d-block w-100" alt="pizza" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRoeUqD7lgiXavof_C8DW2QeI-BHIzGPLKRPCWinurLGGMBT7GSml0le6bQro8yWjAa" className="d-block w-100" alt="pizza" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
