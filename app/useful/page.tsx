"use client";

import { useState } from "react";
import Link from "next/link";

const materials = [
  {
    category: "МОДЫ",
    title: "Elytra Trims",
    description: "Полезные модификации для комфортной игры на нашем сервере.",
    icon: "✦",
    tag: "Моды",
    link: "https://modrinth.com/mod/elytra-trims",
  },
  {
    category: "ГОЛОСОВОЙ ЧАТ",
    title: "Simple Voice Chat",
    description: "Установи голосовой чат, чтобы общаться с другими игроками.",
    icon: "🎙️",
    tag: "Общение",
    link: "https://modrinth.com/plugin/simple-voice-chat",
  },
  {
    category: "ИНСТРУКЦИИ",
    title: "Как начать играть",
    description: "Информация о подключении к серверу Baseland.",
    icon: "⌘",
    tag: "Гайд",
    link: "",
  },
];

const categories = ["Все", "Моды", "Общение", "Гайд"];

export default function Useful() {
  const [category, setCategory] = useState("Все");
  const [search, setSearch] = useState("");

  const filtered = materials.filter((item) => {
    const matchesCategory =
      category === "Все" || item.tag === category;
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="useful-page">
      <nav className="navbar">
        <Link href="/" className="logo">BASELAND</Link>

        <div className="nav-links">
          <Link href="/">Главная</Link>
          <Link href="/shop">Магазин</Link>
          <Link href="/useful" className="active">Полезное</Link>
        </div>

        <span className="project">BASELAND PROJECT</span>
      </nav>

      <header className="hero">
        <div className="eyebrow">✦ BASELAND COMMUNITY ✦</div>
        <h1>ВСЁ <span>ПОЛЕЗНОЕ</span></h1>
        <p>
          Моды, инструкции и материалы,
          которые сделают игру на Baseland ещё удобнее.
        </p>

        <div className="search-box">
          <span>⌕</span>
          <input
            placeholder="Найти материал..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </header>

      <section className="content">
        <div className="category-list">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "selected" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="section-heading">
          <div>
            <span>БИБЛИОТЕКА BASELAND</span>
            <h2>Материалы проекта</h2>
          </div>
          <span className="count">{filtered.length} материала</span>
        </div>

        <div className="materials-grid">
          {filtered.map((item) => (
            <article className="material-card" key={item.title}>
              <div className="card-top">
                <div className="material-icon">{item.icon}</div>
                <span className="tag">{item.category}</span>
              </div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>

              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="open-link"
                >
                  Открыть материал <span>↗</span>
                </a>
              ) : (
                <span className="soon">Ссылка скоро появится</span>
              )}
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="empty">
            Ничего не найдено. Попробуй другой запрос.
          </div>
        )}
      </section>

      <footer>
        <Link href="/">← На главную</Link>
        <p>© BASELAND PROJECT</p>
      </footer>

      <style jsx global>{`
        * { box-sizing: border-box; }

        body {
          margin: 0;
          background: #080711;
          color: white;
          font-family: Arial, sans-serif;
        }

        .useful-page {
          min-height: 100vh;
          background:
            radial-gradient(ellipse at 50% 0%, #291542 0%, transparent 48%),
            #080711;
        }

        .navbar {
          height: 76px;
          padding: 0 7%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #ffffff12;
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
          gap: 30px;
        }

        .nav-links a, footer a {
          color: #aaa2bd;
          text-decoration: none;
          transition: .2s;
        }

        .nav-links a:hover,
        .nav-links .active,
        footer a:hover {
          color: #c49aff;
        }

        .project {
          color: #796c91;
          font-size: 10px;
          letter-spacing: 2px;
        }

        .hero {
          text-align: center;
          padding: 80px 20px 55px;
        }

        .eyebrow {
          color: #bb96f4;
          font-size: 11px;
          letter-spacing: 4px;
          margin-bottom: 18px;
        }

        .hero h1 {
          font-size: clamp(34px, 5vw, 58px);
          margin: 0;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .hero h1 span {
          background: linear-gradient(90deg, #a46be8, #e0c7ff);
          color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
        }

        .hero p {
          color: #aaa2bd;
          font-size: 14px;
          line-height: 1.7;
          max-width: 490px;
          margin: 17px auto 27px;
        }

        .search-box {
          width: min(420px, 90%);
          margin: auto;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px 17px;
          border: 1px solid #ffffff20;
          background: #ffffff09;
          border-radius: 11px;
          color: #b994f0;
        }

        .search-box input {
          width: 100%;
          border: 0;
          outline: 0;
          background: transparent;
          color: white;
          font-size: 13px;
        }

        .search-box input::placeholder {
          color: #80768f;
        }

        .content {
          width: min(1100px, 90%);
          margin: auto;
          padding-bottom: 50px;
        }

        .category-list {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin-bottom: 42px;
        }

        .category-list button {
          padding: 10px 18px;
          border-radius: 9px;
          border: 1px solid #ffffff17;
          background: #ffffff08;
          color: #aaa2bd;
          cursor: pointer;
          transition: .25s;
        }

        .category-list button:hover,
        .category-list button.selected {
          background: #7849ad;
          border-color: #a77ce9;
          color: white;
        }

        .section-heading {
          display: flex;
          justify-content: space-between;
          align-items: end;
          margin-bottom: 22px;
        }

        .section-heading > div > span {
          font-size: 9px;
          color: #a77ce9;
          letter-spacing: 3px;
        }

        .section-heading h2 {
          font-size: 24px;
          margin: 8px 0 0;
        }

        .count {
          color: #827990;
          font-size: 11px;
        }

        .materials-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .material-card {
          min-height: 250px;
          padding: 23px;
          border: 1px solid #ffffff16;
          border-radius: 16px;
          background: linear-gradient(145deg, #191227, #100d1b);
          transition: .3s;
          animation: cardAppear .5s both;
        }

        .material-card:hover {
          transform: translateY(-6px);
          border-color: #a77ce966;
          box-shadow: 0 12px 35px #7849ad20;
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .material-icon {
          width: 43px;
          height: 43px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: #9d68d426;
          color: #c49aff;
          font-size: 22px;
        }

        .tag {
          font-size: 9px;
          letter-spacing: 1px;
          color: #bd9be9;
          background: #a56bdf18;
          padding: 7px 10px;
          border-radius: 20px;
        }

        .material-card h3 {
          font-size: 17px;
          margin: 22px 0 10px;
        }

        .material-card p {
          color: #9990a9;
          font-size: 12px;
          line-height: 1.7;
          min-height: 42px;
        }

        .open-link {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
          padding-top: 14px;
          border-top: 1px solid #ffffff12;
          color: #c49aff;
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
        }

        .open-link:hover { color: white; }

        .soon {
          display: block;
          margin-top: 20px;
          padding-top: 14px;
          border-top: 1px solid #ffffff12;
          color: #716780;
          font-size: 11px;
        }

        .empty {
          text-align: center;
          color: #9990a9;
          padding: 60px 10px;
        }

        footer {
          text-align: center;
          padding: 25px;
          border-top: 1px solid #ffffff10;
          color: #716780;
          font-size: 11px;
        }

        footer p { margin-top: 13px; }

        @keyframes cardAppear {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 750px) {
          .materials-grid { grid-template-columns: repeat(2, 1fr); }
          .project { display: none; }
        }

        @media (max-width: 520px) {
          .navbar { padding: 0 5%; height: 65px; }
          .logo { font-size: 17px; }
          .nav-links { gap: 13px; font-size: 11px; }
          .hero { padding: 55px 15px 40px; }
          .materials-grid { grid-template-columns: 1fr; }
          .section-heading h2 { font-size: 20px; }
        }
      `}</style>
    </main>
  );
}