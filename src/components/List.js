export const List = ({people}) => {

  return (
    <div className="flex flex-col">
      {
        people.map((person) => (
          <div className="flex" key={person.name}>
            <div className="rounded-full flex p-1 items-center">
              <img src={person.image} className="rounded-full w-10 h-10 m-2" alt="id"/>
              <div className="flex flex-col">
                <h1 className="">{person.name}</h1>
                <p className="text-sm text-gray-500">{person.age} Years</p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}