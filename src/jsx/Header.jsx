const content = ["Me", "Buy", "Contacts"];

const Header = () => 
    <header>
        <ul>{content.map((text, index) => <a href={text.toLocaleLowerCase()}>{text}</a>)}</ul>
    </header>

export default Header;