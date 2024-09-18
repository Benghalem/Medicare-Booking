/* import data */
import { services } from "@assets/data/services";
/* import  Component */
import ServicesCard from "@components/Services/ServicesCard";

const Services = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] ">
          {services.map((item, index) => (
            <ServicesCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
