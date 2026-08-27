import { ContactForm } from "@/pages/contact/components/ContactForm";

export const ContactFormSection = () => {
  return (
    <div className="box-border caret-transparent mb-[50px] md:mb-[70px]">
      <div className="bg-[#c2410c] box-border caret-transparent p-4 sm:p-5 rounded-[20px] md:p-10 max-w-[800px] mx-auto border-2 border-[#c2410c] shadow-lg">
        <div className="box-border caret-transparent mb-[15px]">
          <ContactForm />
          <div
            role="region"
            aria-label="Contact Form success"
            className="text-white bg-[#c2410c] box-border caret-transparent hidden text-center p-[15px] rounded-[20px]"
          >
            <div className="box-border caret-transparent">
              Thank you! Your submission has been received!
            </div>
          </div>
          <div
            role="region"
            aria-label="Contact Form failure"
            className="text-white bg-[#ea580c] box-border caret-transparent hidden text-center mt-2.5 p-[15px] rounded-[20px]"
          >
            <div className="box-border caret-transparent">
              Oops! Something went wrong while submitting the form.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

