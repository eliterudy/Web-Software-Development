import { Card, Button } from "react-bootstrap";

const CityWeatherDetail = ({
  data,
  clearDataCallback,
}: {
  data: any;
  clearDataCallback: Function;
}) => {
  return (
    <div className="col col-12 d-flex flex-1 ">
      <Card className="bg-transparent border-0 flex-1">
        <Card.Body className={"city-detail-card"}>
          <Card.Title color="black">Card Title</Card.Title>
          <Card.Text color="black">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CityWeatherDetail;
