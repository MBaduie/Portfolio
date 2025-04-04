import freeLogo from "../assets/images/freeLogo.png";
import { ICONS } from "../constants/vars";
const Nav = () => {
  return (
    <nav className=" max-lg:mb-8 mb-20 flex justify-between items-center py-6 px-6 rounded-xl max-sm:flex-col max-sm:gap-4 ">
      <div className="w-[89px] h-10 rounded-full   flex items-center max-sm:text-center ">
        <a href="/" className="border-none outline-none">
          {" "}
          <img src={freeLogo} alt="logo" />
        </a>
      </div>

      <div className="flex gap-3 items-center justify-center ">
        <ul className="flex items-center justify-center gap-2">
          {ICONS.map((icon, i) => (
            <li key={i}>
              <a href="/">{icon.link}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
