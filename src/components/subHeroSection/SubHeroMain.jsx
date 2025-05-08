const SubHeroMain = () => {
  return (
    <div className="w-full border-y bg-brown border-lightGrey text-lightGrey flex justify-between items-center py-8 px-6 gap-4 sm:flex-col sm:text-center">
      <p className="max-w-md text-left text-lightGrey text-[24px] sm:text-[18px] sm:max-w-full sm:mb-4">
        Click the button to download my resume and explore my skills and projects.
      </p>
      <a 
        href="../../public/Prajwal Mulik_Resume.pdf" 
        download 
        className="bg-white text-darkBrown py-2 px-4 rounded-lg hover:bg-lightGrey transition duration-300 font-semibold text-[24px] sm:text-[18px] sm:px-6 sm:py-3"
      >
        Download Resume
      </a>
    </div>
  );
};

export default SubHeroMain;
