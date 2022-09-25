import './App.css';
import bgImage from "./assets/homepage-background-small.jpg"

function App() {
  return (
    <div className="App">
      	<header>
          <h1>Expertise centrum Woo</h1>
        </header>
        <main style={{ backgroundImage: `url(${bgImage})` }}>
           
            <div className="article">
              <h1>Expertisecentrum Wet openbaarheid van bestuur</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in metus ut ante bibendum rutrum nec a urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer congue dui eget neque egestas, sed vestibulum tellus congue. Nullam sit amet pellentesque risus, eget eleifend turpis. Pellentesque viverra libero ut feugiat congue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras sapien leo, viverra nec nisi porttitor, rhoncus commodo purus. </p>
              <ul>
                <li><h2>Test header</h2><p>Donec gravida magna massa, quis rhoncus risus molestie non. Quisque eget mauris vehicula orci egestas ultricies sit amet in ex. Suspendisse quis nisl viverra, egestas augue a, malesuada tellus.</p> </li>
                <li><h2>Test header</h2><p>Ut feugiat consectetur arcu, id suscipit mi commodo id. Nullam consequat mauris nulla, a facilisis ipsum posuere ac. Aenean nec lacinia diam, vel venenatis erat. Praesent commodo enim in facilisis sollicitudin. Vestibulum ac scelerisque urna.</p></li>
                <li><h2>Test header</h2><p>Aliquam sit amet mi ipsum. Nulla tortor tortor, elementum tincidunt bibendum vulputate, consequat et justo. Ut pulvinar sapien at semper gravida. Cras sit amet augue nisl. Vivamus volutpat, ipsum sit amet mattis semper, arcu ex lobortis elit, sit amet elementum augue tortor sed libero. Curabitur maximus enim at nibh pharetra, in laoreet tortor tempor.</p></li>
              </ul>
            </div>
        </main>
        <footer>
          <h3>Wil je op de hoogte blijven van ontwikkelingen?</h3>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfsm-a-YuaEI0tXtvNTTUzyRLjXQBJwHsx5as2WbqyP8Fj3Ig/viewform?embedded=true" width="640" height="467" frameborder="0" marginheight="0" marginwidth="0">Laden…</iframe>
        </footer>
    </div>
  );
}

export default App;
