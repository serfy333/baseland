"use client";

import { useState } from "react";
import Link from "next/link";

const ranks = [
  {
    id: "I",
    name: "СПОНСОР I",
    group: "sponsor1",
    gradient: "linear-gradient(110deg, #ffffff, #9299a8)",
    glow: "rgba(210,220,235,0.2)",
    prices: { month: 49, three: 129 },
    homes: 3,
    discs: 1,
    features: [
      "3 точки /sethome",
      "1 пластинка с вашей песней",
    ],
  },
  {
    id: "II",
    name: "СПОНСОР II",
    group: "sponsor2",
    gradient: "linear-gradient(110deg, #55dcff, #1754df)",
    glow: "rgba(40,140,255,0.25)",
    prices: { month: 129, three: 239 },
    homes: 4,
    discs: 2,
    features: [
      "4 точки /sethome",
      "2 пластинки с вашей песней",
      "/ec — эндер-сундук",
      "/feed — покормить себя",
      "/spin — крутиться",
    ],
  },
  {
    id: "III",
    name: "СПОНСОР III",
    group: "sponsor3",
    gradient: "linear-gradient(110deg, #ff9bd5, #9b42ed)",
    glow: "rgba(190,75,230,0.25)",
    prices: { month: 219, three: 399 },
    homes: 5,
    discs: 3,
    features: [
      "5 точек /sethome",
      "3 пластинки с вашей песней",
      "/ec — эндер-сундук",
      "/craft — верстак",
      "/feed — покормить себя",
      "/disposal — мусорка",
      "/phantomshield — защита от фантомов",
      "/anvil — наковальня",
    ],
  },
  {
    id: "IV",
    name: "СПОНСОР IV",
    group: "sponsor4",
    gradient: "linear-gradient(110deg, #ff515d, #790d29)",
    glow: "rgba(220,35,65,0.25)",
    prices: { month: 349, three: 549 },
    homes: 7,
    discs: 4,
    features: [
      "7 точек /sethome",
      "4 пластинки с вашей песней",
      "/ec — эндер-сундук",
      "/craft — верстак",
      "/feed — покормить себя",
      "/anvil — наковальня",
      "/hat — блок на голову",
      "/disposal — мусорка",
      "/phantomshield — защита от фантомов",
      "/fix — починить предмет в руке",
      "/suicide — прикольная команда",
    ],
  },
  {
    id: "V",
    name: "СПОНСОР V",
    group: "sponsor5",
    gradient: "linear-gradient(110deg, #fff0a1, #e7a51b, #a66a08)",
    glow: "rgba(255,190,45,0.25)",
    prices: { month: 469, three: 999 },
    homes: 10,
    discs: 5,
    features: [
      "10 точек /sethome",
      "5 пластинок с вашей песней",
      "/ec — эндер-сундук",
      "/craft — верстак",
      "/anvil — наковальня",
      "/feed — покормить себя",
      "/hat — блок на голову",
      "/smithingtable — стол кузнеца",
      "/grindstone — точило",
      "/suicide — прикольная команда",
      "/disposal — мусорка",
      "/phantomshield — защита от фантомов",
      "/stonecutter — камнерез",
      "/loom — ткацкий станок",
      "/repair all — починить всё без КД",
      "/essentials:heal — исцелить себя",
    ],
  },
];

export default function Shop() {
  const [period, setPeriod] = useState<"month" | "three">("month");
  const [selected, setSelected] = useState<(typeof ranks)[number] | null>(null);

  return (
    <main className="shop">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <nav className="navbar">
        <Link href="/" className="logo">BASELAND</Link>
        <div className="nav-links">
          <Link href="/">Главная</Link>
          <Link href="/shop" className="active">Магазин</Link>
        </div>
        <span className="shop-label">BASELAND PROJECT</span>
      </nav>

      <header className="shop-header">
        <div className="eyebrow">✦ BASELAND PRIVILEGES ✦</div>
        <h1>МАГАЗИН <span>ПРИВИЛЕГИЙ</span></h1>
        <p>Выбери свой ранг и открой новые возможности на Baseland</p>

        <div className="period-switch">
          <button
            className={period === "month" ? "chosen" : ""}
            onClick={() => setPeriod("month")}
          >
            1 месяц
          </button>
          <button
            className={period === "three" ? "chosen" : ""}
            onClick={() => setPeriod("three")}
          >
            3 месяца
            <span className="discount">ВЫГОДНО</span>
          </button>
        </div>
      </header>

      <section className="rank-grid">
        {ranks.map((rank, index) => (
          <article
            className="rank-card"
            key={rank.id}
            style={{
              animationDelay: `${index * 100}ms`,
              ["--rank-glow" as string]: rank.glow,
            }}
          >
            <div
              className="rank-title"
              style={{ backgroundImage: rank.gradient }}
            >
              {rank.name}
            </div>

            <div className="rank-subtitle">
              УРОВЕНЬ ПРИВИЛЕГИЙ {rank.id}
            </div>

            <div className="price">
              {rank.prices[period]} ₽
              <span> / {period === "month" ? "месяц" : "3 месяца"}</span>
            </div>

            <div className="rank-stats">
              <div>
                <strong>{rank.homes}</strong>
                <span>ДОМА</span>
              </div>
              <div>
                <strong>{rank.discs}</strong>
                <span>ПЛАСТИНКИ</span>
              </div>
            </div>

            <div className="feature-heading">ВОЗМОЖНОСТИ</div>

            <ul className="features">
              {rank.features.map((feature) => (
                <li key={feature}>
                  <span className="check">✦</span>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className="buy-button"
              style={{ backgroundImage: rank.gradient }}
              onClick={() => setSelected(rank)}
            >
              Подробнее и покупка
              <span>→</span>
            </button>
          </article>
        ))}
      </section>

      <section className="coins-section">
        <div className="coin-icon">✧</div>
        <div>
          <h2>BASELAND COINS</h2>
          <p>Внутриигровая валюта для покупок на сервере</p>
        </div>
      </section>

      <footer>
        <Link href="/">← Вернуться на главную</Link>
        <p>© BASELAND PROJECT</p>
      </footer>

      {selected && (
        <div className="modal-bg" onClick={() => setSelected(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setSelected(null)}>
              ×
            </button>
            <div
              className="modal-title"
              style={{ backgroundImage: selected.gradient }}
            >
              {selected.name}
            </div>
            <p>Выбранный срок: {period === "month" ? "1 месяц" : "3 месяца"}</p>
            <div className="modal-price">
              {selected.prices[period]} ₽
            </div>
            <p className="modal-group">
              Группа LuckPerms: <strong>{selected.group}</strong>
            </p>
            <p className="modal-note">
              Покупка скоро станет доступна.
            </p>
            <button className="modal-close-button" onClick={() => setSelected(null)}>
              ПОНЯТНО
            </button>
          </div>
        </div>
      )}

      <style jsx global>{`
        * { box-sizing: border-box; }

        body {
          margin: 0;
          background: #080711;
          color: #fff;
          font-family: Arial, sans-serif;
        }

        .shop {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(ellipse at 50% 0%, #241342 0%, transparent 48%),
            linear-gradient(145deg, #080711, #100a20 55%, #080711);
          padding-bottom: 60px;
        }

        .ambient {
          position: absolute;
          width: 380px;
          height: 380px;
          border-radius: 50%;
          filter: blur(110px);
          opacity: .2;
          pointer-events: none;
          animation: float 9s ease-in-out infinite alternate;
        }
          .ambient-one {
          background: #7738c8;
          top: 250px;
          left: -200px;
        }

        .ambient-two {
          background: #3827a8;
          top: 900px;
          right: -220px;
          animation-delay: -4s;
        }

        .navbar {
          height: 76px;
          padding: 0 7%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #ffffff12;
          position: relative;
          z-index: 2;
          backdrop-filter: blur(16px);
        }

        .logo {
          color: white;
          text-decoration: none;
          font-size: 22px;
          font-weight: 900;
          letter-spacing: 3px;
        }

        .nav-links {
          display: flex;
          gap: 32px;
        }

        .nav-links a, footer a {
          color: #aaa2bd;
          text-decoration: none;
          transition: .25s;
        }

        .nav-links a:hover, .nav-links .active, footer a:hover {
          color: white;
        }

        .shop-label {
          color: #766b91;
          font-size: 10px;
          letter-spacing: 2px;
        }

        .shop-header {
          text-align: center;
          padding: 75px 20px 45px;
          position: relative;
          z-index: 1;
        }

        .eyebrow {
          color: #b99aff;
          font-size: 11px;
          letter-spacing: 4px;
          margin-bottom: 18px;
        }

        .shop-header h1 {
          font-size: clamp(30px, 5vw, 55px);
          letter-spacing: 2px;
          margin: 0;
          font-weight: 900;
        }

        .shop-header h1 span {
          background: linear-gradient(90deg, #b68aff, #e0c9ff);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .shop-header p {
          color: #aaa2bd;
          font-size: 14px;
          margin-top: 15px;
        }

        .period-switch {
          display: inline-flex;
          gap: 5px;
          padding: 5px;
          margin-top: 30px;
          background: #ffffff0b;
          border: 1px solid #ffffff16;
          border-radius: 12px;
        }

        .period-switch button {
          border: 0;
          background: transparent;
          color: #aaa2bd;
          padding: 12px 19px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 700;
          transition: .25s;
        }

        .period-switch button.chosen {
          color: white;
          background: linear-gradient(110deg, #7144ad, #49318c);
          box-shadow: 0 4px 20px #7040b944;
        }

        .discount {
          color: #e5c5ff;
          font-size: 9px;
          margin-left: 8px;
        }

        .rank-grid {
          width: min(1200px, 90%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          position: relative;
          z-index: 1;
        }

        .rank-card {
          background: linear-gradient(145deg, #171126, #100d1b);
          border: 1px solid #ffffff16;
          border-radius: 18px;
          padding: 25px;
          min-width: 0;
          position: relative;
          overflow: hidden;
          animation: appear .7s both;
          transition: transform .3s, border-color .3s, box-shadow .3s;
        }

        .rank-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--rank-glow);
          box-shadow: 0 0 25px var(--rank-glow);
        }

        .rank-card:hover {
          transform: translateY(-8px);
          border-color: #a77ce966;
          box-shadow: 0 15px 45px var(--rank-glow);
        }

        .rank-title, .modal-title {
          display: inline-block;
          font-size: 24px;
          font-weight: 900;
          background-clip: text !important;
          -webkit-background-clip: text !important;
          color: transparent !important;
          letter-spacing: 1px;
        }

        .rank-subtitle {
          color: #756c88;
          font-size: 9px;
          letter-spacing: 2px;
          margin-top: 9px;
        }

        .price {
          font-size: 37px;
          font-weight: 900;
          margin-top: 24px;
        }

        .price span {
          color: #80778e;
          font-size: 12px;
          font-weight: 400;
        }

        .rank-stats {
          display: flex;
          gap: 12px;
          margin: 22px 0;
        }

        .rank-stats div {
          flex: 1;
          padding: 13px;
          background: #ffffff08;
          border: 1px solid #ffffff0c;
          border-radius: 10px;
        }

        .rank-stats strong {
          display: block;
          font-size: 22px;
        }

        .rank-stats span {
          color: #8c829e;
          font-size: 9px;
          letter-spacing: 1px;
        }

        .feature-heading {
          color: #b89bdf;
          font-size: 10px;
          letter-spacing: 2px;
          margin-bottom: 14px;
        }

        .features {
          list-style: none;
          padding: 0;
          margin: 0;
          min-height: 155px;
        }

        .features li {
          display: flex;
          gap: 9px;
          color: #c4bdce;
          font-size: 12px;
          line-height: 1.55;
          margin-bottom: 9px;
          overflow-wrap: anywhere;
        }

        .check {
          color: #b88af1;
          flex-shrink: 0;
        }

        .buy-button {
          width: 100%;
          border: 0;
          border-radius: 10px;
          padding: 14px;
          margin-top: 22px;
          color: #100b19;
          font-size: 12px;
          font-weight: 900;
          cursor: pointer;
          transition: .25s;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .buy-button:hover {
          filter: brightness(1.15);
          transform: translateY(-2px);
          box-shadow: 0 7px 25px #ffffff22;
        }

        .buy-button span { font-size: 19px; }

        .coins-section {
          width: min(750px, 90%);
          margin: 65px auto 0;
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 25px;
          border: 1px solid #9d72d333;
          border-radius: 16px;
          background: #8a52bb0c;
          position: relative;
          z-index: 1;
        }

        .coin-icon {
          font-size: 38px;
          color: #c39bff;
        }

        .coins-section h2 {
          font-size: 17px;
          letter-spacing: 2px;
          margin: 0 0 7px;
        }

        .coins-section p {
          color: #9990a9;
          font-size: 12px;
          margin: 0;
        }

        footer {
          text-align: center;
          margin-top: 55px;
          color: #655c75;
          font-size: 11px;
          position: relative;
          z-index: 1;
        }

        footer p { margin-top: 15px; }

        .modal-bg {
          position: fixed;
          inset: 0;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: #05030bdc;
          backdrop-filter: blur(12px);
        }

        .modal {
          width: min(420px, 100%);
          padding: 35px;
          text-align: center;
          position: relative;
          background: #171126;
          border: 1px solid #ffffff20;
          border-radius: 20px;
          box-shadow: 0 20px 90px #0009;
          animation: appear .25s both;
        }

        .close {
          position: absolute;
          top: 12px;
          right: 16px;
          background: none;
          border: 0;
          color: #aaa;
          font-size: 27px;
          cursor: pointer;
        }

        .modal-title { font-size: 25px; }
        .modal p {
          color: #aaa2bd;
          font-size: 13px;
        }

        .modal-price {
          font-size: 36px;
          font-weight: 900;
          margin: 20px;
        }

        .modal-group strong { color: #d2b8ff; }

        .modal-note {
          padding: 14px;
          border-radius: 9px;
          background: #ffffff08;
        }

        .modal-close-button {
          width: 100%;
          padding: 13px;
          border: 0;
          border-radius: 9px;
          background: linear-gradient(100deg, #a879e8, #6941b2);
          color: white;
          font-weight: 900;
          cursor: pointer;
          margin-top: 12px;
        }

        @keyframes appear {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          from { transform: translate(0, 0); }
          to { transform: translate(60px, 80px); }
        }

        @media (max-width: 900px) {
          .rank-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 600px) {
          .navbar { padding: 0 5%; height: 65px; }
          .logo { font-size: 17px; }
          .nav-links { gap: 15px; font-size: 12px; }
          .shop-label { display: none; }
          .shop-header { padding: 55px 15px 35px; }
          .rank-grid { grid-template-columns: 1fr; width: 91%; }
          .rank-card { padding: 23px; }
          .features { min-height: auto; }
          .coins-section { padding: 18px; }
        }
      `}</style>
    </main>
  );
}