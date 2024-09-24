import React from "react";

const Booking = () => {
    return (
        <section className="flex flex-col  min-h-screen w-full">
            <h1>Book Your Appointment</h1>
            <section>
                <div>
                    <div>
                        <p>Select Department</p>
                        <select name="" id="">
                            <option value="">MCA</option>
                        </select>
                    </div>
                    <div>
                        <p>Select Staff</p>
                        <select name="" id="">
                            <option value="">Abdur Raheem</option>
                        </select>
                    </div>
                    <div>
                        <p>Meeting Date</p>
                        <input type="date" />
                    </div>
                    <div>
                        <p>Schedule Time</p>
                        <input type="time" />
                    </div>
                </div>
                <div>
                    <img src="/img13.jpg" alt="" />
                </div>
            </section>
            <div>
                <p>Objective of the meet</p>
                <textarea name="purpose" id="" cols="30" rows="10" placeholder="Objective for your meet" />
            </div>
            <div>
                <button>cancel</button>
                <button>Schedule now</button>
            </div>
        </section>
    );
};

export default Booking;
