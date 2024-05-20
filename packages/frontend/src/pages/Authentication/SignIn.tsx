import React, { useState, useEffect } from 'react';
import Logo from '../../images/logo/logo.png';
import { toast } from 'react-toastify';
import { signIn } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from 'aws-amplify/auth';

type SetUserType = React.Dispatch<React.SetStateAction<any>>;

const SignIn: React.FC<{ setUser: SetUserType }> = ({ setUser }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  const [incorrectInput, setIncorrectInput] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

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
      setIncorrectInput(true);
      setErrorMessage('Incorrect username or password');
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSignIn(email, password);
  };

  const handleInputChange = () => {
    if (incorrectInput) {
      setIncorrectInput(false);
      setErrorMessage('');
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
            <img className="" src={Logo} alt="Logo" />
          </div>
        </div>

        <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
          <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
            <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
              Sign In to DashCop
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black dark:text-white">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    onChange={(e) => { setEmail(e.target.value); handleInputChange(); }}
                    placeholder="Enter your email"
                    className={`w-full rounded-lg border ${incorrectInput ? 'border-red-500' : 'border-stroke'} bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary`}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="mb-2.5 block font-medium text-black dark:text-white">Password</label>
                <div className="relative">
                  <input
                    type="password"
                    onChange={(e) => { setPassword(e.target.value); handleInputChange(); }}
                    placeholder="Enter your password"
                    className={`w-full rounded-lg border ${incorrectInput ? 'border-red-500' : 'border-stroke'} bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary`}
                  />
                </div>
              </div>

              <div className="mb-5">
                {incorrectInput && <p className="text-red-500 font-semibold my-2">{errorMessage}</p>}
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
