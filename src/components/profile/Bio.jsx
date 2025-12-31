import editIcon from "../../assets/icons/edit.svg";

const Bio = () => {
  return (
    <>
      <div className="mt-4 flex items-start gap-2 lg:mt-6">
        <div className="flex-1">
          <p className="leading-relaxed text-gray-400 lg:text-lg">
            Sumit is an entrepreneurial visionary known for his exceptional
            performance and passion for technology and business. He established
            Analyzen in 2008 while he was a student at Bangladesh University of
            Engineering & Technology (BUET). Analyzen has since become a
            top-tier Web and Mobile Application Development firm and the first
            Digital and Social Media Marketing Agency in Bangladesh.
          </p>
        </div>

        {/* Edit Bio button */}
        <button className="flex-center h-7 w-7 rounded-full">
          <img src={editIcon} alt="Edit" />
        </button>
      </div>
    </>
  );
};

export default Bio;
