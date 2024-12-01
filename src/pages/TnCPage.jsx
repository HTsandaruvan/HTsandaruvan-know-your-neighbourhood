import React from "react";
import { terms, conditions } from "../assets";
import LayoutFull from "../components/layout/LayoutFull";

const TnCPage = () => {
  return (
    <LayoutFull>
      <section
        className="min-h-[15vh] w-full bg-cover bg-center relative flex justify-center px-8
        after:absolute after:content-[''] after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-gradient-to-t
        after:from-[#0000004d] after:to-[#00000033]"

      >
        <div className="max-w-[1280px] text-white w-full relative z-10">
          <div className="flex justify-center items-center pt-8">
            <h2 className="font-inter font-bold text-5xl text-color2 drop-shadow-lg text-center">
              Terms And Conditions
            </h2>
          </div>
        </div>
      </section>
      <section className="flex justify-center text-primary px-6 mt-8">
        <div className="max-w-[1280px] w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-gray-600">
              <h3 className="text-3xl underline font-bold text-color1 drop-shadow mb-2">
                Terms
              </h3>
              <p className="mb-2">

              </p>
              <p>
                Unless otherwise specified, the terms of use detailed in this section apply generally when using this Website.

                Single or additional conditions of use or access may apply in specific scenarios and in such cases are additionally indicated within this document.

                By using this Website, Users confirm to meet the following requirements:

                There are no restrictions for Users in terms of being Consumers or Business Users;
              </p>
            </div>
            <img
              src={terms}
              alt="about_us"
              className="rounded-md w-4/6 h-5/6"
            />
          </div>
        </div>


      </section>

      <section className="flex justify-center text-primary px-6 mt-10">
        <div className="max-w-[1280px] w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src={conditions}
              alt="about_us"
              className="rounded-md w-4/6 h-5/6"
            />
            <div className="text-gray-600">
              <h3 className="text-3xl underline font-bold text-color1 drop-shadow mb-2">
                Conditions
              </h3>

              <p>
                But we're more than just a resource. We believe in the power of
                community, which is why we've included features like message
                boards and user-generated content. We want "Know Your
                Neighborhood" to be a place where neighbors can connect and
                engage with each other. So whether you're new to the
                neighborhood or a lifelong resident, we hope you'll join us in
                celebrating all that makes our community special. Thank you for
                choosing "Know Your Neighborhood" as your go-to source for all
                things local.
              </p>
            </div>

          </div>
        </div>


      </section>
    </LayoutFull>
  );
};

export default TnCPage;
