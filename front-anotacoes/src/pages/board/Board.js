import React, { useState, useEffect, useCallback, Fragment } from "react";
import { useParams } from "react-router-dom";
import BoardCard from "react-trello";
import api from "../../utils/api";
import boardCss from "./Board.css";

export default function Board() {
  const [cards, setCards] = useState({
    lanes: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getBoard = async () => {
      setCards({
        lanes: await api.cards(id),
      });
      setIsLoading(false);
    };
    getBoard();
  }, [id]);

  const updateBoard = async (newData) => {
    const requestObject = {
      id: id,
      lanes: newData.lanes,
    };
    await api.changeBoardData(requestObject);
  };
  return (
    <Fragment>
      {isLoading && <div>Carregando</div>}
      <BoardCard
        className={boardCss}
        data={cards}
        editable={true}
        draggable={true}
        canAddLanes={true}
        onDataChange={updateBoard}
      />
    </Fragment>
  );
}
