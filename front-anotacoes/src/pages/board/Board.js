import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BoardCard from "react-trello";
import api from "../../utils/api";
import boardCss from "./Board.css";

export default function Board() {
  const [cards, setCards] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const getBoard = async () => {
    setCards({
      lanes: await api.cards(id).then((res) => {
        return res;
      }),
    });
    setIsLoading(false);
  };

  useEffect(() => {
    getBoard();
  }, []);

  const dataDefault = {
    lanes: [
      {
        id: "lane1",
        title: "Create your first card",
        label: "",
        cards: [],
      },
    ],
  };

  const addCard = async (card, laneId) => {
    const cardRequest = {
      title: card.title,
      description: card.description,
      label: card.label,
      containerId: laneId,
    };
    await api.addCard(cardRequest).then((res) => res);
  };

  const deleteCard = async (cardId) => {
    await api.deleteCard(cardId);
  };

  const dataChange = async (laneId, newData) => {
    console.log(laneId, newData);
  };

  const addLane = async (data) => {
    const requestObject = {
      title: data.title,
      boardId: id,
    };
    await api.addLane(requestObject);
  };

  const showCards = (data) => {
    return (
      <BoardCard
        className={boardCss}
        data={data}
        editable={true}
        draggable={true}
        onCardAdd={addCard}
        onCardDelete={deleteCard}
        onLaneUpdate={dataChange}
        canAddLanes={true}
        onLaneAdd={addLane}
      />
    );
  };
  return <>{isLoading ? showCards(dataDefault) : showCards(cards)}</>;
}