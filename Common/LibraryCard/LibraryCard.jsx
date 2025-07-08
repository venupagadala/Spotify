import React from "react";
import "./LibraryCard.css"; // Make sure to create this CSS file

export default function LibraryCard({ title, desc, btnTittle }) {
  return (
    <div className="CfruGiDGW_FH4l65GMpb wM72343CksOCaL3bZvKK lHJd4oSttKLxkxuoZ0Lr">
      <div className="title">{title}</div>
      <div className="desc">{desc}</div>
      <button className="btn">{btnTittle}</button>
    </div>
  );
}