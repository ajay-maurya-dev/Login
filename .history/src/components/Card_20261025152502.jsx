function Card() {
  return (
    <div className="flex justify-center bg-yellow-300 rounded-4xl items-center hover:scale-95 dark:bg-slate-600 dark:text-white">
      <div className="w-100 h-150 rounded-4xl flex flex-col py-10">
        <div className="w-50 h-50 bg-amber-300 rounded-full relative overflow-hidden self-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQVjoVdT3yF14zphOTLEHqpGx514xZwOwOpF6Gp9HhDg&s=10"
            alt=""
            srcSet=""
          />
        </div>
        <div className="flex flex-col self-center pt-10 px-10">
          <h1 className="self-items">Kriti</h1>
          <p>Rate:4.5</p>
          <p className="">
            BIO : Hello I am Kriti. I am from Ahmedabad. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Eaque laborum magni porro
            reprehenderit dolores itaque iusto quasi, laboriosam minus ea?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
