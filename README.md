### /user/login
POST credentials for authentication

### /user/signup
POST create new user

### /user/logout
DELETE user session

### /user/questions
GET my questions

Require Authentication: TRUE

Request Body:
N/A

Response Body
Status Code: 200

Require Authentication: TRUE

```
{
    "Questions" :
    [
        {
            "id": 1,
            "userId": 1,
            "title": "Sample Title",
            "body": "Sample Body",
            "created_on":  "2022-12-12", 
            "last_update_on": "2022-12-12"
        },
        {
            "id": 2,
            "userId": 1,
            "title": "Sample Title",
            "body": "Sample Body",
            "created_on":  "2022-12-12", 
            "last_update_on": "2022-12-12"
        }
    ]
}  
```

### /user/answers
GET my answers

Require Authentication: TRUE

Request Body:
N/A

Response Body

Status Code: 200

Require Authentication: TRUE
```
{
    "Answers" :
    [
        {
            "id": 1,
            "userId": 1,
            "questionId":1,
            "body": "Sample Body",
            "created_on":  "2022-12-12", 
            "last_update_on": "2022-12-12"
        },
        {
            "id": 2,
            "userId": 1,
            "questionId":1,
            "body": "Sample Body",
            "created_on":  "2022-12-12", 
            "last_update_on": "2022-12-12"
        }
    ]
}
```                                         

### /questions
GET all questions

Require Authentication: TRUE

Request Body:
N/A

Response Body

Status Code: 200

```
{
    "Questions" :
    [
        {
            "id": 1,
            "userId": 1,
            "title": "Sample Title",
            "body": "Sample Body",
            "created_on":  "2022-12-12", 
            "last_update_on": "2022-12-12"
        },
        {
            "id": 2,
            "userId": 2,
            "title": "Sample Title",
            "body": "Sample Body",
            "created_on":  "2022-12-12", 
            "last_update_on": "2022-12-12"
        }
    ]
}
```

### /questions
POST a new question

Require Authentication: TRUE

Request Body
```
{
    "title": "Sample Title",
    "body": "Sample Body"
}
```

Response Body

Status Code: 201

```
{
    "id": 2,
    "userId": 2,
    "title": "Sample Title",
    "body": "Sample Body",
    "created_on":  "2022-12-12", 
    "last_update_on": "2022-12-12"
}
```

 ### /questions/:questionId
GET a specific question and it's associated answers, cumulative votes, and comments

Require Authentication: TRUE

Response Body

Status Code: 200

```
{
    "Question" :
    {
        "id": 1,
        "userId": 1,
        "title": "Sample Title",
        "body": "Sample Body",
        "created_on":  "2022-12-12", 
        "last_update_on": "2022-12-12",
        "Answers" :
        [
            {
                "id": 1,
                "userId": 1,
                "questionId":1,
                "body": "Sample Body",
                "created_on":  "2022-12-12", 
                "last_update_on": "2022-12-12",
                "Comments": 
                [
                    {
                        "id": 1,
                        "userId": 1,
                        "answerId": 1,
                        "body": "Sample Body"
                    },
                    {
                        "id": 2,
                        "userId": "1",
                        "answerId": "1",
                        "body": "Sample Body"
                    }
                ],
                "Votes": 
                [
                    {

                        "id": 1,
                        "userId": 1,
                        "answerId": 1,
                        "voteDirection": "Up"
                    },
                    {

                        "id": 2,
                        "userId": 2,
                        "answerId": 1,
                        "voteDirection": "Down"
                    }
                ]
            }
        ]
    }
}  
```    

### /questions/:questionId
PUT to update a specific question

Require Authentication: TRUE

Request Body

```
{
    "title": "Sample Title",
    "body": "Sample Body"
}
```

Response Body

Status Code: 200

Require Authentication: TRUE

```
{
    "id": 2,
    "userId": 2,
    "title": "Sample Title",
    "body": "Sample Body",
    "created_on":  "2022-12-12", 
    "last_update_on": "2022-12-12"
}
```

### /questions/:questionId
DELETE a specific question

Require Authentication: TRUE

Request Body:
N/A

Response Body

Status Code: 200

```
{
    "message": "Successfully deleted",
    "Status Code": 200
    
}
```

### /question/:questionId/answers
POST a new answer

Require Authentication: TRUE

Request Body
```
{
    "body": "Sample Body"
}
```

Response Body

Status Code: 201

```
{
    "id": 2,
    "userId": 2,
    "questionId": 1,
    "body": "Sample Body",
    "created_on":  "2022-12-12", 
    "last_update_on": "2022-12-12"
}
```

### /answers/:answerId
PUT to update a specific answer

Require Authentication: TRUE

Request Body

```
{
    "body": "Sample Body"
}
```

Response Body

Status Code: 200

```
{
    "id": 2,
    "userId": 2,
    "questionId": 1,
    "body": "Sample Body",
    "created_on":  "2022-12-12", 
    "last_update_on": "2022-12-12"
}
```

### /answers/:answerId

DELETE a specific answer

Require Authentication: TRUE

Request Body
N/A

Response Body

Status Code: 200

```
{
    "message": "Delete Successfully",
    "Status Code": 200
}
```

### /answers/:answerId/comments

POST a new comment

Require Authentication: TRUE

Request Body
```
{
    "body": "Sample Body"
}
```

Response Body

Status Code: 200

```
{
    "id": 2,
    "userId": 2,
    "answerId": 1,
    "body": "Sample Body",
    "created_on":  "2022-12-12", 
    "last_update_on": "2022-12-12"
}
```

### /comments/:commentId

PUT to update a specific comment

Require Authentication: TRUE

Request Body
```
{
    "body": "Sample Body"
}

```

Response Body

Status Code: 200
```
{
    "id": 2,
    "userId": 2,
    "answerId": 1,
    "body": "Sample Body",
    "created_on":  "2022-12-12", 
    "last_update_on": "2022-12-12"
}
```

### /comments/:commentId

DELETE a specific comment

Require Authentication: TRUE

Request Body
N/A

Response Body
Status Code: 200

```
{
    "message": "Delete Successfully",
    "Status Code": 200
}
```

### /answers/:answerId/votes

POST a vote direction for a specific user on a specific answer

Require Authentication: TRUE

Request Body

```
{
    "voteDirection": 'Up'
}
```

Response Body

Status Code: 200

```
{
    "Votes": 
    [
        {

            "id": 1,
            "userId": 1,
            "answerId": 1,
            "voteDirection": "Up"
        },
        {

            "id": 2,
            "userId": 2,
            "answerId": 1,
            "voteDirection": "Down"
        }
    ]
}
```