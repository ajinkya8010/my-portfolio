"use client";
import Image from "next/image";

const ResumeButton = () => {
  const handleResumeDownload = () => {
    const resumePath = "/resume/Resume-Software.pdf";
    const resumeLabel = "Software Engineer";
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = `${resumeLabel.replace(/[^a-zA-Z0-9]/g, "-")}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      type="button"
      onClick={handleResumeDownload}
      className="font-medium text-center px-3 py-3 flex gap-1 justify-center rounded-md transition-all ease-in-out delay-150 bg-[#915EFF] hover:bg-purple-600 duration-300 group"
    >
      <Image
        src="/resume.svg"
        width={24}
        height={24}
        alt="resume"
        className="object-contain animate-pulse"
      />
      <span className="lg:block hidden text-white">Download Resume</span>
    </button>
  );
};

export default ResumeButton;
