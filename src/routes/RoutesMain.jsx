import { Route, Routes } from "react-router-dom"
import { Dashboad } from "../pages/Dashboard"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { ProtectedRoutes } from "../components/ProtectedRoutes"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<ProtectedRoutes />}>
                <Route index element={<Dashboad />} />
            </Route>
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}