export type ServiceCardProps = {
  href?: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
};



export const ServiceCard = (props: ServiceCardProps) => {
  const content = (
    <>
      <div className="box-border caret-transparent">
        <div className="relative box-border caret-transparent -mx-5 -mt-5 mb-5 md:-mx-[30px] md:-mt-[30px] md:mb-[30px]">
          <img
            src={props.image}
            alt={props.imageAlt}
            width={400}
            height={240}
            loading="lazy"
            className="box-border caret-transparent block h-48 w-full object-cover md:h-56"
          />
        </div>
        <div className="box-border caret-transparent">
          <h3 className="text-gray-900 text-xl font-bold box-border caret-transparent leading-[26.4px] mb-2.5 sm:text-[22px] md:text-[26px] md:leading-[31.2px]">
            {props.title}
          </h3>
          <p className="text-gray-700 text-sm sm:text-base box-border caret-transparent mt-[30px] mb-5 md:mt-[50px] leading-relaxed">
            {props.description}
          </p>
          <span className="inline-flex items-center gap-1.5 text-[#c2410c] text-sm font-bold">
            Learn More
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </div>
      </div>
      <div className="relative bg-[#323232] box-border caret-transparent z-[2] -ml-5 -mb-5 pr-2.5 pt-2.5 rounded-tr-[30px] md:mb-[-30px] md:ml-[-30px]">
        <img
          src="https://c.animaapp.com/mial13ktyN5Jkh/assets/67a31be1140edc3afbf591be_e2d97ed2be41fc7b4874e6bea3c7ef44_shape-02.svg"
          alt=""
          aria-hidden="true"
          className="absolute box-border caret-transparent h-5 max-w-full -rotate-90 w-5 left-0 -top-5 md:h-[26px] md:top-[-25px] md:w-[26px] md:-left-px"
          style={{ filter: 'brightness(0) saturate(100%) invert(20%)' }}
        />
        <img
          src="https://c.animaapp.com/mial13ktyN5Jkh/assets/67a31be1140edc3afbf591be_e2d97ed2be41fc7b4874e6bea3c7ef44_shape-02.svg"
          alt=""
          aria-hidden="true"
          className="absolute box-border caret-transparent h-5 max-w-full -rotate-90 w-5 -right-5 bottom-0 md:h-[26px] md:right-[-25px] md:w-[26px] md:-bottom-px"
          style={{ filter: 'brightness(0) saturate(100%) invert(20%)' }}
        />
        <div className="relative items-center bg-gray-300 box-border caret-transparent flex h-10 justify-center w-10 rounded-[50%] md:h-[54px] md:w-[54px]">
          <img
            src="https://c.animaapp.com/mial13ktyN5Jkh/assets/670f922e1c7b30c0affab90e_arrow-01.svg"
            alt=""
            aria-hidden="true"
            className="box-border caret-transparent h-3.5 max-w-full w-5 md:h-4 md:w-[22px]"
            style={{ filter: 'brightness(0) saturate(100%)' }}
          />
        </div>
      </div>
    </>
  );

  if (props.href) {
    return (
      <a
        href={props.href}
        aria-label={`View ${props.title} service details`}
        className="relative items-start bg-gray-300 box-border caret-transparent flex flex-col justify-between max-w-full overflow-hidden p-5 rounded-r-[20px] rounded-tl-[20px] md:p-[30px] hover:decoration-transparent hover:bg-gray-400 transition-colors duration-300"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="relative items-start bg-gray-300 box-border caret-transparent flex flex-col justify-between max-w-full overflow-hidden p-5 rounded-r-[20px] rounded-tl-[20px] md:p-[30px]">
      {content}
    </div>
  );
};
