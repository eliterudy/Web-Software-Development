import { useState } from "react";
import { Card, Button, Form, FloatingLabel, InputGroup } from "react-bootstrap";
import { X } from "react-bootstrap-icons";
import "../index.scss";

const CitySearchForm = ({ callApi }: { callApi: Function }) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="col col-12 ">
      <Form
        onSubmit={(e) => {
          console.log(e.target);
        }}
      >
        <InputGroup className="d-flex align-items-center  rounded search-input-group">
          <Form.Control
            type="text"
            placeholder="Search City"
            className="m-0"
            value={searchValue}
            onChange={(e) =>
              // console.log("E", e.target.value);
              setSearchValue(e.target.value)
            }
          />
          {searchValue && searchValue.length > 0 && (
            <X
              size={24}
              color="rgba(255,255,255,0.8)"
              onClick={() => setSearchValue("")}
            />
          )}
          <Button disabled={searchValue.length < 1} type="submit">
            Go
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
};

export default CitySearchForm;
