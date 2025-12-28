const CreatePost = () => {
  return (
    <>
      <main className="mx-auto max-w-5xl py-8">
        <div className="container">
          {/* Create Post */}
          <div className="card relative">
            <h6 className="mb-3 text-center text-lg font-bold lg:text-xl">
              Create Post
            </h6>

            <form>
              <div className="mb-3 flex items-center justify-between gap-2 lg:mb-6 lg:gap-4">
                <div className="flex items-center gap-3">
                  <img
                    className="max-h-10 max-w-10 rounded-full lg:max-h-14 lg:max-w-14"
                    src="./assets/images/avatars/avatar_1.png"
                    alt="avatar"
                  />
                  <div>
                    <h6 className="text-lg lg:text-xl">Sumit Saha</h6>
                    <span className="text-sm text-gray-400 lg:text-base">
                      Public
                    </span>
                  </div>
                </div>

                <label
                  htmlFor="photo"
                  className="btn-primary cursor-pointer text-gray-100!"
                >
                  <img src="./assets/icons/addPhoto.svg" alt="Add Photo" />
                  Add Photo
                </label>

                <input type="file" name="photo" id="photo" className="hidden" />
              </div>

              {/* Post Text Input */}
              <textarea
                name="post"
                id="post"
                placeholder="Share your thoughts..."
                className="h-32 w-full bg-transparent focus:outline-none lg:h-40"
              />

              <div className="border-t border-gray-700 pt-4 lg:pt-6">
                <button
                  type="submit"
                  className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
                >
                  Post
                </button>
              </div>
            </form>
          </div>
          {/* Create Post ends */}
        </div>
      </main>
    </>
  );
};

export default CreatePost;
