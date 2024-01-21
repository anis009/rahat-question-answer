# Rahat question and answers

### Auth API

1. https://rahat-question-answer.vercel.app/api/v1/auth/ (Register user) POST body=>username,email,password <br/>
2. https://rahat-question-answer.vercel.app/api/v1/auth/login (login user) POST body=>username,password
### Question API

1.  https://rahat-question-answer.vercel.app/api/v1/questions (create) METHOD POST
1.  https://rahat-question-answer.vercel.app/api/v1/questions/votes/:qid (create question upvotes and downvotes) METHOD POST
   
  ```
for upvote
{
"type":"upvote",
"email":"anis.cse5.bu@gmail.com"
}

for downvote
{
"type":"downvote",
"email":"anis.cse5.bu@gmail.com"
}

```
4.  https://rahat-question-answer.vercel.app/api/v1/questions/answers/id (create answers) METHOD POST

```
{
"answerContent":"oiwerui qweirouqwioer 🚀🚀🚀🚀🚀🚀🚀🚀"

}


```
1.  https://rahat-question-answer.vercel.app/api/v1/questions/answers/:qid/aid (create answers upvotes and downvotes) METHOD POST
   
  ```
for upvote
{
"type":"upvote",
"email":"anis.cse5.bu@gmail.com"
}

for downvote
{
"type":"downvote",
"email":"anis.cse5.bu@gmail.com"
}
```
1.  https://rahat-question-answer.vercel.app/api/v1/questions/replies/votes/:qid/:aid/:rid (create replies upvotes and downvotes) METHOD POST
   
  ```
for upvote
{
"type":"upvote",
"email":"anis.cse5.bu@gmail.com"
}

for downvote
{
"type":"downvote",
"email":"anis.cse5.bu@gmail.com"
}
```



3.  https://rahat-question-answer.vercel.app/api/v1/questions (get all) GET
4.  https://rahat-question-answer.vercel.app/api/v1/questions/:qid (get by id) GET
5.  https://rahat-question-answer.vercel.app/api/v1/questions/:qid (update by id) PATCH
6.  https://rahat-question-answer.vercel.app/api/v1/questions/:qid (delete by id) DELETE

