import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaRegBookmark, FaShareAlt,FaStar,FaEye } from "react-icons/fa";

const NewsSummaryCard = ({ news }) => {
  const { _id, title, details, image_url, total_view, author,rating } = news;
  return (
    <Card className=" mb-4">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <Image
            src={author.img}
            roundedCircle
            className="me-2"
            style={{ height: "60px" }}
          ></Image>

          <div>
            <p>{author.name}</p>
            <p>{author.published_date}</p>
          </div>
        </div>
        <div>
          <FaRegBookmark></FaRegBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length > 200 ? (
            <p>
              {details.slice(0, 250) + "..."}{" "}
              <Link to={`/news/${_id}`}>Read More</Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-mute d-flex justify-content-between">
        <div>
            <FaStar className="text-warning me-2"></FaStar>
            <span>{rating?.number}</span>
        </div>
        <div>
            <FaEye className="me-2"></FaEye>
            <span>{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsSummaryCard;
