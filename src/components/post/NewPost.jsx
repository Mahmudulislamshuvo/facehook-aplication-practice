import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import AppModal from "../common/Modal";
import ModalNewPost from "./ModalNewPost";

const NewPost = () => {
  const { auth } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="card">
        <div className="flex-center mb-3 gap-2 lg:gap-4">
          <img
            className="max-w-10 max-h-10 rounded-full lg:max-h-14.5 lg:max-w-14.5"
            src={`${import.meta.env.VITE_SERVER_BASE_URL}/${
              auth?.user?.avatar
            }`}
            alt="avatar"
          />

          <div className="flex-1">
            <textarea
              className="h-16 w-full rounded-md bg-lighterDark p-3 focus:outline-none sm:h-20 sm:p-6"
              name="post"
              id="post"
              onClick={() => setOpen(true)}
              readOnly={true}
              placeholder="What's on your mind?"
            ></textarea>
          </div>
        </div>
        <>
          <AppModal
            isOpen={open}
            onClose={() => setOpen(false)}
            // title="Create A New Post"
          >
            <ModalNewPost title="Create A New Post" />

            <button
              onClick={() => setOpen(false)}
              className="mt-4 rounded bg-red-500 px-4 py-2 text-white"
            >
              Close
            </button>
          </AppModal>
        </>
      </div>
    </>
  );
};

export default NewPost;
