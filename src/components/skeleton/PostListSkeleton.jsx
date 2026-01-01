const PostSkeleton = () => {
    return (
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
    );
};

const PostListSkeleton = () => {
    return (
        <>
            <PostSkeleton />
            <PostSkeleton />
        </>
    );
};

export default PostListSkeleton;
