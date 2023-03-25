import { Card, Button } from "react-bootstrap";
import { ArrowUp } from "react-bootstrap-icons";

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

const Error = ({ message }: { message: string }) => {
  const [errorMessage, error] = message.split("{BREAK}");
  return (
    <div className="d-flex flex-column flex-grow-1 justify-content-center align-items-center bg-white bg-opacity-50  gap-2">
      <p className="text-center text-black bg-opacity-50 px-2 px-md-4 ">
        {errorMessage}
      </p>
      <p className="text-center text-danger bg-opacity-50 fw-bold  px-2 px-md-4">
        {error}
      </p>
    </div>
  );
};

const Intro = () => {
  return (
    <div className="d-flex flex-column flex-grow-1 justify-content-center align-items-center">
      <div className="introIconContainer d-flex justify-content-center align-items-center">
        <ArrowUp size={44} color="rgba(255,255,255,0.8)" />
      </div>
      <p className="text-center px-2 px-md-4">
        Get weather information of any city. But first type in the city name in
        the search bar above
      </p>
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
          {loading && <Loader />}
          {!loading && error && <Error message={error} />}
          {!loading && data && !error && (
            <InfoCard
              data={data}
              clearDataCallback={() => clearDataCallback()}
            />
          )}
          {!loading && !error && !data && <Intro />}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CityWeatherDetail;
