import Card from "./Card";

const CardList = ({ listItems }) =>
  listItems.map(({ id, name, username, email }) => (
    <Card name={name} username={username} email={email} key={id} />
  ));

export default CardList;
