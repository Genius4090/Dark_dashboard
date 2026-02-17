import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumps = () => {
  const location = useLocation();
  const currentLink:Array<string> = [];

  const crumps = location.pathname
    .split("/")
    .filter((item) => item != "")
    .map((crumb) => {
    currentLink.push(`/${crumb}`)
      return <Link className=" flex items-center gap-0.5" key={crumb} to={currentLink.join('')}>{crumb} <ChevronRight size={18}/></Link>;
    });
  return <h2 className="text-white flex ">{crumps}</h2>;
};

export default Breadcrumps;
