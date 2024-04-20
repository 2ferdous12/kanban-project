// import ScounSitebar from "./sitebar";
import Twobar from "./twobar";
import Platform from "./platform";
const sitebarPlatform = () => {
    return (
        <div className="flex">
          <Twobar></Twobar>
            <Platform></Platform>
        </div>
    );
};

export default sitebarPlatform;