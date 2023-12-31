import toast from "react-hot-toast";
import useAuthContext from "../../../useAuthContext";

const ResetPassword = () => {
  const { user, resetPassword } = useAuthContext();
  const email = user?.email;
  // handleResetPassword
  const handleReset = () => {
    resetPassword(email)
      .then(() => {
        toast.success("Password reset successfully and check your email");
      })
      .catch(() => {
        toast.error("Please first verify your email then reset your password");
      });
  };

  return (
    <div onClick={handleReset}>
      <p className="text-black btn btn-ghost w-full btn-outline ">
        Reset Password
      </p>
    </div>
  );
};

export default ResetPassword;
