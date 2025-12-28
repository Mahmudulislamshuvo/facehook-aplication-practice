const Navbar = () => {
  return (
    <>
      <nav class="sticky top-0 z-50 border-b border-[#3F3F3F] bg-[#1E1F24] py-4">
        <div class="container flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* <!-- Logo --> */}
          <a href="./index.html">
            <img
              class="max-w-25 rounded-full lg:max-w-32.5"
              src="./assets/images/logo.svg"
            />
          </a>
          {/* <!-- nav links  --> */}

          <div class="flex items-center space-x-4">
            <a href="./index.html" class="btn-primary">
              <img src="./assets/icons/home.svg" alt="Home" />
              Home
            </a>
            <button class="icon-btn">
              <img src="./assets/icons/notification.svg" alt="Notification" />
            </button>
            <button class="icon-btn">
              <img src="./assets/icons/logout.svg" alt="Logout" />
            </button>

            <button class="flex-center ml-8! gap-3">
              <span class="text-lg font-medium lg:text-xl">Sumit</span>
              <img
                class="max-h-8 max-w-8 lg:max-h-11 lg:max-w-11"
                src="./assets/images/avatars/avatar_1.png"
                alt=""
              />
            </button>
          </div>
          {/* <!-- nav links ends --> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
