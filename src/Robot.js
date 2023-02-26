import { useEffect, useState } from "react";

const robots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz"
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv"
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net"
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org"
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca"
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info"
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz"
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me"
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io"
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz"
  }
];

const Card = ({ id, name, username, email }) => (
  <div>
    <img alt="robot" src={`https://robohash.org/${id}?200x200`} />
    <div>
      <h2>{name}</h2>
      <p>
        {username} | {email}
      </p>
    </div>
  </div>
);

export default function Robot() {

  const [myR, setMyR] = useState([...robots]);
  const [val, setVal] = useState("")

  const handleChange = (e) => {
    setVal(e.target.value);
  }

  useEffect(() => {
    const newR = robots.filter(row => 
      row.name.toLowerCase().includes(val.toLowerCase()) ||
      row.email.toLowerCase().includes(val.toLowerCase()) ||
      row.username.toLowerCase().includes(val.toLowerCase())
    )
    setMyR(newR);
  }, [val])

  return (
    <div className="robot">
      <input
        type="search"
        placeholder="Search Robots"
        value={val}
        onChange={handleChange}
      />
      {myR.map((row, index) => {
        console.log(row);
        return (
          <Card {...row} key={index}/>
        )
      })}
    </div>
  );
}



