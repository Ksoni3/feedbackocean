import LoginButton from "../components/LoginButton";
import { signin } from "../../../constants/signin";
import signInSingleItemProps from "../../../types";
import SignInForm from "../components/SignInForm";

const LogIn = () => {
  return (
    <div className="h-screen w-full bg-white flex items-center">
      <div className="w-full md:w-1/2 h-screen md:h-auto  md:mx-auto pt-20 md:py-10 text-center rounded-lg">
        <div>
          {" "}
          <h1 className="text-center text-2xl md:text-3xl font-bold mb-4">
            {" "}
            Welcome to Feedback <span className="text-blue-700"> Ocean</span>
          </h1>
          <h2>
            {" "}
            Don't have an account ?{" "}
            <a href="#" className="underline text-blue-700">
              {" "}
              Sign Up
            </a>
          </h2>
        </div>
        <div className="flex flex-col gap-4 py-6 mx-auto w-3/4 md:w-[80%]">
          {signin.map((singleItem: signInSingleItemProps, index: number) => {
            return <LoginButton key={index} singleItem={singleItem} />;
          })}
        </div>
        <div className="flex items-center gap-4 px-3">
          {" "}
          <hr className="w-1/2" /> OR <hr className="w-1/2" />{" "}
        </div>
        <div className="w-[90%] md:w-[60%] mx-auto mt-3">
          <SignInForm />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
