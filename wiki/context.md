const ThemeContext = React.createContext('light');

🌙☀️

const Themes = {
  light: {
    textColor: "#000",
    backgroundColor: "#fff"
  },
  dark: {
    textColor: "#fff",
    backgroundColor: "#333"
  }
}


light: {
  foreground: '#000000',
  background: '#eeeeee',
},
dark: {
  foreground: '#ffffff',
  background: '#222222',
},

ThemedButton



const UserContext = React.createContext(null);

function useUser() {
  const context = React.useContext(UserContext)
  if (!context) {
    throw new Error(`useUser must be used within a UserContext`)
  }
  return context
}

function UserProvider(props) {
  const [user, setUser] = React.useState(0)
  const value = React.useMemo(() => [user, setUser], [user])
  return <UserContext.Provider value={value} {...props} />
}

export {UserProvider, useUser}