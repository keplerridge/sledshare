UPDATE rental_users
SET password $1
WHERE user_id = $2;