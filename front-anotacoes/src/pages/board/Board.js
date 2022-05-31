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
      id: card.id,
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
      id: data.id,
    };
    await api.addLane(requestObject);
  };

  const deleteLane = async (data) => {
    await api.deleteLane(data);
  };

  const updateLane = async (removedIndex, addedIndex, payload) => {
    console.log(payload);
    return;
    const requestObject = {
      boardId: id,
      removedIndex: removedIndex,
      updatedIndex: addedIndex,
    };
    await api.changeLane(requestObject);
  };

  const updateBoard = async (newData) => {
    console.log(newData);
  };

  const updateCard = async (
    cardId,
    sourceLaneId,
    targetLaneId,
    position,
    cardDetails
  ) => {
    console.log(cardId, sourceLaneId, targetLaneId, position, cardDetails);
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
        onDataChange={updateBoard}
        onLaneAdd={addLane}
        onLaneDelete={deleteLane}
        handleLaneDragEnd={updateLane}
        handleDragEnd={updateCard}
      />
    );
  };
  return <>{isLoading ? showCards(dataDefault) : showCards(cards)}</>;
}
