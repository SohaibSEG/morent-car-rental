import { BuAccent } from "../../Components/Buttons/Buttons";
import { CatalogueCard } from "../../Components/Cards/Cards";
import ImgHero from "../../assets/hero.png";
import "./Home.css";
import { getCarArray } from "../../Helpers/CarsProvider";
import { useRef } from "react";
import useDraggableScroll from "use-draggable-scroll";
import HeroForm from "../../Components/Forms/HeroForm";
import { Footer, NavbarTop } from "../../Components/Navigation/Navigation";

function HeroSection() {
  return (
    <section
      className="hero
       grid grid-cols-1 grid-rows-3 content-center gap-4 m-auto my-8 max-w-[100rem] 
       md:grid-rows-2 md:grid-cols-2 md:gap-8 md:mt-12
       lg:my-16
      "
    >
      <div
        className="
        text-center hero-text max-w-2xl self-center row-start-2 
        md:text-start
        lg:row-start-1 
        "
      >
        <h1
          className=" font-bold text-4xl text-dark leading-relaxed 
          xl:text-6xl
          "
        >
          Rent your Dream Car <br />
          Around the World
        </h1>
        <p className=" text-xl mt-4 leading-loose">
          We provide the best car options, with premium customer services at a
          competitive price
        </p>
      </div>
      <img
        src={ImgHero}
        alt=""
        className="
          self-center max-w-full max-h-full object-cover row-start-1 col-start-1 col-span-2
          lg:row-span-2 lg:col-start-2 lg:col-span-1"
      ></img>
      <HeroForm
        className="
        self-center row-start-3 max-w-2xl
        md:row-start-2  
        "
      ></HeroForm>
    </section>
  );
}

export default function Home() {
  const ref = useRef(null);
  const { onMouseDown } = useDraggableScroll(ref);
  return (
    <>
      <NavbarTop></NavbarTop>
      <div className="page py-5 px-4 md:py-8 md:px-16">
        <HeroSection></HeroSection>

        <section className="popular flex flex-col gap-4">
          <div className="flex flex-row justify-between">
            <p className="text-light">Popular Cars</p>
            <a href="#" className="fw-semibold">
              View All
            </a>
          </div>
          <div
            onMouseDown={onMouseDown}
            ref={ref}
            className="popular__container flex flex-row gap-6 overflow-scroll"
          >
            {getCarArray(4).map((car, index) => (
              <CatalogueCard car={car} key={index} />
            ))}
          </div>
        </section>
        <section className="recommended flex flex-col gap-4 mt-6">
          <p className="text-light">Recommended</p>
          <div className=" grid grid-cols-[repeat(auto-fit,_minmax(18rem,_1fr))] gap-6">
            {getCarArray(10).map((car, index) => (
              <CatalogueCard car={car} key={index} />
            ))}
          </div>
          <BuAccent
            text="View More"
            className="py-4 px-6  rounded-sm m-auto mt-4"
          />
        </section>
      </div>
      <Footer></Footer>
    </>
  );
}
