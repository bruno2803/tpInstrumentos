import { Carrousel } from "../../ui/Carrousel/Carrousel"
import { Header } from "../../ui/Header/Header"


export const Home = () => {

    

    return (
        <>
            <Header />
            <div className="titleContainer">
                <h1>MUSICAL HENDRIX</h1>
            </div>
            <div className="carrouselContainer">
                <Carrousel/>
            </div>
        </>
    )
}
