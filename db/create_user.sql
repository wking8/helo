insert into users(username, password, profile_pic)
values(${username}, ${password}, ${profileImage})
returning *;
