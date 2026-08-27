import { projects } from "@/data/projects";

export const ProjectsSection = () => {
  const images = projects.map((project) => ({
    src: project.image,
    alt: project.imageAlt,
    href: `/projects/${project.slug}`,
    title: project.title,
  }));

  return (
    <section id="projects" className="bg-transparent box-border py-[60px] md:py-[100px]">
      <div className="box-border max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border flex flex-col gap-y-4">
          <div className="box-border flex justify-center">
            <div className="box-border border border-neutral-500/40 px-3 py-1 rounded-[1000px]">
              <div className="font-medium leading-[22px] text-white">Gallery</div>
            </div>
          </div>
          <div className="box-border max-w-[760px] text-center mx-auto">
            <h2 className="text-white text-3xl font-bold tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px] uppercase">
              See Our Work
            </h2>
          </div>
        </div>
        <div className="box-border grid auto-cols-[1fr] grid-cols-[1fr] gap-[18px] mt-10 md:grid-cols-[1fr_1fr_1fr] md:gap-5 md:mt-14">
          {images.map((image, index) => (
            <a
              key={image.href}
              href={image.href}
              className={`group relative box-border overflow-hidden rounded-lg md:rounded-xl block ${
                index === 0
                  ? "h-[400px] md:row-end-[span_2] md:row-start-[span_2] md:h-auto"
                  : "h-[277px]"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className="inline-block h-full max-w-full object-cover w-full transition-transform duration-300 group-hover:scale-105"
                loading={index < 3 ? "eager" : "lazy"}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 pt-10 pb-3 md:px-5 md:pb-4">
                <h3 className="text-white text-sm font-bold leading-tight md:text-base">{image.title}</h3>
              </div>
            </a>
          ))}
        </div>
        <div className="box-border mt-8 text-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center text-white bg-[#ea580c] border border-transparent px-6 py-4 rounded-[100px] hover:bg-white hover:text-black hover:border-[#ea580c] transition"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
};
