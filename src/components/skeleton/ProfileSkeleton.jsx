const ProfileSkeleton = () => {
  return (
    <main className="mx-auto max-w-5xl py-8">
      <div className="container">
        {/* profile info */}
        <div className="flex flex-col items-center py-8 text-center">
          {/* Avatar Skeleton */}
          <div className="relative mb-8 h-44 w-44 rounded-full bg-gray-700 animate-pulse lg:mb-11 lg:h-56 lg:w-56" />

          {/* Name Skeleton */}
          <div className="h-8 w-48 rounded bg-gray-700 animate-pulse mb-4" />
          
          {/* Email Skeleton */}
          <div className="h-4 w-64 rounded bg-gray-700 animate-pulse" />

          {/* Bio Skeleton */}
          <div className="mt-6 flex flex-col items-center gap-2 w-full max-w-2xl">
            <div className="h-4 w-full rounded bg-gray-700 animate-pulse" />
            <div className="h-4 w-full rounded bg-gray-700 animate-pulse" />
            <div className="h-4 w-3/4 rounded bg-gray-700 animate-pulse" />
          </div>

          <div className="w-3/4 border-b border-gray-700 py-6 lg:py-8" />
        </div>
        {/* end profile info */}

        <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl h-8 w-32 bg-gray-700 rounded animate-pulse" />

        {/* Post Skeleton */}
        <article className="card mt-6 lg:mt-8">
          {/* post header */}
          <header className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gray-700 animate-pulse lg:h-14 lg:w-14" />
              <div>
                <div className="h-4 w-32 rounded bg-gray-700 animate-pulse mb-2" />
                <div className="h-3 w-20 rounded bg-gray-700 animate-pulse" />
              </div>
            </div>
          </header>

          {/* post body */}
          <div className="border-b border-gray-700 py-4 lg:py-5">
            <div className="h-64 w-full rounded bg-gray-700 animate-pulse mb-4" />
            <div className="h-4 w-full rounded bg-gray-700 animate-pulse mb-2" />
            <div className="h-4 w-3/4 rounded bg-gray-700 animate-pulse" />
          </div>

          {/* post actions */}
          <div className="flex items-center justify-between py-6 lg:px-10 lg:py-8">
            <div className="h-8 w-20 rounded bg-gray-700 animate-pulse" />
            <div className="h-8 w-20 rounded bg-gray-700 animate-pulse" />
            <div className="h-8 w-20 rounded bg-gray-700 animate-pulse" />
          </div>
        </article>
      </div>
    </main>
  );
};

export default ProfileSkeleton;
