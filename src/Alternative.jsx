import { useState } from 'react';
import data from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = data[index];

  //Funciones
  const nextPersona = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % data.length;
      // 1%4=1
      //2%4=2
      //3+1=4%4=0
      //0+1=1%4=1
      return newIndex;
    });
  };

  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex - 1 + data.length) % data.length;
      //0-1=-1 -1+4=3 3%4=3 ->->3<=====
      return newIndex;
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * data.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex((oldValue) => {
      return randomNumber % data.length;
    });
  };
  //Usando función

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPersona}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          Surprise Me!
        </button>
      </article>
    </main>
  );
};
export default App;
