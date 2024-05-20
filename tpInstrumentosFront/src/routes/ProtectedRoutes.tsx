import { Route, Routes } from "react-router-dom"
import { Header } from "../components/ui/Header/Header"
import { Home } from "../components/screens/Home/Home"



export const ProtectedRoutes = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    )
}
