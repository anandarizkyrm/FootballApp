import DropDown from "./DropDown/DropDown";
import style from "./Navbar.module.css";
import { FaGripLines } from "react-icons/fa";
import { useState } from "react";
import DropDownMobile from "./DropDown/DropDownMobile";
const Navbar = () => {
  const [hiddenNavInMobile, setHiddenNavInMobile] = useState(true);
  const [showDropDown, setShowDropDown] = useState(false);
  const [showDropDownMobile, setShowDropDownMobile] = useState(false);

  return (
    <nav className={style.navbar}>
      <p className={style.logo}>
        <span>SCH</span>
        Football
      </p>
      <button
        onClick={() => setHiddenNavInMobile(!hiddenNavInMobile)}
        className={style.navbar_toggler_button}
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        // style="border-color: orange;border: 1px solid orange;"
      >
        <FaGripLines />
      </button>

      <div className={style.content} id="navbarSupportedContent">
        <ul className={style.navLi}>
          <li className="nav-item active">
            <p className="nav-link">Home</p>
          </li>
          <li className="nav-item">
            <p className="nav-link">Matches</p>
          </li>

          <li className="nav-item">
            <p className="nav-link ">Livescores</p>
          </li>
          <li>
            <DropDown
              link={["Score", "Teams", "Standings"]}
              showDropDown={showDropDown}
              setShowDropDown={setShowDropDown}
            />
          </li>
        </ul>
        <form className={style.searchForm}>
          <input
            className={style.inputSearch}
            type="search"
            placeholder="Teams,Players...."
            aria-label="Search"
          />

          <button className={style.button}> Search</button>
        </form>
      </div>

      <div
        className={
          hiddenNavInMobile ? style.content_mobile : style.content_mobile_close
        }
        id="navbarSupportedContent"
      >
        <ul className={style.navLi}>
          <li className="nav-item active">
            <p className="nav-link">Home</p>
          </li>
          <li className="nav-item">
            <p className="nav-link">Matches</p>
          </li>

          <li className="nav-item">
            <p className="nav-link ">Livescores</p>
          </li>
          <li>
            <DropDownMobile
              link={["Score", "Teams", "Standings"]}
              showDropDown={showDropDownMobile}
              setShowDropDown={setShowDropDownMobile}
            />
          </li>
        </ul>
        <form className={style.searchForm}>
          <input
            className={style.inputSearch}
            type="search"
            placeholder="Teams,Players...."
            aria-label="Search"
          />

          <button className={style.button}> Search</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
