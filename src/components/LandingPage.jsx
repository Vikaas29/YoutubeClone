import { Header } from "./header";
import { Navigation } from "./navigationMenu";
import { VideoCardHolder } from "./videoCardHolder";

// this is the home/landing page that will initially be presented when website loads
export function LandingPage(){
    return(<>
    <Header></Header>
    <Navigation></Navigation>
    <VideoCardHolder></VideoCardHolder>
    </>)
}

export default LandingPage;