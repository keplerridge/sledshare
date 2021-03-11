UPDATE owner_users
SET email = $1
WHERE user_id = $2;

SELECT user_id, email FROM owner_users
WHERE user_id = $2;