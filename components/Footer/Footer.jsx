import {
  FaXTwitter,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <section className="mt-24 bg-slate-900 dark:bg-slate-800">
        <div className="container mx-auto h-auto py-12 max-sm:px-6 sm:w-4/5">
          <div className="flex gap-6 text-slate-300 max-lg:flex-col">
            <div className="my-auto">
              <h1 className="text-2xl font-medium text-cyan-400">
                www.ragibalasad.me
              </h1>
              <p className="text-medium text-lg">
                {" "}
                Biulding quality software sience 2020.
              </p>
            </div>

            <div className="my-auto flex flex-col gap-4 lg:ml-auto">
              <ul className="my-auto flex flex-wrap gap-5 font-medium lg:mx-auto">
                <li>License</li>
                <li>Contribute</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
              <div className="footer-social-links flex flex-wrap gap-6 text-lg lg:mx-auto">
                <a href="https://x.com/ragibalasad" target="_blank">
                  <FaXTwitter />
                </a>
                <a href="https://facebook.com/ragibalasad" target="_blank">
                  <FaFacebook />
                </a>
                <a href="https://linkedin.com/in/ragibalasad" target="_blank">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/ragibalasad" target="_blank">
                  <FaGithub />
                </a>
                <a href="https://discord.com/ragibalasad" target="_blank">
                  <FaDiscord />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-950 max-sm:px-6">
          <div className="container mx-auto h-auto py-3 sm:w-4/5">
            <div className="mx-auto w-fit text-slate-300">
              Copyright &copy; 2024. Made by{" "}
              <a
                href="https://github.com/ragibalasad"
                target="_blank"
                className="font-medium text-cyan-400"
              >
                Ragib Al Asad
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
