

function ContactCard() {
  return (
    <div className="w-120 h-150 bg-white rounded-4xl p-20">
      <from className="flex fle">
        <label className="flex justify-center items-center">
          <h3 className="font-bold text-xl">Name</h3>
          <input type="text" name="" placeholder="Enter the Name" id="" className="mx-5 outline-none" />
        </label>
        <label htmlFor="" className="flex justify-center items-center">
          <h3 className="font-bold text-xl">Phone</h3>
          <input type="phone" placeholder="Enter the phone number" name="" id="" className="mx-5 outline-none" />
        </label>
      </from>
    </div>
  )
}

export default ContactCard
