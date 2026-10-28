

function ContactCard() {
  return (
    <div className="w-120 h-150 rounded-4xl p-20 bg-emerald-500 dark:bg-slate-900 dark:text-white">
      <from className="flex flex-col gap-y-5">
        <label className="flex justify-center items-center bg-gray-100 rounded-4xl">
          <h3 className="font-bold text-xl">Name</h3>
          <input type="text" name="" placeholder="Enter the Name" id="" className="mx-5 outline-none" />
        </label>
        <label htmlFor="" className="flex justify-center items-center  bg-gray-100 rounded-4xl">
          <h3 className="font-bold text-xl">Phone</h3>
          <input type="phone" placeholder="Enter the phone number" name="" id="" className="mx-5 outline-none" />
        </label>
      </from>
    </div>
  )
}

export default ContactCard
