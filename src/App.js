import logo from './logo.svg';
import './App.css';
import StudentMarkList from './Component/StudentMarkList';




function App(props) {
  return (
    <div className="App">
    
   <StudentMarkList StudentName="Sree"  EngMarks="91"  SciMarks="91"  MathMarks="91"  TelMarks="89"  SocMarks="91"/>
   <StudentMarkList StudentName="Suji"  EngMarks="85"  SciMarks="81"  MathMarks="78"  TelMarks="83"  SocMarks="75"/>
   <StudentMarkList StudentName="Abhi"  EngMarks="86"  SciMarks="74"  MathMarks="98"  TelMarks="87"  SocMarks="82"/>
   <StudentMarkList StudentName="Raji"  EngMarks="75"  SciMarks="86"  MathMarks="76"  TelMarks="90"  SocMarks="78"/>
   <StudentMarkList StudentName="Akhil"  EngMarks="64"  SciMarks="90"  MathMarks="86"  TelMarks="34"  SocMarks="67"/>
   

    </div>
  );
}

export default App;
