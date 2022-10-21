import { Link } from "react-router-dom";
import "../../../App.css";
import { COMMON } from "../../../Shared/Constants";
import { IMAGES } from "../../../Shared/Images";

const HomeComponent = () => (
  <>
    <p
      className="xs:text-2xl sm:text-4xl md:text-5xl font-helvetica font-bold text-6xl text-center text-brand-dark leading-snug">
      {COMMON.projectName}
    </p>
    <img height="250" src={IMAGES.React_Logo} />
  </>
);

export default HomeComponent;
