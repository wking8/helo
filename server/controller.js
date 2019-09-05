module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const { username, password } = req.body
        const profileImage = `https://robohash.org/${username}`
        const newUser = await db.create_user({ username, password, profileImage })
        req.session.user = user[0];
        res.status(200).send(newUser)
    },
    login: async (req, res) => {
        const db = req.app.get('db')
        const { username, password } = req.body
        const user = await db.find_username({ username, password })
        if (user.length === 0) {
            return res.status(400).send({ message: "Login info incorrect" });
        }
        req.session.user = user[0];
        console.log(req.session)
        return res.status(200).send({ user: req.session.user });
    },
    getPosts: async (req, res) => {
        const db = req.app.get("db");
        const userPost = req.query.userposts === "true" ? true : false;
        const search = req.query.search ? req.query.search : "";
        let userId = req.session.user.id;
        userId = +userId;
        if (userPost && search !== "") {
            console.log("1");
            const posts = await db.search_by_title(["%" + search + "%"]);
            res.status(200).send(posts);
        } else if (!userPost && search === "") {
            console.log("2");
            const posts = await db.search_title_not_user([userId]);
            res.status(200).send(posts);
        } else if (!userPost && search) {
            console.log("3");
            const posts = await db.search_notuser_posts([userId, "%" + search + "%"]);
            res.status(200).send(posts);
        } else if (userPost && !search) {
            console.log("4");
            const posts = await db.get_all_posts();
            res.status(200).send(posts);
        } else if (!userPost && !search) {
            console.log("5");
            const posts = await db.get_all_posts();
            res.status(200).send(posts);
        }
    },
    addPost: async (req, res) => {
        const db = req.app.get('db')
        console.log(req.session)
        const { id } = req.session.user
        const { title, img, content } = req.body
        await db.add_post({ author_id: id, title, img, content })
        res.sendStatus(200)
    },
    getPost: async (req, res) => {
        const db = req.app.get("db");
        const { postid } = req.params;
        const post = await db.get_post([postid]);
        res.status(200).send(post);
      }
}