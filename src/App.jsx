import Header from "./components/Header";
import StudentProfile from "./components/StudentProfile";
import Footer from "./components/Footer";
import "./App.css";

function App() {

    const student1 = {
        name: "Anu",
        department: "CSE",
        year: "3rd Year"
    };

    const student2 = {
        name: "Bala",
        department: "Computer Science",
        year: "3rd Year"
    };

    return (
        <div>
            <Header />

            <div className="container">

                <h2>Student 1</h2>
                <StudentProfile
                    name={student1.name}
                    department={student1.department}
                    year={student1.year}
                />

                <h2>Student 2</h2>
                <StudentProfile
                    name={student2.name}
                    department={student2.department}
                    year={student2.year}
                />

            </div>

            <Footer />
        </div>
    );
}

export default App;