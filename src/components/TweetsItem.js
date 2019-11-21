import React from 'react';

const TweetsItem = ({ users }) => (
<section>
    <h3 className="text-center">{users.name}</h3>
    <img src={users.profile_image_url} alt="" />
    <p className="text-center">{users.location}</p>
    <a className="btn btn-primary" href={users.url} target="_blank"> View More </a>
    
</section>
       
);

export default TweetsItem;


