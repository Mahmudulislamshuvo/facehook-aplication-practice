import Bio from "./profile/Bio";

const Profile = () => {
  return (
    <>
      <main className="mx-auto max-w-5xl py-8">
        <div className="container">
          {/* profile info */}
          <div className="flex flex-col items-center py-8 text-center">
            {/* profile image */}

            {/* bio */}

            <Bio />

            <div className="w-3/4 border-b border-gray-700 py-6 lg:py-8" />
          </div>
          {/* end profile info */}

          <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl">Your Posts</h4>

          {/* post */}

          {/* post ends */}
        </div>
      </main>
    </>
  );
};

export default Profile;
