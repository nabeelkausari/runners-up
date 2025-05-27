import { SignUp } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const SignUpPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create a new account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <button
                onClick={() => navigate('/sign-in')}
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                sign in to your existing account
              </button>
            </p>
          </div>
          <div className="mt-8">
            <SignUp 
              routing="path"
              path="/sign-up"
              signInUrl="/sign-in"
              afterSignUpUrl="/"
              afterSignInUrl="/"
              appearance={{
                variables: {
                  colorPrimary: '#2563eb',
                  colorText: '#111827',
                  colorTextSecondary: '#4b5563',
                  colorBackground: '#ffffff',
                  colorInputBackground: '#ffffff',
                  colorInputText: '#111827',
                },
                elements: {
                  card: 'shadow-sm border border-gray-200 rounded-lg',
                  headerTitle: 'text-2xl font-bold text-gray-900',
                  headerSubtitle: 'text-gray-600',
                  formFieldLabel: 'text-sm font-medium text-gray-700',
                  formFieldInput: 'border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
                  formButtonPrimary: 'bg-blue-600 hover:bg-blue-700 text-white',
                  footerActionText: 'text-sm text-gray-600',
                  footerActionLink: 'text-blue-600 hover:text-blue-700 font-medium',
                }
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUpPage;
