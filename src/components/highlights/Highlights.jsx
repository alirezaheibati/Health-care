import LiveEvent from "./LiveEvent";
import Podcast from "./Podcast";
import Statistics from "./Statistics";
import customer from "./../../assets/customer.png";
import calendar from "./../../assets/calendar.png";
/**
 * Highlights Component
 *
 * Displays a grid of highlight cards, including a podcast, live event, and statistics.
 *
 * Props: None
 */
export default function Highlights() {
  return (
    <div className=" p-3 grid grid-cols-2 grid-rows-4 gap-2 w-full max-w-[400px] mx-auto md:grid-cols-4 md:grid-rows-2 md:max-w-[808px]">
      <div className="col-span-2 row-span-2">
        <Podcast />
      </div>
      <div className="col-span-2">
        <LiveEvent />
      </div>
      <div>
        <Statistics
          title={"08"}
          description={"Years Experience"}
          bgColor={"bg-[#a4dac1]"}
          image={calendar}
        />
      </div>
      <div>
        <Statistics
          title={"120K"}
          description={"Happy Customers"}
          bgColor={"bg-[#e7c2d3]"}
          image={customer}
        />
      </div>
    </div>
  );
}
