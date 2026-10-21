import Link from "next/link";

// Ported from the old groupmaker.co.th footer (rendered HTML).
export default function Footer() {
  return (
    <footer id="contact" className="w-full h-auto bg-black py-24 px-4 md:px-12 lg:px-20">
      <img alt="" loading="lazy" width="263" height="51" decoding="async" className="pe-6 mb-3 xl:mx-7 " src="/legacy/media/WhiteGmrLogo.0c29c19a.png" style={{ color: "transparent" }} />
      <div className="w-full gap-5 md:gap-0 grid grid-cols-1 md:grid-cols-3 xl:px-7">
        <div className="text-white flex flex-col gap-4 md:gap-5">
          <label className="text-base lg:text-xl font-medium">
            GROUP MAKER ROBOTIC
          </label>
          <Link className="flex items-center gap-2 cursor-pointer" href="/">
            <img alt="" loading="lazy" width="30" height="30" decoding="async" className="w-[1.25rem] md:w-[1.25rem]" src="/legacy/media/WHome_Icon.26f5880c.png" style={{ color: "transparent" }} />
            <span className="text-white text-xs md:text-sm font-medium hover:text-blue-500 hover:underline">
              HOME
            </span>
          </Link>
          <Link className="flex items-center gap-2 cursor-pointer" href="/product">
            <img alt="" loading="lazy" width="30" height="30" decoding="async" className="w-[1.25rem] md:w-[1.25rem]" src="/legacy/media/WProducts_Icon.89deffed.png" style={{ color: "transparent" }} />
            <span className="text-white text-xs md:text-sm font-medium hover:text-blue-500 hover:underline">
              PRODUCTS
            </span>
          </Link>
          <Link className="flex items-center gap-2 cursor-pointer" href="/aboutus">
            <img alt="" loading="lazy" width="38" height="38" decoding="async" className="w-[1.25rem] md:w-[1.25rem]" src="/legacy/media/WAbout_Icon.93b59868.png" style={{ color: "transparent" }} />
            <span className="text-white text-xs md:text-sm font-medium hover:text-blue-500 hover:underline">
              ABOUT US
            </span>
          </Link>
          <Link className="flex items-center gap-2 cursor-pointer" href="/events">
            <img alt="" loading="lazy" width="30" height="30" decoding="async" className="w-[1.25rem] md:w-[1.25rem]" src="/legacy/media/WEvent_Icon.14e1ad70.png" style={{ color: "transparent" }} />
            <span className="text-white text-xs md:text-sm font-medium hover:text-blue-500 hover:underline">
              EVENTS
            </span>
          </Link>
          <Link className="flex items-center gap-2 cursor-pointer" href="/blogs">
            <img alt="" loading="lazy" width="30" height="30" decoding="async" className="w-[1.25rem] md:w-[1.25rem]" src="/legacy/media/WBlogs_Icon.89987627.png" style={{ color: "transparent" }} />
            <span className="text-white text-xs md:text-sm font-medium hover:text-blue-500 hover:underline">
              BLOGS
            </span>
          </Link>
        </div>
        <div className="text-white flex flex-col gap-4 md:gap-5">
          <label className="text-base lg:text-xl font-medium">
            PRODUCT &amp; SERVICE
          </label>
          <div>
            <Link className="flex items-center gap-2 cursor-pointer" href="/product">
              <img alt="" loading="lazy" width="30" height="30" decoding="async" className="w-[1.25rem] md:w-[1.25rem]" src="/legacy/media/WProducts_Icon.89deffed.png" style={{ color: "transparent" }} />
              <span className="text-white text-xs md:text-sm font-medium hover:text-blue-500 hover:underline">
                AGV / AMR
              </span>
            </Link>
          </div>
          <div>
            <Link className="flex items-center gap-2 cursor-pointer" href="/product">
              <img alt="" loading="lazy" width="55" height="55" decoding="async" className="w-[1.25rem] md:w-[1.25rem]" src="/legacy/media/Industrial__Product.cd9bca78.png" style={{ color: "transparent" }} />
              <span className="text-white text-xs md:text-sm font-medium hover:text-blue-500 hover:underline">
                INDUSTRIAL ROBOT
              </span>
            </Link>
          </div>
          <div>
            <Link className="flex items-center gap-2 cursor-pointer" href="/product">
              <img alt="" loading="lazy" width="60" height="60" decoding="async" className="w-[1.25rem] md:w-[1.25rem]" src="/legacy/media/Rfid_Product.b12aed9f.png" style={{ color: "transparent" }} />
              <span className="text-white text-xs md:text-sm font-medium hover:text-blue-500 hover:underline">
                RFID
              </span>
            </Link>
          </div>
          <div>
            <Link className="flex items-center gap-2 cursor-pointer" href="/product">
              <img alt="" loading="lazy" width="44" height="44" decoding="async" className="w-[1.25rem] md:w-[1.25rem]" src="/legacy/media/Iot_Product.ef2bc92f.png" style={{ color: "transparent" }} />
              <span className="text-white text-xs md:text-sm font-medium hover:text-blue-500 hover:underline">
                IoT
              </span>
            </Link>
          </div>
        </div>
        <div className="text-white flex flex-col gap-8 md:gap-14">
          <div className="flex flex-col gap-4 md:gap-5">
            <label className="text-base lg:text-xl font-medium">
              INFORMATION
            </label>
            <a className="flex items-center gap-2 cursor-pointer" href="tel:+66815935599">
              <img alt="" loading="lazy" width="36" height="36" decoding="async" className="w-[1.25rem] md:w-[1.25rem]" src="/legacy/media/Phone_Icon.5a78566d.png" style={{ color: "transparent" }} />
              <span className="text-white text-xs md:text-sm font-medium hover:text-blue-500 hover:underline">
                Thailand-Bangkok | +66 81 593 5599
              </span>
            </a>
            <a className="flex items-center gap-2 cursor-pointer" href="mailto:thanapat.c@groupmaker.co.th">
              <img alt="" loading="lazy" width="36" height="36" decoding="async" className="w-[1.25rem] md:w-[1.25rem]" src="/legacy/media/Mail_Icon.9198d010.png" style={{ color: "transparent" }} />
              <span className="text-white text-xs md:text-sm font-medium hover:text-blue-500 hover:underline">
                thanapat.c@groupmaker.co.th
              </span>
            </a>
            <a className="flex items-center gap-2 cursor-pointer" href="https://www.google.co.th/maps/place/Group+Maker+Co.,Ltd./@13.7764648,100.7517204,17z">
              <img alt="" loading="lazy" width="38" height="38" decoding="async" className="w-[1.25rem] md:w-[1.25rem]" src="/legacy/media/Location.b300637b.png" style={{ color: "transparent" }} />
              <span className="text-white text-xs md:text-sm font-medium hover:text-blue-500 hover:underline">
                9 Soi Romklao 17 Yaek 1 Klongsampravet, Bangkok 10520
              </span>
            </a>
          </div>
          <div className="flex flex-col gap-4 md:gap-5">
            <label className="text-base lg:text-xl font-medium">
              CONTACT US
            </label>
            <a className="flex items-center gap-2 cursor-pointer" href="https://www.facebook.com/p/Group-Maker-CoLtd-100057165291360">
              <img alt="" loading="lazy" width="21" height="37" decoding="async" className="w-[1.25rem] md:w-[1.25rem]" src="/legacy/media/Facebook_Icon.06902421.png" style={{ color: "transparent" }} />
              <span className="text-white text-xs md:text-sm font-medium hover:text-blue-500 hover:underline">
                Facebook: Group Maker Co.,Ltd.
              </span>
            </a>
            <a className="flex items-center gap-2 cursor-pointer" href="https://www.youtube.com/@GROUPMAKER-ROBOTIC">
              <img alt="" loading="lazy" width="41" height="26" decoding="async" className="w-[1.25rem] md:w-[1.25rem]" src="/legacy/media/Youtube_Icon.0804d38e.png" style={{ color: "transparent" }} />
              <span className="text-white text-xs md:text-sm font-medium hover:text-blue-500 hover:underline">
                Youtube: GROUP MAKER COMPANY LIMITED
              </span>
            </a>
            <a className="flex items-center gap-2 cursor-pointer" href="https://line.me/R/ti/p/@425tsjdy">
              <img alt="" loading="lazy" width="55" height="52" decoding="async" className="w-[1.25rem] md:w-[1.25rem]" src="/legacy/media/Line_Icon.9bd14082.png" style={{ color: "transparent" }} />
              <span className="text-white text-xs md:text-sm font-medium hover:text-blue-500 hover:underline">
                Line Official: Group Maker Co.,Ltd.
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>  );
}
