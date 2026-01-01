const Error = ({ message }) => {
    return (
        <div className="flex items-center justify-center p-4 mt-8 bg-red-500/10 border border-red-500 rounded-lg">
            <p className="text-red-500 text-lg font-medium">
                {message || "An error occurred while fetching data."}
            </p>
        </div>
    );
};

export default Error;
