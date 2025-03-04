const HotelBookingForm = () => {
  return (
    <div className="max-w-lg mx-auto p-6 bg-[#f4f5f8] shadow-lg rounded-lg">
      <div>
        <h4 className="uppercase text-primary font-secondPrimary">
          Rooms & Suites
        </h4>
        <h1 className="text-secondPrimary font-primary text-3xl">
          Hotel Booking Form
        </h1>
      </div>
      <form className="space-y-4">
        {/* Check-in Date */}
        <div>
          <label htmlFor="check-in" className="text-sm text-gray-500">
            Check-in
          </label>
          <input
            type="date"
            placeholder="Check-in"
            className="w-full h-14 p-3 bg-white  focus:ring focus:ring-primary focus:outline-none"
          />
        </div>

        {/* Check-out Date */}
        <div>
          <label htmlFor="check-out" className="text-sm text-gray-500">
            Check-out
          </label>
          <input
            type="date"
            placeholder="Check-out"
            className="w-full h-14 p-3 bg-white  focus:ring focus:ring-primary focus:outline-none"
          />
        </div>

        <div className="flex w-full gap-2">
          {/* Adults Dropdown */}
          <div className="w-1/2">
            <select className="w-full h-14 p-3 bg-white rounded-md focus:ring focus:ring-primary focus:outline-none">
              <option>Adults</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          {/* Children Dropdown */}
          <div className="w-1/2">
            <select className="w-full h-14 p-3 bg-white  focus:ring focus:ring-primary focus:outline-none">
              <option>Children</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary text-white p-4 hover:bg-primary-dark transition duration-300"
        >
          Check Availability
        </button>
      </form>
    </div>
  );
};

export default HotelBookingForm;
