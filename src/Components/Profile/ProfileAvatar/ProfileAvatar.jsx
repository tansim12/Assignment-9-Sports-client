import useAuthContext from "../../../useAuthContext";
import DeleteAccount from "./DeleteAccount";
import ProfileAvatarAndName from "./ProfileAvatarAndName";
import ProfileUpdate from "./ProfileUpdate";
import ResetPassword from "./ResetPassword";
import SettingsAndPrivacy from "./SettingsAndPrivacy";
import VerifyAccont from "./VerifyAccont";

const ProfileAvatar = () => {
  const { user } = useAuthContext();
  return (
    <div>
      <div className="avatar hover:cursor-pointer">
        <div className="w-8 sm:w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <p onClick={() => document.getElementById("my_modal_4").showModal()}>
            <img src={user?.photoURL || ""} alt={user?.displayName} />
          </p>
          <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-full sm:w-[55%] max-w-5xl">
              {/* into modal  */}
              <ProfileAvatarAndName></ProfileAvatarAndName>
              <div className="mt-3">
                <ProfileUpdate></ProfileUpdate>
              </div>
              <div className="mt-3">
                <VerifyAccont></VerifyAccont>
              </div>
              <div className="mt-3">
                <ResetPassword></ResetPassword>
              </div>
              <div className="mt-3">
                <SettingsAndPrivacy></SettingsAndPrivacy>
              </div>
              <div className="mt-3">
                <DeleteAccount></DeleteAccount>
              </div>

              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>

    // <div>
    //   <div className="avatar">
    //     <div className="w-8 sm:w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    //       <img
    //         src={user?.photoURL ?  user?.photoURL : ""}
    //         alt={user?.displayName}
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProfileAvatar;
