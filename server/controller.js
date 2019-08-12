module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const { username, password } = req.body
        const newUser = await db.create_user({ username, password })
        res.status(200).send(user)
    },
    login: async (req, res) => {
        const db = req.app.get('db')
    }
}