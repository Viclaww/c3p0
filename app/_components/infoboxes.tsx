import Image from "next/image";

interface InfoBoxprops {
  head: string;
  img: string;
  desc: string;
}

const InfoBoxes: React.FC<InfoBoxprops> = (props) => {
  return (
    <div
      className="bg-[#1C1C1C] flex  flex-col gap-5 rounded-2xl p-10"
      key={props.head}
    >
      <Image
        src={props.img}
        alt="infobox1"
        className="rounded-full"
        width={35}
        height={35}
      />
      <h3 className="text-3xl font-[600]">{props.head}</h3>
      <p className="font-normal">{props.desc}</p>
    </div>
  );
};

const InfoSection = () => {
  const infos: InfoBoxprops[] = [
    {
      head: "Discover What’s Trending",
      desc: "Curated insights and trends at your fingertips.",
      img: "/bars.png",
    },
    {
      head: "Seamless Trades Made Easy",
      desc: "Effortlessly buy, sell, and manage trades.",
      img: "/material-symbols_candlestick-chart-rounded.png",
    },
    {
      head: "Future-Ready with AI",
      desc: "Powerful third-party integrations (Coming Soon).",
      img: "/girl.png",
    },
  ];
  return (
    <div className="flex gap-8 px-24">
      {infos.map((info) => (
        <InfoBoxes
          key={info.head}
          head={info.head}
          desc={info.desc}
          img={info.img}
        />
      ))}
    </div>
  );
};

export default InfoSection;
