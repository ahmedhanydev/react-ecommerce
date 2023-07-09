const SubTitle = ({ title, btnTitle }) => {
  return (
    <div className="flex justify-between px-3 my-4 ">
      <div className="text-2xl font-bold">{title}</div>
      {btnTitle ? (
        <button className="text-violet-700 hover:text-violet-500 font-bold">
          {btnTitle}
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default SubTitle;