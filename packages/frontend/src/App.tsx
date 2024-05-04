import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { getCurrentUser, fetchUserAttributes } from 'aws-amplify/auth';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import Dashboard from './pages/Dashboard/Dashboard';
/**import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';*/


function App() {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();
  // Get the current logged in user info this is not working
  const getUser = async () => {
    const user = await getCurrentUserInfo();
    if (user) setUser(user);
    setLoading(false);
  };

  const getCurrentUserInfo = async () => {
    const { username, userId: id } = await getCurrentUser();
    const attributes = fetchUserAttributes();
    console.log((await attributes).email);
    return {
      id,
      username,
      attributes,
    };
  };

  useEffect(() => {
    getUser();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
  
      <Routes>
      <Route
          path="/Dashboard"
          element={
            <>
              <PageTitle title=" Dashboard " />
              <Dashboard />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <PageTitle title="Signin | DachCop" />
              <SignIn setUser={setUser} user={user}/>
            </>
          }
        />
        <Route
          path="/Authentication/SignIn"
          element={
            <>
              <PageTitle title="Signin | DachCop" />
              <SignIn setUser={setUser} user={user}/>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
