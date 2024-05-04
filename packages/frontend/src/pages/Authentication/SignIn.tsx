import React, { useState, useEffect } from 'react';
import Logo from '../../images/logo/logo.png';
import {toast} from 'react-toastify'
import { signIn } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from 'aws-amplify/auth';

type SetStateType<T> = React.Dispatch<React.SetStateAction<T>>;
const SignIn = ({
  setUser,
}: {
  setUser: SetStateType<any>;
  user: any;
}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  const handleSignIn = async (email: string, password: string) => {
    toast.info('Logging in...', { position: 'top-right' });
    try {
      const user = await signIn({ username: email, password });
      setUser(user);
     toast.success('Welcome!', { position: 'top-right' });
      navigate('/Dashboard'); // Redirect to dashboard after successful sign-in
    } catch (error) {
      console.error('Error signing in', error);
      toast.error('Error signing in', { position: 'top-right' });
    }
  };

   useEffect(() => {
    const checkUser = async () => {
      const currentUser = await getCurrentUser();
      if (currentUser) {
        setUser(currentUser);
        console.log('userid', currentUser.userId);
        navigate('/Dashboard');
      }
    };
    checkUser();
  }, []);

  return ( 

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="py-17.5 px-26 text-center">
                <img className=' '
                 src={Logo} alt="Logo" />
       
            </div>
          </div>

          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Sign In to DashCop
              </h2>

              <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSignIn(email, password);
                  }}
              >
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-5">
              
                  <input 
                    type="submit"
                    value="Sign In"
                    className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                  />
              
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SignIn;
