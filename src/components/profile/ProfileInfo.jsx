import { useProfile } from "../../hooks/useProfile";

const ProfileInfo = () => {
  const { state } = useProfile();

  return (
    <>
      {/* name , email */}
      <div>
        <h3 className="text-2xl font-semibold text-white lg:text-2xl">
          {state.user.firstName} {state.user.lastName}
        </h3>
        <p className="leading-loose lg:text-lg">{state.user.email}</p>
      </div>
    </>
  );
};

export default ProfileInfo;
