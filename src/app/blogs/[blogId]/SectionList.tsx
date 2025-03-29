import React from "react";

const SectionList = ({
  sectionId,
  sectionName,
  activeSectionId,
  setActiveSectionId,
}: {
  sectionId: string;
  sectionName: string;
  activeSectionId: string;
  setActiveSectionId: (id: string) => void;
}) => {
  return (
    <div
      id={sectionId}
      className={`px-2 py-2 h-min flex flex-row justify-between items-center w-[75%] rounded-md cursor-pointer transition-colors text-md ${
        sectionId === activeSectionId
          ? "bg-[#f4f4f4] text-[#3F3F46] text-[14px]"
          : "text-[#3F3F46] text-[14px] hover:bg-[#f4f4f4]"
      }`}
      onClick={() => {
        setActiveSectionId(sectionId);

        if (sectionId) {
          const targetElement = document.getElementById(sectionId);
          if (targetElement)
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }}
    >
      {sectionName}
    </div>
  );
};

export default SectionList;
