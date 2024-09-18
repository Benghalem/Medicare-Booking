/* import components */
import DoctorCard from "@components/common/Doctors/DoctorCard";
import { doctors } from "@assets/data/doctors";
import Testimonial from "@components/common/Testimonial/Testimonial";

const Doctors = () => {
  return (
    <>
      {/* ========== search section start =========== */}
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Find a Doctor</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer
            placeholder:text-textColor"
              placeholder="Search doctor by name"
            />
            <button className="btn mt-0 rounded-[0px] rounded-r-md ">
              Search
            </button>
          </div>
        </div>
      </section>
      {/* ========== search section end =========== */}

      {/* ========== search section list doctors start =========== */}
      <section>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
            {doctors.map((doctor) => (
              <DoctorCard key={Number(doctor.id)} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>
      {/* ========== search section list doctors end =========== */}

      {/* ========== test imonial section ============= */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center ">What Our Patients Say</h2>
            <p className="text__para text-center">
              world-class care for everyone. Our helthy System offers unmatched,
              expert health care.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
      {/* ========== test imonial section end ============= */}
    </>
  );
};

export default Doctors;
