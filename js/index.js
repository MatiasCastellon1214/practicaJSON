const jsonData = `
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
`;

//Recorrer el JSON e insertar en el listado del html los nombres de los miembros
function recorrerMiembros() {
    //escribe la lógica
  const obj = JSON.parse(jsonData);
  console.log(obj.squadName)
  let ul = document.querySelector("#miembros");
  obj.members.forEach(function(member){
    ul.innerHTML += `<br><li>Nombre: ${member.name}</li><br>`;
    ul.innerHTML += `<li>Edad: ${member.age}</li><br>`;
    ul.innerHTML += `<li>Identidad Secreta: ${member.secretIdentity}</li><br>`;
    ul.innerHTML += `<li>Poderes: ${member.powers}</li><br><hr>`;
    console.log(ul.innerHTML)
  })
  
  
  
};
recorrerMiembros();