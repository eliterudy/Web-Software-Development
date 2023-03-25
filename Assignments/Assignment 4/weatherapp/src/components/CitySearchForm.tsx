import { Card, Button, Form, FloatingLabel, InputGroup } from "react-bootstrap";
import { X } from "react-bootstrap-icons";
import "../index.scss";

const CitySearchForm = ({
  callback,
  value,
}: {
  callback: Function;
  value: string;
}) => {
  return (
    <div className="col col-12 ">
      <Form>
        <InputGroup className="d-flex align-items-center  rounded seach-input-group">
          <Form.Control
            type="text"
            placeholder="Search City"
            className="m-0"
            value={value}
            onChange={(e) =>
              // console.log("E", e.target.value);
              callback(e.target.value)
            }
          />
          <X
            size={24}
            color="rgba(255,255,255,0.8)"
            onClick={() => callback("")}
          />
          <Button>Go</Button>
        </InputGroup>
      </Form>
    </div>
  );
};

export default CitySearchForm;
