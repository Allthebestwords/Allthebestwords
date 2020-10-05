DROP TABLE IF EXISTS states;
DROP TABLE IF EXISTS quotes;

CREATE TABLE states (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  state TEXT NOT NULL,
  reg_url TEXT NOT NULL,
  check_reg_url TEXT NOT NULL,
  ab_req_url TEXT,
  online_reg_deadline DATE NOT NULL,
  mail_reg_deadline DATE NOT NULL,
  in_person_reg_deadline DATE NOT NULL,
  ab_req_deadline DATE NOT NULL,
  ab_ret_mail_deadline DATE NOT NULL,
  ab_in_person_deadline DATE NOT NULL,
  early_voting_start DATE,
  postmark BOOLEAN 
  
);

CREATE TABLE quotes (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  quote TEXT NOT NULL,
  author TEXT NOT NULL
);
