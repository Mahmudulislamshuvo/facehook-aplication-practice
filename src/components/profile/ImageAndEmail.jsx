import { useProfile } from "../../hooks/useProfile";
import editIcon from "../../assets/icons/edit.svg";

const ImageAndEmail = () => {
  const { state, dispatch } = useProfile();

  return (
    <>
      <div className="relative mb-8 max-h-44 max-w-44 rounded-full lg:mb-11 lg:max-h-56 lg:max-w-56">
        <img
          className="rounded-full h-56 w-56 object-cover"
          src={`${import.meta.env.VITE_SERVER_BASE_URL}/${state.user.avatar}`}
          alt={`${state.user.firstName} ${state.user.lastName}`}
        />

        <button className="flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80">
          <img src={editIcon} alt="Edit" />
        </button>
      </div>

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

export default ImageAndEmail;
