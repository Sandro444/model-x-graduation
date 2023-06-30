import React from "react";

import { Row } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";

// index sections
import SectionCarousel from "views/index-sections/SectionCarousel.js";

const firstCarousel = [
  {
    src: "https://images.pexels.com/photos/96392/pexels-photo-96392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    altText: "",
    caption: "",
  },
  {
    src: "https://cdn.hortzone.com/wp-content/uploads/2019/03/Automatic-Plant-Watering-System.jpg?fbclid=IwAR3KaN6VuzDH0KSHysI3xeq_JIohQHabk5yGcNGmt0HIO20PoWKx-vLuZpg",
    altText: "",
    caption: "",
  },
];

const mainCarousel = [
  {
    src: "https://i.postimg.cc/Y9pjtg1C/1.png",
    altText: "",
    caption: "",
  },
  {
    src: "https://i.ibb.co/3vVphhq/2c.png",
    altText: "",
    caption: "",
  },
  {
    src: "https://community.element14.com/resized-image/__size/1350x900/__key/communityserver-blogs-components-weblogfiles/00-00-00-02-71/7242.contentimage_5F00_146799.jpg?fbclid=IwAR15cyRtojg5okxtzgWF3LtS33G7b28Vsk7TW9vHYfPhDJpANJbJPFHg3GQ",
    altText: "",
    caption: "",
  },
  {
    src: "https://f.lnwfile.com/_/f/_raw/kg/1j/bp.png?fbclid=IwAR3K88zTsDCDVQCsjPLa1BGkAfJ20X7J6XHnxsUmHkFpXRBgWHZBF1RO4vA",
    altText: "",
    caption: "",
  },
];

const thirdCarousel = [
  {
    src: "https://i.postimg.cc/3R4r8Bk7/2.jpg",
    altText: "",
    caption: "",
  },
  {
    src: "https://i.postimg.cc/hPSFMsKj/3.jpg",
    altText: "",
    caption: "",
  },
  {
    src: "https://i.postimg.cc/rmSbN0bx/4.jpg",
    altText: "",
    caption: "",
  },
  {
    src: "https://i.postimg.cc/9FXSyfBw/5.jpg",
    altText: "",
    caption: "",
  },
];

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <div className="section">
          <div className="typography-line">
            <h1>მიზანი</h1>
          </div>
          <div className="typography-line">
            <p>
              მოგესალმებით და კეთილი იყოს თქვენი მობრძანება Model X-ში! ჩვენი
              პროექტის მიზანია გავამარტივოთ და შესაძლებელი გავხადოთ ადამიანების
              კომუნიკაციის და ინფორმაციის გადაცემა ისეთ მიუდგომელ ადგილებში,
              სადაც ინფორმაციის სტანდარტულად გადაცემის გზები შეზღუდულია.
            </p>
            <div className="image-wrapper">
              <img
                style={{
                  maxWidth: "100%",
                  maxHeight: "300px",
                  borderRadius: "20px",
                }}
                src="https://artes.esa.int/themes/custom/bootstrapartes/img/Main-Background-image--ESA_your_partner_in_orbit.jpg?fbclid=IwAR2aaqtsIiPDHTOocJqP0sUH7oytNQzDlHDnGMPpNcrgXsO8YQ9loqTFo38"
              />
            </div>

            <p style={{ display: "block" }}>
              ჩვენი მოწყობილობა იყენებს სატელიტურ ტექნოლოგიას მონაცემების
              გადასაცემად, რაც ადამიანებს საშუალებას აძლევს შორიდან დააკვირდნენ,
              აკონტროლონ და მართონ სხვადასხვა მოწყობილობები. წარმოიდგინეთ, რომ
              შეძლებთ თქვენი მცენარეების მორწყვას, სათბურის ტემპერატურის
              რეგულირებას ან თქვენი პირუტყვის მონიტორინგის დამოუკიდებლად იმისგან
              თუ რამდენად მიუდგომელ და თქვენგან შორ ადგილას იმყოფებიან. Model
              X-ით მეშვეობით ეს ყველაფერი და კიდევ უფრო მეტი შესაძლებელია!
            </p>
          </div>
          <div style={{ paddingTop: "40px" }}>
            <SectionCarousel items={firstCarousel} />
          </div>
        </div>

        <div className="section">
          <div className="typography-line">
            <h1>პროექტის მიმოხილვა</h1>
          </div>
          <div className="typography-line">
            <p>
              პროექტის სახელია Model X, მისი მთავარი მიზანია 433 მეგაჰერც
              სიხშირეზე მოხდეს, ჩვენს მიერ შექმნილი ანტენის მეშვეობით, სატელიტის
              დაჭერა და შემდეგ ინფორმაციის მისგან მიღება, შედარებით იაფი
              გადაწყვეტილებების ფონზე. მიუდგომელ ადგილებში, სადაც საკომუნიკაციო
              ინფრასტრუქტურა შეზღუდული/ნაკლებად განვითარებულია, აუცილებელია
              კომუნიკაციის საიმედო საშუალებების შექმნა. ეს პროექტი მიზნად
              ისახასვს ავტომატური ანტენის მბრუნავი სისტემის შემუშავებას
              სატელიტთან დასაკავშირებლად და მასთან კომუნიკაციის მეშვეობით ამ
              პრობლემის გადაჭრას. ამ სისტემაში გამოყენებული ძირითადი
              კომპონენტებია Orbitron-ი, სატელიტების კოორდინატების დამდგენი
              პროგრამა, ESP32 მიკროკონტროლერი, როგორც ცენტრალური საკონტროლო
              განყოფილება, სერვო ძრავა (MG995) ანტენის როტაციისთვის და Minimu 9
              სენსორული მოდული ჩრდილოეთის მიმართულების ზუსტად დასადგენად.
            </p>
          </div>
          <div style={{ paddingTop: "40px" }}>
            <SectionCarousel items={mainCarousel} />
          </div>
        </div>

        <div className="section">
          <div className="typography-line">
            <h1>გადაწყვეტა</h1>
          </div>
          <div className="typography-line">
            <p>
              პროექტის მთავარი ამონაცაა ანტენის ავტომატური სატრიალებლის ისე
              გამართვა, რომ შესაძლებელი გახდეს ანტენის მოცემულ სატელიტთან
              დაკავშირება. ქვემოთ მოცემულ სქემა 1 - ზე ასახულია თუ რომელი
              აპლიკაციებისა და აპარატურის მეშვეობით მოხდება ზემოხსენებული
              ამოცანის ამოხსნა. პროგრამა Orbitron-ი თვალყურს ადევნებს
              სატელიტების მდებარეობას. მისი მეშვეობით ჩვენ ვიგებთ თუ ზუსტად სად
              იმყოფება სატელიტი, ანუ გვაწვდის აზიმუტს (კუთხეს ჩრდილოეთს, ჩვენსა
              და სატელიტს შორის). ამ ინფომრაციას ვუგზავნით ESP32
              მიკროკონტროლერს, რომელიც Minimu-9-ში არსებული მაგნეტომეტრის
              სენსორის მეშვეობით ადგენს ჩრდილოეთის მდებარეობას და შემდეგ
              ატრიალებს MG995 სერვოს, რომელზეც ანტენაა დამაგრებული შესაბამის
              კუთხეზე. Orbitron - სატელიტის მდებარეობის დადგენა: ვირჩევთ
              ჩვენთვის სასურველ სატელიტს ჩამონათვლიდან და DDEOrbitronToSerial
              დრაივერის მეშვეობით ვაგზავნით ჩვენთვის საჭირო ინფორმაციას
              სატელიტის შესახებ(აზიმუტს).
            </p>
          </div>
          <div style={{ paddingTop: "40px" }}>
            <SectionCarousel items={thirdCarousel} />
          </div>
        </div>

        <div className="section">
          <div className="typography-line">
            <h2>Model X-ის ფროფოუზალი</h2>
          </div>
          <div className="typography-line">
            <a
              href="https://fastupload.io/HFTz1LVDZBO9QSE/file"
              target="_blank"
            >
              <button type="button"> გადმოწერა </button>
            </a>
          </div>
        </div>

        <div className="section">
          <div className="typography-line">
            <h1>გუნდის შესახებ</h1>
          </div>
          <div className="typography-line">
            <p>
              ჩვენი გუნდი შედგება სამი ნიჭიერი ადამიანისგან, რომლეთა მიზანია
              ტექნოლოგიების გამოყენებით რეალურ სამყაროში არსებული პრობლემების
              გადაჭრა. ჩვენ, ივა კალატოზიშვილი, სანდრო წერეთელი და ნიკა ჯოლოგუა
              დაუღალავად ვშრომობდით ისეთი მოწყობილობის შექმნაზე, რომელიც არა
              მხოლოდ ფუნქციონალური, არამედ მარტივი გამოსაყენებელი იქნება და
              გვჯერა, რომ Model X-ს აქვს პოტენციალი შესაძლებელი გახადოს
              ადამიანებისათვის სატელიტის მეშვეობით კომუნიკაციისა და ინფორმაციის
              გადაცემა ისეთ ადგილებში, სადაც კომუნიკაციის სხვა ფორმები
              შეზღუდულია.
            </p>
          </div>
          <div style={{ overflow: "hidden" }}>
            <Row
              className="section"
              style={{
                paddingLeft: "20%",
                paddingRight: "20%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div>
                <div
                  style={{
                    width: "200px",
                    height: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      overflow: "hidden",
                      width: "150px",
                      height: "150px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50%",
                    }}
                  >
                    <img
                      style={{ marginBottom: "0" }}
                      alt="..."
                      className="img-circle img-no-padding img-responsive"
                      src={"https://i.postimg.cc/3r1frTH8/6.png"}
                    />
                  </div>
                </div>
                <p className="text-center">სანდრო წერეთელი</p>
              </div>
              <div>
                <div
                  style={{
                    width: "200px",
                    height: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      overflow: "hidden",
                      width: "150px",
                      height: "150px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50%",
                    }}
                  >
                    <img
                      style={{ marginBottom: "0" }}
                      alt="..."
                      className="img-circle img-no-padding img-responsive"
                      src={"https://i.ibb.co/KKWKMCY/5.jpg"}
                    />
                  </div>
                </div>
                <p className="text-center" style={{ wordBreak: "break-all" }}>
                  ივა კალატოზიშვილი
                </p>
              </div>
              <div>
                <div
                  style={{
                    width: "200px",
                    height: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      overflow: "hidden",
                      width: "150px",
                      height: "150px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50%",
                    }}
                  >
                    <img
                      style={{ marginBottom: "0" }}
                      alt="..."
                      className="img-circle img-no-padding img-responsive"
                      src={"https://i.postimg.cc/9MJP2cws/7.jpg"}
                    />
                  </div>
                </div>
                <p className="text-center">ნიკა ჯოლოგუა</p>
              </div>
            </Row>
            <div className="typography-line">
              <h1>მენტორები</h1>
            </div>
            <Row
              className="section"
              style={{
                paddingLeft: "20%",
                paddingRight: "20%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div>
                <div
                  style={{
                    width: "200px",
                    height: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      overflow: "hidden",
                      width: "150px",
                      height: "150px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50%",
                    }}
                  >
                    <img
                      // style={{ paddingTop: "80px" }}
                      alt="..."
                      className="img-circle img-no-padding img-responsive"
                      src={
                        "https://i.pinimg.com/736x/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg"
                      }
                    />
                  </div>
                </div>
                <p className="text-center">დავით ჩხაიძე</p>
              </div>
              <div>
                <div
                  style={{
                    width: "200px",
                    height: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      overflow: "hidden",
                      width: "150px",
                      height: "150px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50%",
                    }}
                  >
                    <img
                      style={{ marginBottom: "0" }}
                      alt="..."
                      className="img-circle img-no-padding img-responsive"
                      src={
                        "https://i.pinimg.com/736x/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg"
                      }
                    />
                  </div>
                </div>
                <p className="text-center" style={{ wordBreak: "break-all" }}>
                  გიორგი მოდებაძე
                </p>
              </div>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
