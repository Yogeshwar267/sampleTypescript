import "./../../App.css"
import HomeComponent from "../../Components/features/HomeComponent";
import withLayout from "../../Components/hoc/Header";

function Home() {
  return (
    <div className="mt-10 flex flex-col items-center pb-24">
        <HomeComponent/>
    </div>
  );
}

export default withLayout(Home);
