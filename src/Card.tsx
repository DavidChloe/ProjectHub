import './index.css';
import { useState } from 'react';
import { Heart, MessageCircle , Download, Bookmark } from 'lucide-react';


export function Card() {
    const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  
  return (
    <div className="card">
        <img className='picture_profil'
            src="https://i.imgur.com/MK3eW3As.jpg"
        />
        <h1 className='name_profil'>
            Profil name
        </h1>
        <h5 className='post'>
            Lorem ipsum dolor sit amet. Est voluptas sunt aut deleniti minus vel ratione soluta. Et quisquam voluptatibus eum nostrum placeat aut consequatur ipsa et dolor consequatur non voluptatem quisquam! 
        </h5>
        <button onClick={handleClick}>
            <Heart /> {count}     
        </button>
        <button> 
            <MessageCircle />
        </button>
        <button>
            <Download />
        </button>
        <button>
            <Bookmark />
            </button>
    </div>
  );
}
