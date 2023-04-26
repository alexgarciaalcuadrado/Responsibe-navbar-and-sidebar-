import Cards from "../components/Cards";

const Dashboard = () => {
    return (
    <div className="App">
    <header className="App-header">
      <div style={{
        display:"flex",
        justifyContent: "center"
      }}>
        <Cards />

      </div>
      
    </header>
  </div>)
}

export default Dashboard;