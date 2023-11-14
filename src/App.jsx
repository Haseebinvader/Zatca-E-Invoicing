import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/authentication/Login"
import AdminLayout from "./pages/superAdmin/Layout"
import Client from "./pages/superAdmin/client/Client"
import Payment from "./pages/superAdmin/userAllocation/userAllocation"
import Request from "./pages/superAdmin/activityLogs/activityLogs"
import Admin from "./pages/admin/Layout"
import UpdateClient from "./pages/superAdmin/client/updateClient"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/SuperAdmin" element={<AdminLayout />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Client" element={<Client />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Requests" element={<Request />} />
          <Route path="/UpdateClient" element={<UpdateClient />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
