import React from 'react';
import { Link } from 'react-router-dom';

function ResetPassword() {
  return (
    <form>
      <p className="mb-4">Please enter you new password</p>
      <div className="mb-4">
        <input
          type="password"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleFormControlInput1"
          placeholder="Password"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleFormControlInput1"
          placeholder="Re-type password"
        />
      </div>
      <div className="text-center pt-1 mb-12 pb-1">
        <button
          className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          style={{
            background: 'linear-gradient(to right,#ee7724,#d8363a,#dd3675,#b44593)',
          }}
        >
          Change password
        </button>

        <Link className="text-gray-500 mt-6 inline-block" to={'/auth/login'}>
          Go back to Login page (This line will be removed on PROD)
        </Link>
      </div>
    </form>
  );
}

export default ResetPassword;
