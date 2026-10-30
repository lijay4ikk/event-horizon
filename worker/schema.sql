-- Статистика посещений EVENT HORIZON (Cloudflare D1)
-- IP не хранится: visitor = обрезанный SHA-256(ip + браузер + день + секрет), меняется каждые сутки.

CREATE TABLE IF NOT EXISTS sessions (
  id         TEXT PRIMARY KEY,          -- случайный id вкладки
  day        TEXT NOT NULL,             -- YYYY-MM-DD по московскому времени
  hour       INTEGER NOT NULL,          -- час начала (МСК)
  ts         INTEGER NOT NULL,          -- начало, мс
  last       INTEGER NOT NULL,          -- последний сигнал, мс
  visitor    TEXT NOT NULL,
  country    TEXT, city TEXT,
  device     TEXT, os TEXT, browser TEXT,
  lang       TEXT,                      -- язык браузера
  site_lang  TEXT,                      -- язык сайта (ru/en)
  ref        TEXT,                      -- откуда пришли (домен)
  utm        TEXT,
  screen     TEXT,
  tier       TEXT,                      -- уровень качества графики
  webgl      INTEGER DEFAULT 1,
  launched   INTEGER DEFAULT 0,         -- нажал «Начать полёт»
  sound      INTEGER DEFAULT 0,         -- со звуком
  max_scene  INTEGER DEFAULT -1,        -- самая дальняя сцена 0..5
  active_ms  INTEGER DEFAULT 0          -- время с открытой вкладкой
);
CREATE INDEX IF NOT EXISTS idx_sessions_day ON sessions(day);

CREATE TABLE IF NOT EXISTS events (
  session_id TEXT NOT NULL,
  day        TEXT NOT NULL,
  ts         INTEGER NOT NULL,
  name       TEXT NOT NULL,             -- planet / work / form / konami / stay / rewind / lang / sound
  value      TEXT
);
CREATE INDEX IF NOT EXISTS idx_events_day ON events(day, name);
CREATE UNIQUE INDEX IF NOT EXISTS idx_events_once ON events(session_id, name, value);
