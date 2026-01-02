import { useAuth } from "../../hooks/useAuth";
import addPhoto from "../../assets/icons/addPhoto.svg";

const ModalNewPost = ({ title = "Create Post" }) => {
  const { auth } = useAuth();

  return (
    <>
      <main className="mx-auto max-w-255 py-8">
        <div className="container">
          {/* <!-- Create Post  --> */}
          <div className="card relative">
            <h6 className="mb-3 text-center text-lg font-bold lg:text-xl">
              {title}
            </h6>

            <form>
              <div className="mb-3 flex items-center justify-between gap-2 lg:mb-6 lg:gap-4">
                <div className="flex items-center gap-3">
                  <img
                    className="max-w-10 max-h-10 rounded-full lg:max-h-14.5 lg:max-w-14.5"
                    src={`${import.meta.env.VITE_SERVER_BASE_URL}/${
                      auth?.user?.avatar
                    }`}
                    alt="avatar"
                  />
                  <div>
                    <h6 className="text-lg lg:text-xl">
                      {auth?.user?.firstName} {auth?.user?.lastName}
                    </h6>

                    <span className="text-sm text-gray-400 lg:text-base">
                      Public
                    </span>
                  </div>
                </div>

                <label
                  className="btn-primary cursor-pointer text-gray-100!"
                  for="photo"
                >
                  <img src={addPhoto} alt="Add Photo" />
                  Add Photo
                </label>
                <input type="file" name="photo" id="photo" className="hidden" />
              </div>
              {/* <!-- Post Text Input --> */}

              <textarea
                name="post"
                id="post"
                placeholder="Share your thoughts..."
                className="h-30 w-full bg-transparent focus:outline-none lg:h-40"
              ></textarea>
              <div className="border-t border-[#3F3F3F] pt-4 lg:pt-6">
                <button
                  className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
                  type="submit"
                >
                  Post
                </button>
              </div>
            </form>
          </div>
          {/* <!-- Create Post --> */}
        </div>
      </main>
    </>
  );
};

export default ModalNewPost;
