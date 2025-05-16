CREATE TABLE IF NOT EXISTS champions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  image VARCHAR(255)
);
