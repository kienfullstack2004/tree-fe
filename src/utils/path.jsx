import { AboutPage, SupportPage } from "../containers/layouts/pages"
import { LoginPage } from "../containers/layouts/private"
import { HomePage } from "../containers/layouts/pages"
import {MedicalPage,MedicinePage} from "../containers/layouts/pages"
import {NewPage} from "../containers/layouts/pages"
import Admin from "../containers/layouts/system/Admin";
import Search from "../containers/layouts/pages/Search";
import DetailNew from "../containers/layouts/pages/DetailNew"
// import DetailPostNew from "../containers/layouts/pages/DetailPostNew"
import DetailMedice from "../containers/layouts/pages/DetailMedice"
import Edit from "../containers/layouts/system/Edit"



export const publicRoutes = [
    {path:'',component:HomePage},
    {path:'about',component:AboutPage},
    {path:'support',component:SupportPage},
    {path:'caycanh',component:MedicalPage},
    {path:'caythuoc',component:MedicinePage},
    {path:'news',component:NewPage},
    {path:'news/:id',component:DetailNew},
    {path:'search/:id',component:Search},
    {path:'detail/:id',component:DetailNew},
    {path:'medicine/:id',component:DetailNew},
    // {path:'medicine/:id',component:DetailNew},
]

export const privateRoutes = [
    // {path:'/login',component:LoginPage},
    {path:'/admin',component:Admin},  
    {path:'/admin/edit/:id',component:Edit},  
]

export const publicHeader = [
    {path:'',component:'Trang chủ'},
    {path:'/caycanh',component:'Cây cảnh'},
    {path:'/caythuoc',component:'Cây thuốc'},
    {path:'/news',component:'Tin tức'},
]

export const privateHeadder = [
    {path:'',component:'Home'},
    {path:'about',component:'About'},
    {path:'support',component:'Support'},
]