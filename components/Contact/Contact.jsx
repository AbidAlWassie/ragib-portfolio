import { FaArrowRight } from "react-icons/fa6";
import { MdLocationOn, MdMail, MdPhone } from "react-icons/md";

const Contact = () => {
  return (
    <section className="contact container relative mx-auto my-24 sm:w-4/5">
      <div className="placeHolderComponent h-auto">
        <div className="grid lg:grid-cols-7 2xl:grid-cols-2">
          <div className="p-6 max-md:order-2 lg:col-span-4 2xl:col-span-1">
            <div className="content-center items-center justify-center rounded-2xl bg-slate-800 p-6 ring-1 ring-inset ring-white/10 sm:p-10">
              <p className="mb-2 mt-4 font-semibold text-slate-300">
                Send me a message
              </p>
              <p className="mb-8 font-medium text-slate-400">
                I&apos;ll respond as soon as possible.
              </p>
              <div className="">
                <form className="flex flex-col gap-6" action="" method="post">
                  <input
                    className="w-full rounded-2xl bg-slate-700/70 p-4 py-5 font-medium ring-2 ring-transparent transition-all hover:bg-slate-700/85 focus:outline-none focus:ring-cyan-500"
                    type="text"
                    placeholder="Full Name"
                  />

                  <input
                    className="w-full rounded-2xl bg-slate-700/70 p-4 py-5 font-medium ring-2 ring-transparent transition-all hover:bg-slate-700/85 focus:outline-none focus:ring-cyan-500"
                    type="text"
                    placeholder="Email Address"
                  />
                  <textarea
                    className="w-full rounded-2xl bg-slate-700/70 p-4 py-5 font-medium ring-2 ring-transparent transition-all hover:bg-slate-700/85 focus:outline-none focus:ring-cyan-500"
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Write Message"
                  ></textarea>
                  <button className="w-full rounded-2xl bg-cyan-600 p-4 text-sm font-medium transition-all hover:brightness-90">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="mx-2 content-center justify-between p-6 max-md:order-1 max-md:mb-12 sm:p-12 lg:col-span-3 2xl:col-span-1">
            <div className="flex flex-col">
              <p className="border-l-4 border-cyan-500 pl-4 font-semibold dark:text-slate-300">
                Contact info
              </p>
              <h1 className="py-6 text-4xl font-semibold text-cyan-800 dark:text-cyan-400">
                Let&apos;s get in touch
              </h1>
              <p className="text-lg font-medium text-slate-700 dark:text-slate-400">
                I&apos;m open to new opportunities and collaborations —
                let&apos;s connect.
              </p>
            </div>
            <div className="mt-16 flex flex-col gap-8 text-lg font-medium dark:text-slate-300">
              <div className="flex gap-4">
                <div className="">
                  <div className="rounded-full bg-cyan-600 p-2 text-white">
                    <MdLocationOn />
                  </div>
                </div>
                <p className="my-auto">Nilphamari, Rangpur, BD</p>
              </div>
              <div className="flex gap-4">
                <div className="">
                  <div className="rounded-full bg-cyan-600 p-2 text-white">
                    <MdPhone />
                  </div>
                </div>
                <p className="my-auto">+880 1719 220115</p>
              </div>
              <div className="flex gap-4">
                <div className="">
                  <div className="rounded-full bg-cyan-600 p-2 text-white">
                    <MdMail />
                  </div>
                </div>
                <a
                  href="mailto:ragibalasad@pm.me"
                  className="my-auto flex cursor-pointer items-center justify-start gap-2 transition-all hover:gap-4 hover:text-cyan-800 dark:hover:text-cyan-400"
                >
                  ragibalasad@pm.me
                  <span>
                    <FaArrowRight />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
