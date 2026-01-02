import { useAuth } from "../../hooks/useAuth";
import { useProfile } from "../../hooks/useProfile";
import addPhoto from "../../assets/icons/addPhoto.svg";

const ModalNewPost = ({
  title = "Create Post",
  register,
  errors,
  handleSubmit,
  handleCreatePost,
}) => {
  const { auth } = useAuth();
  const { state } = useProfile();

  const userProfileImage = state?.user?.avatar ?? auth?.user?.avatar;

  return (
    <main className="mx-auto max-w-255 py-8">
      <div className="container">
        <div className="card relative">
          <h6 className="mb-3 text-center text-lg font-bold lg:text-xl">
            {title}
          </h6>

          <form onSubmit={handleSubmit(handleCreatePost)}>
            {/* Header */}
            <div className="mb-3 flex items-center justify-between gap-2 lg:mb-6 lg:gap-4">
              <div className="flex items-center gap-3">
                <img
                  className="max-w-10 max-h-10 rounded-full lg:max-h-14.5 lg:max-w-14.5"
                  src={`${
                    import.meta.env.VITE_SERVER_BASE_URL
                  }/${userProfileImage}`}
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

              {/* Image picker */}
              <label
                htmlFor="photo"
                className="btn-primary cursor-pointer text-gray-100!"
              >
                <img src={addPhoto} alt="Add Photo" />
                Add Photo
              </label>

              <input
                type="file"
                name="image"
                id="photo"
                accept="image/*"
                className="hidden"
                {...register("image")}
              />
            </div>

            {/* Content */}
            <textarea
              placeholder="Share your thoughts..."
              name="content"
              className="h-30 w-full bg-transparent focus:outline-none lg:h-40"
              {...register("content", { required: "Content is required" })}
            />
            {errors.content && (
              <p className="mt-1 text-sm text-red-500">
                {errors.content.message}
              </p>
            )}

            {/* Submit */}
            <div className="border-t border-[#3F3F3F] pt-4 lg:pt-6">
              <button
                type="submit"
                className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ModalNewPost;
