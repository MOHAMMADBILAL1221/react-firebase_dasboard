import React from 'react'
import  { useState } from 'react';
// import { db } from "../Firebase/Firebaseconfig";
import { db } from '../config/firebase/firebaseconnection';
// import { addDoc, collection } from 'firebase/firestore';
import { addDoc ,collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';



function Post() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    number: '',
    link: ''
});

const handlePost = async (event) => {
  event.preventDefault();
  console.log(formData);
  try {
      const docRef = await addDoc(collection(db, "Products Data"), formData);
      navigate("/dashboard/postshow");
      console.log("Document ID: ", docRef.id);
  } catch (err) {
      alert("Fill out the form first, then post it.");
      console.log(err);
  }
};

const navigate = useNavigate();
  return (
    
    <div className="max-w-lg mx-auto bg-gray-100 border border-black rounded shadow-green-lg p-8 mt-12 space-y-6">
    <h2 className="text-3xl font-bold text-green-800 text-center mb-6">Products Form</h2>
    <form className="space-y-5" onSubmit={handlePost}>
        <div>
            <label className="block text-green-800 font-medium mb-2">Product Name</label>
            <input
                type="text"
                name="productName"
                placeholder="Product Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                required
            />
        </div>

        <div>
            <label className="block text-green-800 font-medium mb-2">Product Description</label>
            <textarea
                name="productdescription"
                placeholder="Product Description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                rows="3"
                required
            />
        </div>

        <div>
            <label className="block text-green-800 font-medium mb-2">Product Number</label>
            <input
                type="tel"
                name="number"
                placeholder="Number"
                value={formData.number}
                onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                required
            />
        </div>

        <div>
            <label className="block text-green-800 font-medium mb-2">Image Link</label>
            <input
                type="url"
                name="link"
                placeholder="Image Link"
                value={formData.link}
                onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
        </div>

        <button
            type="submit"
            className="w-full py-2 bg-green-800 text-white rounded-xl font-semibold hover:bg-green-900 transition duration-200"
        >
            Post Data
        </button>
    </form>
</div>

  )
}

export default Post
