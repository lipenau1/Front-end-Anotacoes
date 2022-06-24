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

  const getBoard = useCallback(async () => {
    setCards({
      lanes: await api.cards(id),
    });
    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    getBoard();
  }, [getBoard]);

  const addCard = async (card, laneId) => {
    const cardRequest = {
      id: card.id,
      title: card.title,
      description: card.description,
      label: card.label,
      containerId: laneId,
    };
    await api.addCard(cardRequest).then((res) => res);
  };

  const updateBoard = async (newData) => {
    const requestObject = {
      id: id,
      lanes: newData.lanes,
    };
    await api.changeBoardData(requestObject);
  };
  console.log(cards);
  return (
    <Fragment>
      {isLoading && <div>Carregando</div>}
      <BoardCard
        className={boardCss}
        data={cards}
        editable={true}
        draggable={true}
        onCardAdd={addCard}
        canAddLanes={true}
        onDataChange={updateBoard}
      />
    </Fragment>
  );
}
