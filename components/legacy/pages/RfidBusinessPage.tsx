import Footer from "@/components/legacy/Footer";
import Navbar from "@/components/legacy/Navbar";

// Generated from the rendered old groupmaker.co.th page. Do not hand-edit large parts;
// refactor into components as each section gets rebuilt.
export default function RfidBusinessPage() {
  return (
    <>
    <div className="snap-y snap-mandatory h-full">
      <div className="flex flex-col items-center w-full h-full bg-black">
        <Navbar />
        <div className="w-[60%] flex flex-col items-start justify-center pt-48 pb-10 text-gray-500 gap-20">
          <div className="flex justify-center w-full">
            <img alt="Why RFID" loading="lazy" width="1000" height="525" decoding="async" className="z-10" style={{ color: "transparent" }} src="/legacy/media/Why-Rfid-Small.874f3c4d.png" />
          </div>
          <div className="flex flex-col gap-10">
            <label className="text-2xl md:text-4xl text-orange-900 font-bold">
              Which Businesses Should Quickly Adopt RFID?
            </label>
            <label className="text-xs md:text-base">
              RFID, or Radio Frequency Identification, is becoming highly popular in many businesses and organizations. We already know that RFID, or electronic cards, can be applied in various ways based on its simple working principle.
            </label>
            <label className="text-xs md:text-base">
              Let's take a look at which businesses can benefit from using RFID technology.
            </label>
          </div>
          <div className="flex flex-col gap-10">
            <label className="text-lg text-white md:text-2xl">
              1. Companies with a Large Number of Employees
            </label>
            <label className="text-xs md:text-base">
              Regardless of the type of business, if you have a large number of employees, you can use RFID for employee access control, which is convenient, fast, and provides accurate data.
            </label>
          </div>
          <div className="flex flex-col gap-10">
            <label className="text-lg text-white md:text-2xl">
              2. Stores Needing Anti-Theft Systems
            </label>
            <label className="text-xs md:text-base">
              If you run a store with a high volume of daily visitors, RFID can be useful for reading barcodes of items that have not been paid for yet, helping prevent loss from theft.
            </label>
          </div>
          <div className="flex flex-col gap-10">
            <label className="text-lg text-white md:text-2xl">
              3. Medical Businesses
            </label>
            <label className="text-xs md:text-base">
              Medical businesses can benefit from RFID by using it to record and retrieve patient information and medical history, as RFID can store a vast amount of data.
            </label>
          </div>
          <div className="flex flex-col gap-10">
            <label className="text-lg text-white md:text-2xl">
              4. Businesses Using Ticketing Systems
            </label>
            <label className="text-xs md:text-base">
              Whether it’s toll cards, subway tickets, or gate access cards, RFID can simplify access control, saving time and resources.
            </label>
          </div>
          <div className="flex flex-col gap-10">
            <label className="text-lg text-white md:text-2xl">
              5. Quick Payment Systems
            </label>
            <label className="text-xs md:text-base">
              Coffee shops and other retail stores can benefit from RFID for payment, which provides a fast and secure transaction system.
            </label>
            <label className="text-xs md:text-base">
              With an understanding of how RFID plays a role in various business operations and the need for speed and accuracy in today's world, businesses are adapting their operations to utilize RFID technology as effectively as possible. If you’re looking for a professional to advise and install RFID for your business, Group Maker is confident that we are the leading RFID technology provider in Thailand that can meet your needs. With our experience and expertise in technology, contact Group Maker for advice and you won’t be disappointed with our service.
            </label>
          </div>
        </div>
        <Footer />
      </div>
    </div>
    </>
  );
}
