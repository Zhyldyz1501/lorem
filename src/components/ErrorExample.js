import React, { useState } from 'react'
import { data } from './Data' 


const ErrorExample = () => {
    const [people, setPeople] = useState(data)

    const removeItem = (id) => {
        let filtered = people.filter((el) => el.id !== id)
        console.log(filtered)
        setPeople(filtered)
    }

    return (
      <>
        {people.map((person) => {
          const { id, name, image } = person;
          return (
            <div key={id} style={{ display: "flex", justifyContent: "center", flexDirection: 'column' }}>
              <h2 style={{ margin: "0 auto", textAlign: "center" }}>{name}</h2>
                  <img style={{ width: "100px", margin: "0 auto" }} src={image} />
                <button type='button' onClick={()=>removeItem(id)}>remove</button>
            </div>
          );
        })}
            <button type='button' onClick={()=> setPeople([])}>
                Delete
            </button>
      </>
    );

}


    // const [text, setText] = useState('random title')
    
    // const handleClick = () => {
    //     if (text === 'random title') {
    //        setText("hello world");
    //     } else  {
    //         setText("random title");
    //     }
    // }
    // return (
    //   <>
    //     <h1>{text}</h1>
    //     <buttton onClick={handleClick}>Change</buttton>
    //   </>
    // );

// function ErrorExample() {
//     let title = 'random title'
//     const handleClick = () => {
//         title = 'hello click'
//         console.log(title)
//     }
//     return <React.Fragment>
//         <h2>{title}</h2>
//         <button type='button' className='btn' onClick={handleClick}> change title
//         </button>
//   </React.Fragment>


export default ErrorExample