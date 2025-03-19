import { Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./utils/path";
import { Home } from "./containers/layouts/public/";
import {ToastContainer} from "react-toastify"
// import Manage from "./containers/layouts/system/Manage";
import Admin from "./containers/layouts/system/Admin";
import {Canh,Post,Thuoc,TaiKhoan} from "./containers/layouts/system";
import AddPost from "./containers/layouts/system/AddPost";
// import DetailNew from "./containers/layouts/pages/DetailNew";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { postall } from "./store/action/post";
import { getOneUserCurrent } from "./store/action/user";
import Edit from "./containers/layouts/system/Edit";


function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(postall());
    dispatch(getOneUserCurrent());
  },[]) 

  // const {post} = useSelector(state =>state.auth);
  



  return (
    <div className="overflow-hidden">
      <Routes>
        <Route path="" element={<Home />}>
          {publicRoutes.map((item, index) => {
            let Page = item.component;
            return <Route path={item.path} key={index} element={<Page />} />;
          })}
        </Route>

        {privateRoutes.map((item, index) => {
          return (
            <Route
              key={index}
              path={item.path}
              element={<item.component />}
            >
            <Route path="edit/:id/:idedit" element={<Edit/>}></Route>
            </Route>
          );
        })}

        <Route path="admin" element={<Admin/>}>
           <Route path="quanlybaiviet" element={<Post/>}/>
           <Route path="" element={<Canh/>}/>
           <Route path="quanlycaythuoc" element={<Thuoc/>}/>
           <Route path="quanlytaikhoan" element={<TaiKhoan/>}/>
           <Route path="add/:addName" element={<AddPost/>}/>
        </Route>
      </Routes>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

/>
    </div>
  );
}

export default App;
