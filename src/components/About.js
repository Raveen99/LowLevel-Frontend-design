import { LANG } from "../utils/langConfig";

const About = ({ lang }) => {
  const data = LANG[lang];

  return (
    <div className="p-4 m-12">
      <div className="text-xl font-bold"> {data.about}</div>
      <div className="mb-8">{data.desc}</div>

      <div className="text-xl font-bold"> {data.mission} </div>
      <div className="mb-8">{data.desc}</div>

      <div className="text-xl font-bold"> {data.expectation} </div>
      <div>{data.desc}</div>
    </div>
  );
};

export default About;
