select * from users join posts 
on users.id = posts.author_id
where posts.id = $1;