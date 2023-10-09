import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import useAuthContext from "../../useAuthContext";
import toast, { Toaster } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const LoginWith = () => {
  const { githubLogin, googleLogin } = useAuthContext();
  const navigate = useNavigate();
  const loc = useLocation()
  const handleLogin = (media) => {
    media()
      .then(() => {
        toast.success("Login successfully");
        navigate( loc?.state ? loc?.state : "/");
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div>
      <div className="my-4 hover:cursor-pointer">
        <div
          onClick={() => handleLogin(googleLogin)}
          className="border border-red-400 p-2 rounded-lg flex items-center justify-around mb-3"
        >
          <p className="text-2xl">
            <FcGoogle></FcGoogle>
          </p>
          <p className="font-bold">With Google Login </p>
        </div>

        <div
          onClick={() => handleLogin(githubLogin)}
          className="border  p-2 rounded-lg flex items-center justify-around mb-3"
        >
          <p className="text-2xl">
            <BsGithub></BsGithub>
          </p>
          <p className="font-bold">With Google Login </p>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default LoginWith;
