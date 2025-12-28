const Profile = () => {
  return (
    <>
      <main className="mx-auto max-w-5xl py-8">
        <div className="container">
          {/* profile info */}
          <div className="flex flex-col items-center py-8 text-center">
            {/* profile image */}
            <div className="relative mb-8 max-h-44 max-w-44 rounded-full lg:mb-11 lg:max-h-56 lg:max-w-56">
              <img
                className="max-w-full"
                src="./assets/images/avatars/avatar_1.png"
                alt="sumit saha"
              />

              <button className="flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80">
                <img src="./assets/icons/edit.svg" alt="Edit" />
              </button>
            </div>

            {/* name , email */}
            <div>
              <h3 className="text-2xl font-semibold text-white lg:text-2xl">
                Sumit Saha
              </h3>
              <p className="leading-loose lg:text-lg">sumitsaha@gmail.com</p>
            </div>

            {/* bio */}
            <div className="mt-4 flex items-start gap-2 lg:mt-6">
              <div className="flex-1">
                <p className="leading-relaxed text-gray-400 lg:text-lg">
                  Sumit is an entrepreneurial visionary known for his
                  exceptional performance and passion for technology and
                  business. He established Analyzen in 2008 while he was a
                  student at Bangladesh University of Engineering & Technology
                  (BUET). Analyzen has since become a top-tier Web and Mobile
                  Application Development firm and the first Digital and Social
                  Media Marketing Agency in Bangladesh.
                </p>
              </div>

              {/* Edit Bio button */}
              <button className="flex-center h-7 w-7 rounded-full">
                <img src="./assets/icons/edit.svg" alt="Edit" />
              </button>
            </div>

            <div className="w-3/4 border-b border-gray-700 py-6 lg:py-8" />
          </div>
          {/* end profile info */}

          <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl">Your Posts</h4>

          {/* post */}
          <article className="card mt-6 lg:mt-8">
            {/* post header */}
            <header className="flex items-center justify-between gap-4">
              {/* author info */}
              <div className="flex items-center gap-3">
                <img
                  className="max-h-10 max-w-10 rounded-full lg:max-h-14 lg:max-w-14"
                  src="./assets/images/avatars/avatar_1.png"
                  alt="avatar"
                />
                <div>
                  <h6 className="text-lg lg:text-xl">Sumit Saha</h6>
                  <div className="flex items-center gap-1.5">
                    <img src="./assets/icons/time.svg" alt="time" />
                    <span className="text-sm text-gray-400 lg:text-base">
                      12 min ago
                    </span>
                  </div>
                </div>
              </div>
              {/* author info ends */}

              {/* action dot */}
              <div className="relative">
                <button>
                  <img src="./assets/icons/3dots.svg" alt="3dots of Action" />
                </button>

                {/* Action Menus Popup */}
                <div className="action-modal-container">
                  <button className="action-menu-item hover:text-lwsGreen">
                    <img src="./assets/icons/edit.svg" alt="Edit" />
                    Edit
                  </button>
                  <button className="action-menu-item hover:text-red-500">
                    <img src="./assets/icons/delete.svg" alt="Delete" />
                    Delete
                  </button>
                </div>
              </div>
              {/* action dot ends */}
            </header>
            {/* post header ends */}

            {/* post body */}
            <div className="border-b border-gray-700 py-4 lg:py-5 lg:text-xl">
              <div className="flex items-center justify-center overflow-hidden">
                <img
                  className="max-w-full"
                  src="./assets/images/poster.png"
                  alt="poster"
                />
              </div>
              <p>
                Grateful for the incredible experience of serving as the
                President of the Grand Jury board for this year's Digital
                Marketing Award.
              </p>
            </div>
            {/* post body ends */}

            {/* post actions */}
            <div className="flex items-center justify-between py-6 lg:px-10 lg:py-8">
              {/* Like Button */}
              <button className="flex-center gap-2 text-xs font-bold text-gray-400 hover:text-white lg:text-sm">
                <img src="./assets/icons/like.svg" alt="Like" />
                <span>Like</span>
              </button>

              {/* Comment Button */}
              <button className="icon-btn space-x-2 px-6 py-3 text-xs lg:px-12 lg:text-sm">
                <img src="./assets/icons/comment.svg" alt="Comment" />
                <span>Comment(2)</span>
              </button>

              {/* Share Button */}
              <button className="flex-center gap-2 text-xs font-bold text-gray-400 hover:text-white lg:text-sm">
                <img src="./assets/icons/share.svg" alt="Share" />
                <span>Share</span>
              </button>
            </div>
            {/* post actions end */}
          </article>
          {/* post ends */}
        </div>
      </main>
    </>
  );
};

export default Profile;
