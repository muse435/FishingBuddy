# Fishing Buddy

A place to track fishing stats


# Project setup notes

Split frontend/backend architecture - completely independent and communicate via an API

backend
    Database: SQLite (very simple, can upgrade later if we want)
        we can use Sequelize to make interacting with the DB easy
    webserver: node
    web framework: express

frontend
    TBD, start simple with plain HTML/CSS. Move to React soon if we want
    