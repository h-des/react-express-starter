#  server

## setup

- install postgres on your machine
- copy `.env_template` content to `.env` file
- replace `DB_HOST, DB_USER, DB_PASS, DB_PORT` with your db config


## running
`yarn start:dev`


## migrations
`yarn migrate:new [name]` - create new migration
`yarn migrate` - migrate
`yarn unde` - undo a migration

