import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Experience`.
 */
export type ExperienceProps = SliceComponentProps<Content.ExperienceSlice>;

/**
 * Component for "Experience" Slices.
 */
const Experience = ({ slice }: ExperienceProps): JSX.Element => {
  const isEducation = slice.primary.heading === "Education";

  return (
    <Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      {/* 
        By default, this container holds BOTH the "Experience" and "Education"
        sections in a single row. We'll conditionally render each one in its column.
      */}
      <div className="flex flex-col md:flex-row md:justify-between w-full">
        {/* Left column → rendered ONLY if heading is "Experience" */}
        {!isEducation && (
          <div className="md:w-1/2 md:pr-4">
            <Heading as="h2" size="lg" className="mb-4">
              {slice.primary.heading}
            </Heading>
            {slice.primary.role.map((item, index) => (
              <div key={index} className="mb-6">
                <Heading as="h3" size="sm">
                  {item.title}
                </Heading>
                <div className="flex gap-3 text-yellow-400 text-xl font-bold">
                  <span>{item.institution}</span>
                </div>
                <div className="mt-1 flex items-center gap-1 text-xl font-semibold text-slate-400">
                  <span>{item.time_period}</span>
                </div>
                <div className="prose prose-lg prose-invert mt-4">
                  <PrismicRichText field={item.description} />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Right column → rendered ONLY if heading is "Education" */}
        {isEducation && (
          <div className="md:w-1/2 md:pl-4">
            <Heading as="h2" size="lg" className="mb-4">
              {slice.primary.heading}
            </Heading>
            {slice.primary.role.map((item, index) => (
              <div key={index} className="mb-6">
                <Heading as="h3" size="sm">
                  {item.title}
                </Heading>
                <div className="flex gap-3 text-yellow-400 text-xl font-bold">
                  <span>{item.institution}</span>
                </div>
                <div className="mt-1 flex items-center gap-1 text-xl font-semibold text-slate-400">
                  <span>{item.time_period}</span>
                </div>
                <div className="prose prose-lg prose-invert mt-4">
                  <PrismicRichText field={item.description} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Bounded>
  );
};

export default Experience;
