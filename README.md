# Rahat question and answers

### Auth API

1. https://rahat-question-answer.vercel.app/api/v1/auth/ (Register user) POST body=>name,email,password <br/>
2. https://rahat-question-answer.vercel.app/api/v1/auth/login (login user) POST body=>email,password

### Question API

1.  https://rahat-question-answer.vercel.app/api/v1/questions (create) POST
1.  https://rahat-question-answer.vercel.app/api/v1/questions/votes/id (create question upvotes and downvotes) POST
`
{
"type":"upvote",
"email":"anis.cse5.bu@gmail.com"
}
`
3.  https://rahat-question-answer.vercel.app/api/v1/questions (get all) GET
4.  https://rahat-question-answer.vercel.app/api/v1/questions/:qid (get by id) GET
5.  https://rahat-question-answer.vercel.app/api/v1/questions/:qid (update by id) PATCH
6.  https://rahat-question-answer.vercel.app/api/v1/questions/:qid (delete by id) DELETE

