import './style/PostCard.scss';

const PostCard = (cardDetails) => {
    // console.log(cardDetails);
    var detail = cardDetails.cardDetails;
    // console.log(detail);
    return (
        <div className='card-container' >
            {detail.map((post) => {
                return (
                    <div className="post-card" key={post.id}>
                       <h2 className="post-title">{post.title}</h2>
                       <p className="post-body">{post.body}</p>
                    </div>
                 );
            })}
        </div>
    )
}

export default PostCard