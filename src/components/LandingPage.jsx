import { Header } from "./header";
import { Navigation } from "./navigationMenu";
import { VideoCardHolder } from "./videoCardHolder";

export function LandingPage(){
    return(<>
    <Header></Header>
    <Navigation></Navigation>
    <VideoCardHolder></VideoCardHolder>
    </>)
}

export default LandingPage;