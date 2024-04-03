export default function Layout({ children }) {
    return (
      <>
        <header>
          <h1>RFID Book Info</h1>
        </header>
        {children}
        <footer>
          <p>&copy; 2024 RFID Book Info. All rights reserved.</p>
        </footer>
      </>
    );
  }