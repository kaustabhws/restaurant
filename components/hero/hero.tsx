import Image from "next/image";

const HeroPage = () => {
  return (
    <div className="min-h-screen hero-container bg-[#f5eedc] relative overflow-hidden">
      <div className="pt-14 flex justify-center px-3">
        <div className="lg:max-w-[50%] md:max-w-[70%] mx-auto text-center flex flex-col gap-8">
          <h1 className="text-7xl tracking-[-0.250rem] font-semibold font-head">
            Fo<span className="md:text-5xl text-3xl">😘</span>d to put you in a
            good mo<span className="md:text-5xl text-3xl">🤤</span>d
          </h1>
          <p className="text-xl">big umami flavour, small footprint</p>
          <div>
            <button className="bg-[#f84815] px-5 py-2 rounded-full font-semibold">
              Explore
            </button>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Image
            src="/hero1.png"
            alt="hero"
            height={100}
            width={100}
            className="min-[864px]:w-96 min-[864px]:-left-32 min-[864px]:top-1/4 w-52 absolute -left-14 an‌​imate-spin-slow "
            unoptimized
            priority
          />
          <Image
            src="/hero3.png"
            alt="hero"
            height={100}
            width={100}
            className="min-[864px]:w-96 min-[864px]:-right-32 min-[864px]:top-1/4 w-52 absolute -right-14 an‌​imate-spin-rev "
            unoptimized
            priority
          />
        </div>
        <div className="absolute bottom-14 flex items-center justify-center gap-8 mx-auto w-full max-[406px]:hidden">
          <Image
            src="/hero4.png"
            alt="hero"
            height={100}
            width={100}
            className="min-[864px]:w-60 w-52 max-[500px]:w-40"
            unoptimized
            priority
          />
          <Image
            src="/hero2.png"
            alt="hero"
            height={100}
            width={100}
            className="min-[864px]:w-60 w-52 max-[500px]:w-40"
            unoptimized
            priority
          />
        </div>
      </div>
    </div>
  );
};
// absolute left-1/3 -bottom-10

export default HeroPage;
