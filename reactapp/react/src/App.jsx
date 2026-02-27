import './App.css';
function App(props) {
    
    return (
        <div className="card">
         <img src={props.image} alt="not found" />
            <h1>{props.name}</h1>
            <h2>{props.price}</h2>
            
        </div>
    )
}
 
export default App;
