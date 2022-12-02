import { Link, useLocation } from "react-router-dom";
import IconButton from "../IconButton/IconButton";

function RenderLinks() {
    const location = useLocation();
  const currentUrl = location.pathname;

  const headerItems = [
    {
      url: "/posts",
      icon: "res/Home0.svg",
      chosenIcon: "res/Home1.svg",
      alt: "home",
    },
    {
      url: "/newpost",
      icon: "res/Add.svg",
      chosenIcon: "res/Add.svg",
      alt: "add",
    },
    {
      url: "/likes",
      icon: "res/Heart0.svg",
      chosenIcon: "res/Heart1.png",
      alt: "likes",
    },
    {
      url: "/home",
      icon: "res/Heart0.svg",
      chosenIcon: "res/Heart1.png",
      alt: "home",
    },
  ];

    return (
        headerItems.map((item, id) => (
            <Link key={id} to={item.url}>
              <IconButton
                src={item.url === currentUrl ? item.chosenIcon : item.icon}
                alt={item.alt}
              />
            </Link>
          ))
    );
}

export default RenderLinks;