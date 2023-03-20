import './style/CommentCard.scss';

const CommentCard = (cardDetails) => {

    console.log(cardDetails);
    let detail = cardDetails.cardDetails;
    // console.log(detail);
    return (
        <div className='card-container'>
            {detail.map((comment) => {
                return (
                    <div className="comment-card" key={comment.id}>
                       <h2 className="comment-name">{comment.name}</h2>
                       <h4 className="comment-email">{comment.email}</h4>
                       <p className="comment-body">{comment.body}</p>
                    </div>
                 );
            })}
        </div>
    )
}

export default CommentCard