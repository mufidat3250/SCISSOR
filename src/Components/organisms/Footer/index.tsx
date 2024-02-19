import './style.scss'
import Logo from "../../../Vectors/Logo";
import { footerLink } from "../../../data";


const Footer = () => {
  return (
    <div className="footer-wrapper">
      <img
        src="/Images/footer-right.png"
        alt=""
        className="absolute right-0 bottom-0"
      />
      <img
        src="/Images/footerleft.png"
        alt=""
        className="absolute left-0 bottom-0"
      />
      <div className="footer container">
        <div className="flex justify-between  flex-col gap-10 md:flex-row">
        <div className="gap-4">
          <Logo color={"#141414"} />
          <div className="flex gap-4">
            <img src="/vectors/i.fi-social-twitter.svg" alt="" />
            <img src="/vectors/svg.feather.svg" alt="" />
            <img src="/vectors/i.fi-social-linkedin.svg" alt="" />
            <img src="/vectors/i.fi-social-facebook.svg" alt="" />
          </div>
        </div>
        <div className="footerLink">
          {footerLink.map((f, index) => (
            <div key={index} className=" px-6">
              <h1 className="text-base font-bold mb-3">{f.name}</h1>
              {f.links.map((l, index) => (
                <p key={index} className="">
                  {l}
                </p>
              ))}
            </div>
          ))}
        </div>
        </div>
        <div className="flex  justify-center lg:justify-end mt-[1.4375rem]">
        <p>Term of Service | Security | ⓒ Scissor 2023</p>
      </div>
      </div>
    </div>
  );
};

export default Footer;
