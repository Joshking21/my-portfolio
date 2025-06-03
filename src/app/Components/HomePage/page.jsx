import Navigation from "../Navigation/page";
import HomePersonalDetails from "../PersonalDetails/page";


export default function HomePageDetails(){
    return(
        <div className=" h-full two-color-split ">
        <Navigation/>
<HomePersonalDetails/>
</div>
    )
}

// bg-[linear-gradient(45deg, _#f87171_50%,_#3b82f6_50%)]