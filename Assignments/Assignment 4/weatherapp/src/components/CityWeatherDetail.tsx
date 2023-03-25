import { Card, Button } from "react-bootstrap";

const InfoCard = ({
  data,
  clearDataCallback,
}: {
  data: any;
  clearDataCallback: Function;
}) => {
  return (
    <span color="black">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </span>
  );
};

const Loader = () => {
  return (
    <div className="d-flex flex-grow-1 justify-content-center align-items-center  gap-2">
      <div className="spinner-grow text-primary" role="status"></div>
      <div className="spinner-grow text-secondary" role="status"></div>
      <div className="spinner-grow text-success" role="status"></div>
      <div className="spinner-grow text-danger" role="status"></div>
      <div className="spinner-grow text-warning" role="status"></div>
    </div>
  );
};

const CityWeatherDetail = ({
  loading,
  data,
  error,
  clearDataCallback,
}: {
  loading: boolean;
  data: any;
  error: null | string;
  clearDataCallback: Function;
}) => {
  return (
    <div className="col col-12 d-flex flex-1 ">
      <Card className="col-12 bg-transparent border-0 flex-1">
        <Card.Body className={"city-detail-card d-flex flex-column"}>
          <Loader />
          {!loading && data && !error && (
            <InfoCard
              data={data}
              clearDataCallback={() => clearDataCallback()}
            />
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CityWeatherDetail;
