import React, { Suspense, lazy, useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// Lazy loading the components
const NavbarWithSidebar = lazy(() => import('./Components/Navigation/NavWithSiderbar.jsx'));
const DashBoard = lazy(() => import('./Pages/Dashboard.jsx'));
const Profile = lazy(() => import('./Pages/auth/Profile.jsx'));
const NotFoundPage = lazy(() => import('./Components/NotFound.jsx'));
const SocialAccount = lazy(() => import('./Pages/SocialAccounts.jsx'))
const Scheduler = lazy(() => import('./Pages/Scheduler.jsx'))
const Post = lazy(() => import("./Pages/Posts.jsx")) 
const PrivacyPolicy =  lazy(()=> import("./Pages/PrivacyPolicy.jsx"))
const TermsOfService = lazy(()=>import("./Pages/TermsOfService.jsx"))
// Importing the Loading component for the fallback
import { useDispatch, useSelector } from 'react-redux';
import Loading from './Components/Loading.jsx';
import Login from './Pages/auth/Login.jsx';
import RegisterUser from './Pages/auth/Register.jsx';
import ProtectRoute from './utils/ProtectRoute.jsx';
import { getUserProfile } from './redux/auth/authActions.js';
import ChangePassword from './Pages/auth/ChangePassword.jsx';

const App = () => {
  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector(state => state.auth);


  useEffect(() => {
    // Extract token from cookies and save to localStorage
    const cookieToken = document.cookie
  console.log("cookieToken", cookieToken)
  }, []);

  useEffect(() => {
    dispatch(getUserProfile())
  }, [dispatch]);






  return (
    <Router  >
      {/* Wrap your app in Suspense to handle the loading fallback */}
      <Suspense fallback={<Loading />}>
        <NavbarWithSidebar  >





          <Routes>
            <Route element={<ProtectRoute user={isAuthenticated} />}>
              <Route path="/" element={<DashBoard />} />
              <Route path="/profile-settings" element={<Profile />} />
              <Route path="/change-password" element={<ChangePassword />} />
              <Route path="/social-accounts" element={<SocialAccount />} />
              <Route path="/scheduler" element={<Scheduler />} />
              <Route path="/posts" element={<Post />} />

            </Route>
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route
              path='/login'
              element={
                <ProtectRoute user={!isAuthenticated} redirect='/' >
                  <Login />
                </ProtectRoute>
              }
            />
            {/* <Route path='/register' element={<RegisterUser/>}/> */}


            <Route path="/register" element={<RegisterUser />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </NavbarWithSidebar>
      </Suspense>
    </Router>
  );
};

export default App;

// export const server = ' http://localhost:4000';