import Image from "next/image";
import storeImg from "@/public/images/about-us.jpg";
import Paragraph from "@/app/components/paragraph";

// STYLES
import "../info.scss";

export default function AboutUsPage() {
  return (
    <div className="info-page">
      <Paragraph title="INFO" subtitle="ABOUT US">
        <>
          <p className="article-contents-title">
            Mogutable curates beautiful items for you to enjoy in your home and
            everyday life.
          </p>
          <p className="article-contents-paragraph">
            In 2019, Mogutable (pronounced “mo-gu-table”) was born from a love
            of food and the experience of it — a realization that meals weren’t
            necessarily about the food itself, but the stories told through the
            setting and objects used to accompany it. Born and raised in Taiwan,
            and now based in Brooklyn, the sister duo were at the intersection
            of both American and East Asian designs. Today, Mogutable offers a
            number of well-designed, beautiful tableware, and home goods from
            Japan, Taiwan, S. Korea, and here in the U.S. that are thoughtfully
            curated, and then shared with those who share the same love of
            elevating daily routines and objects in their lives. Mogutable
            continues to grow as a platform and community for local and
            international artists, designers, and fans. We hope that you can
            join us.
          </p>
          <div className="img-wrapper">
            <Image
              alt=""
              src={storeImg}
              width={500}
              height={400}
              quality={90}
              sizes="100%"
            />
          </div>
        </>
      </Paragraph>
    </div>
  );
}
