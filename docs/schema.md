# Schema Information


## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## notes
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
author_id       | integer   | not null, foreign key (references users), indexed
notebook_id     | integer   | not null, foreign key (references notebooks) ,indexed
title           | string    | not null
body            | text      | not null, indexed, unique

## notebooks
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
author_id       | integer   | not null, foreign key (references users), indexed
title           | string    | not null, indexed

## tags
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null, indexed

## taggings
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
note_id         | integer   | not null, foreign key (references notes), indexed, unique [tag_id]
tag_id          | integer   | not null, foreign key (references tags), indexed


# Bonus

## chats
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
messages        | string    | not null,

## chattings
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
chat_id         | integer   | not null, foreign key (references chats), indexed
user_id         | integer   | not null, foreign key (references users), indexed

## shares (shared_notes)
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
note_id         | integer   | not null, foreign key (references notes), indexed
author_id       | integer   | not null, foreign key (references users), indexed

## sharedusers
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
shares_id       | integer   | not null, foreign key (references shares), indexed
shared_user_id  | integer   | not null, foreign key (references users), indexed
