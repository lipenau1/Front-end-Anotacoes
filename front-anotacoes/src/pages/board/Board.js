import React, { useState, useEffect } from "react";
import BoardCard from "react-trello";
import api from "../../utils/api";
import boardCss from "./Board.css";

export default function Board() {
  const [cards, setCards] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getBoard = async () => {
    setCards({
      lanes: await api
        .cards("ed0c4da5-2fe5-43a7-bc20-3481eb718efc")
        .then((res) => {
          setIsLoading(false);
          console.log(res);
          return res;
        }),
    });
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

  const showCards = (data) => {
    return <BoardCard className={boardCss} data={data} editable={true} />;
  };
  return <>{isLoading ? showCards(dataDefault) : showCards(cards)}</>;
}
