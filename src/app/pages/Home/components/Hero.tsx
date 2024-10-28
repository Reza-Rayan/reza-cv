// Images
import heroImage from "../../../../assets/heroImage.png";
// ---------------------------------------------------------

const Hero = () => {
  return (
    <section className="container mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
      <div className="flex flex-col gap-y-4 items-center lg:items-start justify-center lg:order-first order-last">
        <h2 className="lg:text-5xl text-3xl  font-black lg:mt-0 mt-6">
          Hello,I'm Reza
        </h2>
        <p className="lg:text-5xl text-3xl  font-black leading-[1.5] text-center lg:text-justify">
          I'm a Mid-Level{" "}
          <span
            className="text-secondary drop-shadow-xl shadow-secondary"
            style={{ textShadow: "0 5px 10px #eeeeee50" }}
          >
            Front-End Developer
          </span>
          .
          <br />
          This is my personal website so you can get to know my{" "}
          <span
            className="text-orange-500"
            style={{ textShadow: "0 5px 10px #eeeeee50" }}
          >
            Stacks
          </span>{" "}
          and see resume of my work.
        </p>
        {/* Badges */}
        <div className="lg:flex gap-2 mt-6 grid grid-cols-3">
          <span className="badge badge-outline badge-secondary">
            Javascript
          </span>
          <span className="badge badge-outline badge-primary">React.js</span>
          <span className="badge badge-outline badge-info">Tailwind.css</span>
          <span className="badge badge-outline badge-accent">React Query</span>
          <span className="badge badge-outline badge-error">PWA</span>
          <span className="badge badge-outline badge-success">
            Redux-Toolkit
          </span>
          <span className="badge badge-outline badge-primary">NodeJs</span>
          <span className="badge badge-outline badge-error">Wordpress</span>
        </div>
        {/* End Here */}
      </div>
      <div className="tooltip tooltip-right" data-tip="He is not me!">
        <img
          src={heroImage}
          alt="Reza Hosseinzadeh"
          width={650}
          className="mx-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
