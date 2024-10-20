function navbar(props) {
  return (
    
      <header>
        <nav>
            <h1>Brillian {props.name}</h1>
            <ul>
                <li>Home</li>
                <li>About Me</li>
                <li>Contact</li>
            </ul>
        </nav>
      </header>
  );
}

export default navbar;
