const db = require('../config/db')

class UserController {
    async addUser(req, res) {
        const { name, surname } = req.body;
        const newPerson = await db.query("INSERT INTO person (name, surname) VALUES ($1, $2) RETURNING *", [name, surname])

        res.status(201).json({
            ok: true,
            data: newPerson.rows[0]
        })
    }
    
    async getUser(req, res) {
        await db
            .query("SELECT * FROM person")
            .then((data) => {
                res.status(200).json({
                    ok: true,
                    data: data.rows
                })
            })
            .catch((err) => {
                res.status(401).json({
                    ok: false,
                    data: err.stack
                })
            })
    }

    async getUserById(req, res) {
        await db
            .query("SELECT * FROM person WHERE id=$1", [req.params.id])
            .then((user) => {
                if(user.rows.length === 0) {
                    return res.status(401).json({
                        ok: false,
                        data: "User not found"
                    })
                }

                return res.status(200).json({
                    ok: true,
                    data: user.rows
                })
            })
            .catch((err) => {
                return res.status(401).json({
                    ok: false,
                    data: err.stack
                })
            })
    }

    async editUserById(req, res) {
        const { name, surname } = req.body
        const id = req.params.id
        
        await db
            .query("UPDATE person SET name = $1, surname = $2 WHERE id = $2 RETURNING *", [name, surname, id])
            .then((user) => {
                if(user.rows.length === 0) {
                    return res.status(401).json({
                        ok: false,
                        data: "User not found"
                    })
                }

                return res.status(200).json({
                    ok: true,
                    data: user.rows[0]
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    async deleteUser(req, res) {
        await db
            .query("DELETE FROM person WHERE id = $1", [req.params.id])
            .then((data) => {
                console.log(data.rows);
                if(data.rows.length !== 0) {
                    return res.status(203).json({
                        ok: true,
                        data: data.rows[0]
                    })
                } else {
                    return res.status(400).json({
                        ok: false,
                        message: "User not found"
                    })
                }

            })
            .catch((err) => {
                return res.status(400).json({
                    ok: false,
                    message: err.stack
                })
            })
    }
}

module.exports = new UserController()