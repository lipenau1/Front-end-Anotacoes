import React, { Fragment, useEffect, useCallback, useState } from "react";
import api from "../../utils/api";
import "../Home/Home.css";
import { Link } from "react-router-dom";

export default function Boxed() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getBoard = useCallback(async () => {
    setData(await api.getBoards());
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getBoard();
  }, [getBoard]);

  return (
    <Fragment>
      <div class="center">
      {isLoading && <div>Carregando</div>}
      {data.map((data) => (
        <div key={data.id}>
          <div class="card-container">
            <div class="property-card">
              <Link to={`/board/${data.id}`}>
                <div class="property-image">
                  <div class="property-image-title">
                    {console.log(data.dateCreated)}
                    <h5>Created in: {data.dateCreated}</h5>
                  </div>
                </div>
              </Link>
              <div class="property-description">
                <h5> {data.title} </h5>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </Fragment>
  );
}
