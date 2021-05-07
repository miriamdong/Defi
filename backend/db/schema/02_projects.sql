DROP TABLE IF EXISTS projects CASCADE;
CREATE TABLE projects (
  id VARCHAR(255) PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  target_amount NUMERIC NOT NULL,
  target_date DATE NOT NULL,
  min_amount NUMERIC NOT NULL,
  round VARCHAR(50),
  contract TEXT,
  image BYTEA,
  user_id VARCHAR REFERENCES users(id) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP,
  deleted_at TIMESTAMP
);