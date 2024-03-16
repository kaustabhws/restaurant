import Image from "next/image";

const BannerPage = () => {
  return (
    <div className="bg-[#ffd34e] px-20 py-10 max-[636px]:px-6">
      <div className="min-[1192px]:max-w-[50%] mx-auto max-[1192px]:max-w-[70%] max-[843px]:max-w-[90%] max-[683px]:max-w-full relative">
        <h1 className="font-head font-bold text-7xl text-center leading-snug max-[683px]:text-6xl max-[560px]:text-5xl">
          <span className="relative z-[2]">
            Nothing
            <Image
              src="/fresh.svg"
              alt="Fresh"
              width={100}
              height={100}
              layout="fixed"
              className="absolute -top-14 -left-10 -rotate-[32deg] h-32 z-[-2]"
            />
          </span>
          &nbsp;brings people together like
          <span className="relative z-[2]">
            &nbsp;food
            <Image
              src="/ecofriendly.svg"
              alt="Eco Friendly"
              width={100}
              height={100}
              layout="fixed"
              className="absolute -bottom-2 -right-14 -rotate-[32deg] h-14 z-[-2]"
            />
          </span>
        </h1>
      </div>
      <div className="mt-10 flex gap-10 justify-around max-[420px]:flex-col max-[420px]:items-center">
        <div className="flex flex-col gap-3 items-center">
          <h1 className="font-semibold text-xl">Happy Customers</h1>
          <div className="flex items-center">
            <Image
              src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg"
              alt="Happy Customers"
              width={100}
              height={100}
              className="rounded-full h-12 w-12 object-cover border border-black"
            />
            <Image
              src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg"
              alt="Happy Customers"
              width={100}
              height={100}
              className="rounded-full h-12 w-12 object-cover border border-black -ml-4"
            />
            <Image
              src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg"
              alt="Happy Customers"
              width={100}
              height={100}
              className="rounded-full h-12 w-12 object-cover border border-black -ml-4"
            />
            <div className="rounded-full h-12 w-12 bg-white -ml-4">
              <p className="text-center mt-3">100+</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <h1 className="font-semibold text-xl">Reviews</h1>
          <div>
            <p className='font-semibold'>4.3 <span className='font-normal'>(100)</span></p>
            <div className="flex items-center bg-black px-2 py-1 rounded-lg">
              <svg
                className="h-6 w-6 fill-current text-yellow-400"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c.2 0 .4.08.54.24l2.73 4.45 5.98.87c.42.07.6.57.3.89l-4.34 4.23 1.03 6.02c.07.42-.35.74-.72.57l-5.37-2.82-5.37 2.82c-.37.17-.79-.15-.72-.57l1.03-6.02-4.34-4.23c-.3-.32-.12-.82.3-.89l5.98-.87L11.46 2.24c.14-.16.34-.24.54-.24z" />
              </svg>
              <svg
                className="h-6 w-6 fill-current text-yellow-400"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c.2 0 .4.08.54.24l2.73 4.45 5.98.87c.42.07.6.57.3.89l-4.34 4.23 1.03 6.02c.07.42-.35.74-.72.57l-5.37-2.82-5.37 2.82c-.37.17-.79-.15-.72-.57l1.03-6.02-4.34-4.23c-.3-.32-.12-.82.3-.89l5.98-.87L11.46 2.24c.14-.16.34-.24.54-.24z" />
              </svg>
              <svg
                className="h-6 w-6 fill-current text-yellow-400"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c.2 0 .4.08.54.24l2.73 4.45 5.98.87c.42.07.6.57.3.89l-4.34 4.23 1.03 6.02c.07.42-.35.74-.72.57l-5.37-2.82-5.37 2.82c-.37.17-.79-.15-.72-.57l1.03-6.02-4.34-4.23c-.3-.32-.12-.82.3-.89l5.98-.87L11.46 2.24c.14-.16.34-.24.54-.24z" />
              </svg>
              <svg
                className="h-6 w-6 fill-current text-yellow-400"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c.2 0 .4.08.54.24l2.73 4.45 5.98.87c.42.07.6.57.3.89l-4.34 4.23 1.03 6.02c.07.42-.35.74-.72.57l-5.37-2.82-5.37 2.82c-.37.17-.79-.15-.72-.57l1.03-6.02-4.34-4.23c-.3-.32-.12-.82.3-.89l5.98-.87L11.46 2.24c.14-.16.34-.24.54-.24z" />
              </svg>
              <svg
                className="h-6 w-6 fill-current text-yellow-400 opacity-30"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c.2 0 .4.08.54.24l2.73 4.45 5.98.87c.42.07.6.57.3.89l-4.34 4.23 1.03 6.02c.07.42-.35.74-.72.57l-5.37-2.82-5.37 2.82c-.37.17-.79-.15-.72-.57l1.03-6.02-4.34-4.23c-.3-.32-.12-.82.3-.89l5.98-.87L11.46 2.24c.14-.16.34-.24.54-.24z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
