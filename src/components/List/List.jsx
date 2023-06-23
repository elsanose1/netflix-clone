import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import "./list.scss";
import ListItem from "../ListItem/ListItem";
import { useRef, useState } from "react";

const List = ({ title }) => {
  const listRef = useRef();
  const [isMoved, setIsMoved] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const slideHandle = (direction) => {
    setIsMoved(true);
    const distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideIndex > 0) {
      listRef.current.style.transform = `translateX(${distance + 230}px)`;
      setSlideIndex((prev) => prev - 1);
    } else if (direction === "right" && slideIndex < 5) {
      listRef.current.style.transform = `translateX(${distance - 230}px)`;
      setSlideIndex((prev) => prev + 1);
    }
  };
  return (
    <div className="list">
      <span className="list-title">{title}</span>
      <div className="wrapper">
        {isMoved && (
          <ArrowBackIosOutlined
            className="arrow left"
            onClick={() => slideHandle("left")}
          />
        )}
        <div className="container" ref={listRef}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <ArrowForwardIosOutlined
          className="arrow right"
          onClick={() => slideHandle("right")}
        />
      </div>
    </div>
  );
};

export default List;
