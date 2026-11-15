"use client";

import { useState, useEffect } from "react";

type ServerInfo = {
  online: boolean;
  players?: {
    online: number;
    max: number;
  };
};

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const [server, setServer] = useState<{
    status: "loading" | "online" | "offline" | "error";
    online: number;
    max: number;
  }>({
    status: "loading",
    online: 0,
    max: 0,
  });

  useEffect(() => {
    let active = true;

    async function updateOnline() {
      try {
        const response = await fetch(
          "https://api.mcstatus.io/v2/status/java/mc.baseland.ru",
          { cache: "no-store" }
        );

        if (!response.ok) {
          throw new Error("API error");
        }

        const data: ServerInfo = await response.json();

        if (!active) return;

        setServer({
          status: data.online ? "online" : "offline",
          online: data.players?.online ?? 0,
          max: data.players?.max ?? 0,
        });
      } catch {
        if (!active) return;

        setServer({
          status: "error",
          online: 0,
          max: 0,
        });
      }
    }

    updateOnline();

    const interval = setInterval(updateOnline, 30000);

    return () => {
      active = false;
      clearInterval(interval);
    };
  }, []);

  async function copyIP() {
    try {
      await navigator.clipboard.writeText("mc.baseland.ru");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert("Не удалось скопировать адрес. Скопируй его вручную.");
    }
  }

  const statusText = {
    loading: "ЗАГРУЗКА",
    online: "ONLINE",
    offline: "OFFLINE",
    error: "НЕТ СВЯЗИ",
  }[server.status];

  return (
    <main>
      <nav className="navbar">
        <div className="logo">BASELAND</div>

        <div className="nav-links">
          <a href="/">Главная</a>
          <a href="/shop">Магазин</a>
          <a href="/useful">Полезное</a>
          <a href="#">Статистика</a>
        </div>

        <button className="login">
          Личный кабинет
        </button>
      </nav>

      <section className="hero">
        <div className="tag">
          MINECRAFT VANILLA+ SERVER
        </div>

        <h1>
          <span>ЗДЕСЬ ТЕБЯ ЖДУТ!</span>
        </h1>

        <p>
          Добро пожаловать на Baseland.
          Начни свою историю вместе с нами.
        </p>

        {/* ОНЛАЙН СЕРВЕРА */}

        <div className="online-widget">
  <div className="online-top">
    <span className="online-label">
    </span>

    <span className={`online-status ${server.status}`}>
      <span className="status-dot" />
      {statusText}
    </span>
  </div>

  <div className="online-main">
    <div className="online-icon">
      <span>👥</span>
    </div>

    <div className="online-number">
      {server.status === "online"
        ? server.online
        : server.status === "loading"
        ? "..."
        : "—"}

      {server.status === "online" && (
        <span> / {server.max}</span>
      )}
    </div>
  </div>

  <div className="online-caption">
    ИГРОКОВ СЕЙЧАС В ИГРЕ
  </div>

  <div className="online-progress">
    <div
      className="online-progress-fill"
      style={{
        width:
          server.status === "online" && server.max > 0
            ? `${Math.min(100, server.online / server.max * 100)}%`
            : "0%",
      }}
    />
  </div>

  <div className="online-footer">
    <span>Baseland Project by serfy</span>
  </div>
</div>
        <button
          className="play"
          onClick={() => setIsOpen(true)}
        >
          Начать играть
        </button>
      </section>

      <section className="sections">
        <h2>ВОЗМОЖНОСТИ BASELAND</h2>
        <div className="cards">
          <a href="/shop" className="card">
            Магазин привилегий
          </a>

          <div className="card">
            Baseland Coins
          </div>

          <a href="/useful" className="card">
            Полезное
          </a>
        </div>
      </section>

      {isOpen && (
        <div
          className="modal-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <div className="connect-modal">
            <button
              className="modal-close"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>

            <div className="modal-tag">
              BASELAND SERVER
            </div>

            <h2>НАЧНИ СВОЮ ИСТОРИЮ</h2>

            <p className="modal-description">
              Подключайся к нашему серверу
              и играй вместе с друзьями.
            </p>

            <div className="ip-box">
              <div>
                <span>АДРЕС СЕРВЕРА</span>
                <strong>mc.baseland.ru</strong>
              </div>

              <button onClick={copyIP}>
                {copied ? "Скопировано!" : "Копировать"}
              </button>
            </div>

            <div className="version-box">
              <span>ВЕРСИЯ MINECRAFT</span>
              <strong>1.21.11 – 26.3</strong>
            </div>

            <div className="connect-note">
              <span>01</span>
              Скопируй адрес сервера
            </div>

            <div className="connect-note">
              <span>02</span>
              Открой Minecraft и выбери
              «Сетевая игра»
            </div>

            <div className="connect-note">
              <span>03</span>
              Вставь адрес и подключайся!
            </div>

            <button
              className="modal-done"
              onClick={() => setIsOpen(false)}
            >
              ПОНЯТНО
            </button>
          </div>
        </div>
      )}
    </main>
  );
}