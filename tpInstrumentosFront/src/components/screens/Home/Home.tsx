import { Carrousel } from "../../ui/Carrousel/Carrousel"
import { Header } from "../../ui/Header/Header"


export const Home = () => {

    

    return (
        <>
            <Header />
            <div className="titleContainer" style={{ marginTop: '100px' }}>
                <h1>MUSIC STORE</h1>
            </div>
            <div className="carrouselContainer">
                <Carrousel/>
            </div>
        </>
    )
}
