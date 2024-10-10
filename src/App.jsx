import './App.css'
import Header from './Components/Header'
import Landing from './Components/Landing'
import Products from './Components/Products'
import Services from './Components/Services'
import BlogPosts from './Components/BlogPosts'
import Caretip from './Components/Caretip'
import Footer from './Components/Footer'
import SliderProducts from './Components/SliderProducts'


function App() {

  return (
    <>
      <Header />
      <Landing />
      <SliderProducts/>
      <Products />
      <BlogPosts />
      <Caretip />
      <Services />
      <Footer />
    </>
  )
}

export default App
