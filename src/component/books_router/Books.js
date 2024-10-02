import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams, useOutletContext } from "react-router-dom";

const Books = () => {
    return (
        <Router>
            <div>
                <h1>Basic Example</h1>

                <p>
                This example demonstrates some of the core features of React Router
                including nested <code>&lt;Route&gt;</code>s,{" "}
                <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a
                "*" route (aka "splat route") to render a "not found" page when someone
                visits an unrecognized URL.
                </p>

                {/* Динамическое формирование путей вариант 1 */}
                {/* <Routes>
                    <Route path='/' element={<Layout/>}/>
                    <Route path='/:about' element={<About/>}/>
                </Routes> */}

                {/* Динамическое формирование путей вариант 2 */}
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="*" element={<NoMatch />} />
                    </Route>
                </Routes>

                {/* Динамическое формирование путей вариант 3 */}
                {/* <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="*" element={<NoMatch />} />
                    </Route> */}
                    {/* не указываем path в родительском Route => оба Route внутри будут вести на родительский компонент*/}
                    {/* <Route element={<OtherLayout />}> 
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/about" element={<About />} />
                    </Route>
                </Routes> */}

                {/* Множественные маршруты. Отдельные Routes*/}
                
                    {/* <Layout/>
                    <aside style={{background: '#f0f0f0', padding: '10px', width: '200px', height: '500px', float: 'right'}}> */}
                        {/*location='/contact' - атрибут в Routes - жестко предопределяем URL-адрес нашей страницы */}
                        {/* <Routes >  
                            <Route path="contact" element={<Contact />} />
                        </Routes>
                    </aside> */}
                    {/* <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="contact" element={<Contact />} />
                    </Routes> */}

                 {/* Множественные маршруты. Вложенные Routes*/}

                 {/* <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/books/" element={<BookRoutes />} />
                    <Route path="*" element={<NoMatch />} />
                 </Routes> */}
                    
                


            </div>
        </Router>
    );
}

function Layout() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/nothing-here">Nothing Here</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <hr />
        <Outlet context={{home: "I'm Home", about: "I'm About"}}/>
      </div>
    );
}
  
function Home() {
    // const context = useOutletContext();
    return (
      <div>
        <h2>Home</h2>
        {/* <h2>{context.home}</h2> */}
        <Link to="/books">About</Link>
      </div>
    );
}
  
function About() {
    // const id = useParams();
    // console.log(id);
    //const context = useOutletContext();
    return (
      <div>
        <h2>{`About`}</h2>
        {/* <h2>{context.about}</h2> */}
      </div>
    );
}
  
function Dashboard() {
    return (
      <div>
        <h2>Dashboard</h2>
      </div>
    );
}
  
function NoMatch() {
    return (
      <div>
        <h2>Nothing to see here!</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    );
}

function OtherLayout() {
    return (
        <div>
            'OTHER Layout'
            <Link className="m-2" to="..">Back</Link>
        </div>
    )
}

function Contact() {
    return (
        <div>
            <h2>Contact</h2>
        </div>
    )
}

function BooksLayout() {
    return (
        <>
            <AboutBook/>
            <nav>
                <li>
                <Link to="contact">Contact Books</Link>
                </li>
                <li>
                <Link to="/books/home">Home Book</Link>
                </li>
                <li>
                <Link to="..">Back</Link>
                </li>
            </nav>
        </>
        
    )
}

function AboutBook() {
    return (
        <div>
            <h2>About Book</h2>
        </div>
    )
}

function Book() {
    return (
        <div>
            Book
        </div>
    )
}

function BookRoutes() {
    return (
        <Routes>
            <Route element={<BooksLayout />}>
                <Route path="/books/" element={<AboutBook />} />
                <Route path="/books/:contact" element={<Contact />} />
                <Route path="/books/:home" element={<Book />} />
            <Route path="*" element={<NoMatch />} />
            </Route>
        </Routes>
        
    )
}

export default Books;