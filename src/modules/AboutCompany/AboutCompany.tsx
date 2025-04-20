import OurStory from "@/shared/components/OurStory/OurStory"
import OurTeam from "@/shared/components/OurTeam/OurTeam"
import AboutUs from "../AboutUs/AboutUs"
import Subscribe from "../Subscribe/Subscribe"
import FollowUs from "../FollowUs/FollowUs"

type Props = {}
const AboutCompany = (props: Props) => {
  return (
      <div>
          <OurTeam />
          <OurStory />
          <FollowUs />
          
    </div>
  )
}
export default AboutCompany