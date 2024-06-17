import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";

const AccordianItem = ({ title, body, isOpen, setIsOpen }) => {
  return (
    <div className="m-4 border-black border">
      <div
        className="bg-slate-300 p-2 text-lg font-semibold flex justify-between cursor-pointer"
        onClick={() => setIsOpen()}
      >
        <span>{title}</span>
        <span>
          {isOpen ? (
            <RiArrowDropUpLine size={32} />
          ) : (
            <RiArrowDropDownLine size={32} />
          )}
        </span>
      </div>

      {isOpen && <div className="p-3">{body}</div>}
    </div>
  );
};

export default AccordianItem;
