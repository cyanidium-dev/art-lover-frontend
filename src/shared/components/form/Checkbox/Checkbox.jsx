const Checkbox = ({ label }) => {
  return (
    <div>
      <label className="inline-flex items-center cursor-pointer space-x-2">
        <input
          type="checkbox"
          // checked={checked}
          // onChange={onChange}
          className="hidden peer"
        />
        <div
          className="w-5 h-5 mr-[16px] rounded border border-[#3A3A3A] peer-checked:bg-orange flex items-center justify-center transition">
          <svg
            className="w-3 h-3 text-white hidden peer-checked:block"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <span className="text-[14ppx] font-light color-black">{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
