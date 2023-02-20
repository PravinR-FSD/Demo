import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Welcome name="Athulya" pic="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"/>
      <Welcome name="Lokesh" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQ-YHX2i3RvTDDmpfnde4qyb2P8up7Wi3Ww&usqp=CAU"/>
      <Welcome name="Leo" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQINTURTy1WjUtbYHX9lMnFwr8HmxIScnEbzA&usqp=CAU"/>
  
    </div>
  );
}
function Welcome({name, pic}){
  return(
    <div>
      <img className= "User-pic"
        src={pic}  
        alt={name} />
       <h1>
         Hello <span className = "name">{name}</span>🤩
      </h1>
    </div>
  )
};
