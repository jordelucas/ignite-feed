import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import './globals.css';

import styles from './App.module.css';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Jordevá Lucas"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga excepturi totam voluptate enim necessitatibus et voluptates quasi eveniet quas dolor, dolorem numquam explicabo asperiores cupiditate praesentium fugit temporibus tempora voluptatem?"
          />
          <Post 
            author="ketyllem Costa"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga excepturi totam voluptate enim necessitatibus et voluptates quasi eveniet quas dolor, dolorem numquam explicabo asperiores cupiditate praesentium fugit temporibus tempora voluptatem?"
          />
        </main>
      </div>
    </div>
  )
}

export default App
