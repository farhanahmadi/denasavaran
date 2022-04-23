import { BiLogOut, BiGridAlt } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import MenuItem from "./MenuItem";
import Link from "next/link";
import { BiUserCircle } from "react-icons/bi";

export const menuItems = [
  {
    name: "داروخانه",
    to: "/pharmacy",
    subMenus: [
      { name: "آنتی بیوتیک ها", to: "/pharmacy/antibiotics" },
      { name: "ویتامین ها", to: "/pharmacy/vitemin" },
      { name: "واکسن", to: "/pharmacy/vaccine" },
      { name: "افزودنی ها", to: "/pharmacy/supplementry" },
      { name: "ضدعفونی کننده ها", to: "/pharmacy/disinfectants" },
    ],
  },
  {
    name: "فروشگاه",
    to: "/store",
    subMenus: [
      { name: "کنسانتره", to: "/store/concentrate" },
      { name: "مکمل ها", to: "/store/complement" },
      { name: "دان آماده (پلت)", to: "/store/pellets" },
      { name: "تجهیزات پرورشی", to: "/store/equipments" },
      { name: "پرندگان زینتی", to: "/store/birds" },
    ],
  },
  {
    name: "جوجه گوشتی",
    to: "/chick",
    subMenus: [
      { name: "راس ۳۰۸", to: "/chick/ross308" },
      { name: "آبراکرز پلاس", to: "/chick/arbruckers" },
      { name: "آرین", to: "/chick/arian" },
      { name: "کاب 500", to: "/chick/cobb500" },
      { name: "هوبارد", to: "/chick/hubbards" },
    ],
  },
  
  {
    name: "مشاوره",
    to: "/adviser",
    subMenus: [
      { name: "دامپزشک آنلاین", to: "/adviser/resome" },
      { name: "مشاوره پرورشی", to: "/adviser/resome" },
      { name: "مشاور تغذیه ای", to: "/adviser/resome" },
      { name: "طرح توجیهی و کار آفرینی", to: "/adviser/resome" },
    ],
  },
  {
    name: "اتوماسیون",
    to: "/automation",
    subMenus: [
      { name: "راه اندازی اتوماسیون اختصاصی", to: "/automation/setup" },
      { name: "سخت افزار و تجهیزات ایترنت اشیا", to: "/automation/hardware" },
      { name: "سیستم های روباتیک", to: "/automation/advice_training" },
      { name: "پشتیبانی اتوماسسیون", to: "/automation/support" },
    ],
  },
  {
    name: "اخبار و آموزش",
    to: "/news",
    subMenus: [
      { name: "اخبار صنعت طیور", to: "/news/poultry" },
      { name: "منابع آموزشی", to: "/news/source" },
      { name: "راه کارهای پرورشی", to: "/news/poultry_solution" },
    ],
  },
];

function Drawer() {
  const [close, setClose] = useState(true);
  const [open, setOpen] = useState(false);
  let menRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (menRef.current) {
        if (!menRef.current.contains(event.target)) {
          setClose(true);
        }
      }
    });
  });
  let profileRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (profileRef.current) {
        if (!profileRef.current.contains(event.target)) {
          setOpen(false);
        }
      }
    });
  });

  return (
    <>
      <div ref={menRef} className={`sidebar ${close ? "close" : ""}`}>
        <div className="logo-details">
          <Link href="/">
            {<span className="logo-name">ویرا تجارت نوین اسپوتا</span>}
          </Link>
          <div className="dashboard-logo" onClick={() => setClose(!close)}>
            <BiGridAlt style={{ fontSize: "25px" }} />
          </div>
        </div>
        <ul className="nav-links">
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
            />
          ))}
        </ul>

        <div
          ref={profileRef}
          className={`profile-details ${open ? "open" : ""}`}
        >
          <div className="profile-content">
            {/* <img  onClick={() => setOpen(!open)}  src={"/favicon.ico"}  alt="Profile"/> */}
            <BiUserCircle onClick={() => setOpen(!open)} id="img" />
          </div>

          <div className="name-job">
            <div className="profile-name"> User Account </div>
            <div className="job">Custome words</div>
          </div>
          <div className="profile-logo">
            <BiLogOut />
          </div>
        </div>
      </div>
    </>
  );
}

export default Drawer;
