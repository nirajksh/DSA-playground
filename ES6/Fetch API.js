async function getCommentsByUserId(userId) {

    return fetch('/api/comments')
    .then(res => res.json())
    .then(comments => {
        let filteredComments = comments.filter(comment => comment.userId===userId)
        let responseArray = [];
        for (let i=0; i<filteredComments.length; i++){
            let comment = filteredComments[i];
            responseArray.push(comment.data);
        }
        return responseArray;
     

    })
}
