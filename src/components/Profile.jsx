import Bio from "./profile/Bio";
import MyPosts from "./profile/MyPost";
import ProfileImage from "./profile/ProfileImage";
import ProfileInfo from "./profile/ProfileInfo";

const Profile = () => {
  return (
    <>
      <div className="flex flex-col items-center py-8 text-center">
        <ProfileImage />
        <ProfileInfo />
        <Bio />
        <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8" />
      </div>

      <MyPosts />
    </>
  );
};

export default Profile;
