import Header from '../components/Header';
import './style.css'
function Home(){
    return(
        <div >
                    <Header />
                    <div className="body">

      <div className="logo container">
       <img className="img" src="https://avatars.githubusercontent.com/u/64676165?v=4" alt="" />
       <h1>Abdul Samad</h1>
       </div>
       <h4 className="mt-5 text-center">Web and Mobile App Developer</h4>
                    </div>
        </div>

    )
}
export default Home;