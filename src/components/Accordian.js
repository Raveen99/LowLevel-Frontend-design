import AccordianItem from "./AccordianItem";
import { useState } from "react";

const data = [
  {
    id: 0,
    title: "Item 1",
    body: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    id: 1,
    title: "Item 2",
    body: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    id: 2,
    title: "Item 3",
    body: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
];

const Accordian = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="w-1/2 mx-auto p-4">
      {data.map((item) => (
        <AccordianItem
          key={item.id}
          title={item.title}
          body={item.body}
          isOpen={item.id === openIndex}
          setIsOpen={() => {
            openIndex === item.id ? setOpenIndex(null) : setOpenIndex(item.id);
          }}
        />
      ))}
    </div>
  );
};

export default Accordian;
