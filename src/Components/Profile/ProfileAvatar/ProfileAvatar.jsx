import useAuthContext from "../../../useAuthContext";

const ProfileAvatar = () => {
  const { user } = useAuthContext();
  return (
    <div>
      <div className="avatar">
        <div className="w-8 sm:w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img
            src={user?.photoURL ?  user?.photoURL : ""}
            alt={user?.displayName}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileAvatar;
