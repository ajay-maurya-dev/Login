

function Card() {
  return ( 
    <div className="flex justify-center items-center hover:scale-95">
        <div className="bg-gray-200 w-100 h-150 rounded-4xl flex flex-col py-10">
        <div className="w-50 h-50 bg-amber-300 rounded-full relative overflow-hidden self-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQVjoVdT3yF14zphOTLEHqpGx514xZwOwOpF6Gp9HhDg&s=10" alt="" srcSet=""/>
        </div>
        <div className="self-center pt-10">
          <h1>Kriti</h1>
          <p>Rate:4.5</p>
        </div>
        </div>
    </div>
  )
}

export default Card
