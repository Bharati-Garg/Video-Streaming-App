import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Live",
  "Gaming",
  "Songs",
  "Soccer",
  "Cricket",
  "Cooking",
  "News",
  "Valentines",
  "Rituals",
  "Bhajan",
  "Playlist",
];
const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((ele, ind) => {
        return <Button name={ele} key={ind} />;
      })}
      {/* <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Soccer" />
      <Button name="Cricket" />
      <Button name="Cooking" />
      <Button name="News" />
      <Button name="Valentines" /> */}
    </div>
  );
};

export default ButtonList;
