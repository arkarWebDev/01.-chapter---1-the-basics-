import CenterStyle from "../components/CenterStyle";
import homeImage from "/public/home.jpg";

export default function Home() {
  return (
    <>
      <CenterStyle title="Home page" imgAlt="home" imgSrc={homeImage} />
    </>
  );
}
