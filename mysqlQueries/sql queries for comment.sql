SELECT c.commentID AS comment_id, c.comment AS comment_text, c.articleID,
(SELECT GROUP_CONCAT("{", '"cooment_id"',":", '"',r.commentID,'"',',', 
	'"cooment"',":",'"',r.comment,'"', ',','"user_id"',":", '"',u.userID,'"',',','"username"',":", '"',u.firstName,'"', "}" SEPARATOR '\n')
FROM comments 
r LEFT JOIN users u ON r.userID = u.userID
        WHERE r.parent_comment_id = c.commentID) AS replies
FROM comments c where c.parent_comment_id is null and c.articleID = "4ed0c0af-da2f-40f0-bcf4-474d4f61db35";


SELECT c1.commentID, c1.comment, u.firstName AS username,u.userID, c1.created_at, GROUP_CONCAT(c2.comment SEPARATOR '\n') AS replies
FROM comments AS c1
LEFT JOIN comments AS c2 ON c1.commentID = c2.parent_comment_id
JOIN users AS u ON c1.userID = u.userID
WHERE c1.parent_comment_id IS NULL
GROUP BY c1.commentID;