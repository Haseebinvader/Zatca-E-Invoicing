import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/authentication/Login"
import AdminLayout from "./pages/superAdmin/Layout"
import Client from "./pages/superAdmin/client/Client"
import Payment from "./pages/superAdmin/payment/Payment"
import Request from "./pages/superAdmin/request/Request"
import Admin from "./pages/admin/Layout"
import Employee from "./pages/employee/Layout"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/SuperAdmin" element={<AdminLayout />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Employee" element={<Employee />} />
          <Route path="/Client" element={<Client />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Requests" element={<Request />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
