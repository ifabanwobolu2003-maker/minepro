// const links = [
//   { name: 'Open roles', href: '#' },
//   { name: 'Internship program', href: '#' },
//   { name: 'Our values', href: '#' },
//   { name: 'Meet our leadership', href: '#' },
// ]
// const stats = [
//   { name: 'Offices worldwide', value: '12' },
//   { name: 'Full-time colleagues', value: '300+' },
//   { name: 'Hours per week', value: '40' },
//   { name: 'Paid time off', value: 'Unlimited' },
// ]

export default function Example2() {
  return (
    <div
      id="about"
      className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 "
    >
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-112 sm:ml-16 sm:translate-x-0"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full max-w-md rounded-2xl object-cover lg:w-1/2">
          <img
            src="/projects/meee.jpeg"
            alt="Ifabanwo Boluwatife"
            className="w-full rounded-2xl object-cover shadow-lg"
          />
        </div>
        <div className="w-full lg:w-1/2 text-left">
          <h2 className="text-5xl font-semibold tracking-tight text-blue-600/50 dark:text-sky-400/50">
            About Me
          </h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
            I’m{" "}
            <b className="text-blue-600/50 dark:text-sky-400/50">
              Ifabanwo Boluwatife
            </b>
            , and honestly, this whole journey started with just me and my phone
            camera. No fancy equipment, no film school, just a genuine interest
            in capturing moments that actually mean something. I spent a lot of
            time figuring out timing, light, angles — the stuff nobody teaches
            you, you just learn by doing it over and over until it clicks.
            <br></br>
          </p>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
            Tech wasn't really the plan at first. But the more I got into video,
            the more I noticed I was thinking about the same things developers
            think about — how something flows, why certain layouts just work and
            others don't. So I decided to learn it properly and went through a
            frontend development program at NITHUB, University of Lagos.
          </p>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
            Still learning both crafts, still figuring a lot out. But I'd rather
            build and show you what I can do than talk about it.
          </p>
        </div>
      </div>
    </div>
  );
}
