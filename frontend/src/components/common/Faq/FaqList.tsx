import { faqs } from "@assets/data/faqs";
import { FaqItem } from "./FaqItem";

export const FaqList = () => {
  return (
    <ul className="mt-[38px]">
      {faqs.map((item, index) => (
        <FaqItem key={index} faq={item} />
      ))}
    </ul>
  );
};
