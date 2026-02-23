"use client";

import Link from "next/link";
import { useState, ViewTransition } from "react";
import "./page.css";

const initialCards = [
  { cardNo: 1, bgColor: "aliceblue" },
  { cardNo: 2, bgColor: "cadetblue" },
  { cardNo: 3, bgColor: "chocolate" },
  { cardNo: 4, bgColor: "cornflowerblue" },
];

export default function Page() {
  const [cards, setCards] = useState(initialCards);

  const colors = ["gold", "darkseagreen", "dodgerblue", "hotpink"];

  function handleAddCard() {
    setCards((prevCards) => [
      ...prevCards,
      {
        cardNo: cards.length + 1,
        bgColor: colors[Math.floor(Math.random() * colors.length)],
      },
    ]);
  }

  function handleRemoveCard(cardNo: number) {
    setCards((prevCards) => prevCards.filter((card) => card.cardNo !== cardNo));
  }

  return (
    <main>
      <ViewTransition name="spa">
        <h1>Same document view transitions</h1>
      </ViewTransition>

      <button onClick={handleAddCard}>Add card</button>

      <ul id="cards-wrapper">
        {cards.map((card) => (
          <li
            key={card.cardNo}
            id={`card${card.cardNo}`}
            style={{ backgroundColor: card.bgColor }}
          >
            <button
              className="remove-btn"
              onClick={() => handleRemoveCard(card.cardNo)}
            >
              X
            </button>
          </li>
        ))}
      </ul>

      <Link href="/">Back to home</Link>
    </main>
  );
}
