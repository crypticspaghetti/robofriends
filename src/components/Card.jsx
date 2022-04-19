const Card = ({ name, username, email }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 bw2 shadow-5 grow">
      <img
        src={`https://robohash.org/${username}?200x200`}
        alt={`${name} Profile pic`}
      />
      <div>
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
