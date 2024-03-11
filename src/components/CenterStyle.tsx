import Image from "next/image";
import type { StaticImageData } from "next/image";

interface CenterStyle {
  title: string;
  imgSrc: StaticImageData;
  imgAlt: string;
}

export default function CenterStyle(props: CenterStyle) {
  return (
    <section className="text-center mt-24">
      <h1 className=" text-3xl font-bold">{props.title.toUpperCase()}</h1>
      <p className=" text-sm font-medium text-gray-700 tracking-wider max-w-4xl mx-auto my-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis ad et
        reprehenderit quidem doloribus sequi a sit commodi! Culpa dolor
        explicabo at fugit consectetur, beatae ab nisi ut optio voluptatibus!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
        aperiam enim quaerat harum nulla molestiae error commodi quos fugiat
        cumque. Temporibus ipsa ut in natus odit! Assumenda optio id sit.
      </p>
      <Image
        src={props.imgSrc}
        alt={props.imgAlt}
        width={400}
        height={300}
        className="mx-auto mb-4"
      />
      <button className=" text-sm font-medium bg-black text-white p-2">
        Learn More ...
      </button>
    </section>
  );
}
