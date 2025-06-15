import React from "react";
import Swal from 'sweetalert2';
function Feedback() {
     const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f6b0d5ef-fe62-46ef-a86e-74868633d95f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
                title: "Success!",
                text: "Message sent successfull!",
                icon: "success"
              });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded shadow-md p-8">
      <h1 className="text-2xl text-center hover:text-indigo-600 text-primary font-medium mb-3">
        OptiCare Feedback Form
      </h1>
      <form onSubmit={onSubmit} className="grid sm:grid-cols-1 md:grid-cols-2 gap-6" action="">
        <div >
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input type="text" className="w-full border rounded p-2"  name="name" placeholder="Enter Your Name" required/>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email/Phone </label>
          <input type="email" name="email" className="w-full border rounded p-2" placeholder="example@email.com/9585784725" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Date of visit</label>
          <input type="date" className="w-full border rounded p-2" name="Date of visit" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Doctor/Staff Name</label>
          <input type="text" className="w-full border rounded p-2" name="Doctor/Staff Name"  placeholder="Dr.XYZ" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Overall Experoence</label>
          <select class="w-full border rounded p-2"required name="Overall Experoence" >
            <option selected disabled >
              Select Rating
            </option>
            <option>★★★★★</option>
            <option>★★★★☆</option>
            <option>★★★☆☆</option>
            <option>★★☆☆☆</option>
            <option>★☆☆☆☆</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Doctor's Behavior</label>
          <select name="Doctor's Behavior"  class="w-full border rounded p-2" required>
            <option selected disabled >
              Select Rating
            </option>
            <option>★★★★★</option>
            <option>★★★★☆</option>
            <option>★★★☆☆</option>
            <option>★★☆☆☆</option>
            <option>★☆☆☆☆</option>
          </select>
        </div>
        <div>
          <label   className="block text-sm font-medium mb-1">Staff Support</label>
          <select name="Staff Support" class="w-full border rounded p-2" required>
            <option selected disabled>
              Select Rating
            </option>
            <option>★★★★★</option>
            <option>★★★★☆</option>
            <option>★★★☆☆</option>
            <option>★★☆☆☆</option>
            <option>★☆☆☆☆</option>
          </select>
        </div>
        <div>
          <label  className="block text-sm font-medium mb-1">Clinic Cleanliness</label>
          <select class="w-full border rounded p-2" required name="Clinic Cleanliness">
            <option selected disabled>
              Select Rating
            </option>
            <option>★★★★★</option>
            <option>★★★★☆</option>
            <option>★★★☆☆</option>
            <option>★★☆☆☆</option>
            <option>★☆☆☆☆</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Waiting Time</label>
          <select className="w-full border rounded p-2" name="Waiting Time" id="" required>
            <option value="">Very Short</option>
            <option>Very Short</option>
            <option>Acceptable</option>
            <option>Long</option>
            <option>Very Long</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Would you recommend us?</label>
          <div class="flex gap-4 mt-2">
            <label>
              <input type="radio" name="recommend" value="yes" required /> Yes
            </label>
            <label>
              <input type="radio" name="recommend" value="no" required/> No
            </label>
          </div>
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium mb-1">Additional Suggestions/Comments</label>
          <textarea
            name=""
            id=""
            placeholder="Your message here..."
            className="w-full border rounded p-3 h-28 resize-none"
          ></textarea>
        </div>
        <div className="md:col-span-2 text-center ">
            <button type="submit" className="bg-primary hover:bg-indigo-600 text-center text-white px-6 py-2 rounded-full transition 
            ">Submit Form</button>
        </div>
      </form>
      
    </div>
  );
}

export default Feedback;
