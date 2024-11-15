import React from 'react'
import { addDoc,collection } from 'firebase/firestore'
import  { useState } from 'react';
// import { db } from '../config/firebase/firebaseconnection';
import { db } from '../config/firebase/firebaseconnection';
import { useNavigate } from 'react-router-dom';


function Todoform() {
 
    const [commentData, setCommentData] = useState({ name: '', comment: '' });
    const navigate = useNavigate();

    const handleComment = async (event) => {
        event.preventDefault();
        console.log(commentData);
        if (!commentData.name || !commentData.comment) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        try {
            const docRef = await addDoc(collection(db, "Todo Data"), {
                name: commentData.name,
                comment: commentData.comment,
            });
            console.log("Document ID: ", docRef.id);
            navigate("/todoshow");
        } catch (err) {
            console.log("Error adding document: ", err);
        }
    };
    return (
   
        <div className="max-w-md mx-auto bg-gray-200  border-2 border-black rounded shadow-2xl shadow-green-400 overflow-hidden md:max-w-2xl mt-28 p-8 space-y-6">
        <h2 className="text-2xl font-bold text-green-800 mb-4">FAQ'S</h2>
        <div className="space-y-4">
            <div>
                <label className="block text-green-800 font-semibold mb-2">Question Subject</label>
                <input
                    type="text"
                    placeholder="Your subject"
                    value={commentData.name}
                    onChange={(e) => setCommentData({ ...commentData, name: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-900"
                />
            </div>

            <div>
                <label className="block text-green-800 font-semibold mb-2">Your Question</label>
                <textarea
                    placeholder="Your Question"
                    value={commentData.comment}
                    onChange={(e) => setCommentData({ ...commentData, comment: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-900"
                    rows="4"
                />
            </div>

            <button
                className="py-2 w-full bg-green-800 text-white rounded-lg font-semibold hover:bg-green-900"
                onClick={handleComment}
            >
                Post Question
            </button>
        </div>
    </div>
        
  )
}

export default Todoform;
