

function ContactCard() {
  return (
    <div className="w-120 h-150 bg-white rounded-4xl p-20">
      <from className="">
        <label className="flex justify-center items-center">
          <h3 className="font-bold text-xl">Name</h3>
          <input type="text" name="" placeholder="Enter the Name" id="" className="mx-5 outline-none" />
        </label>
        <label htmlFor="" className="flex justify-center items-center">
          <h3>Phone</h3>
          <input type="phone" name="" id="" className="" />
        </label>
      </from>
    </div>
  )
}

export default ContactCard
