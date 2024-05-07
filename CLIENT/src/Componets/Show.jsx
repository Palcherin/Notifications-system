import React, { useState, useEffect } from 'react';
import { db } from '../config/firebase';
import { getDocs, addDoc, collection } from 'firebase/firestore';

export const Show = () => {
  const [showForm, setShowForm] = useState(false);
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState([]);

  const textCollectionRef = collection(db, "notice-board");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(textCollectionRef);
        let fetchedPosts = [];
        querySnapshot.forEach((doc) => {
          fetchedPosts.push({ ...doc.data(), id: doc.id });
        });
        setPosts(fetchedPosts); // Set the posts state
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to ensure useEffect runs only once on component mount

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      await addDoc(collection(db, "notice-board"), { post });
      setPost(""); // Clear input field after posting
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const toggleForm = () => {
    setShowForm((prevState) => !prevState);
  };

  return (
    <div className=''>
      <h1 className='text-green-600 font-bold'>Our Notice Board</h1>
      <section>
        <button
          className='bg-emerald-500 p-1 w-fit text-2xl transition-colors duration-200 ease-in-out hover:bg-emerald-600 animate-bounce'
          onClick={toggleForm}
        >
          +add post
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            showForm ? 'max-h-screen p-4' : 'max-h-0 p-0'
          }`}
        >
          <form className='bg-white'>
            <label className='text-xl text-green-600'>Add a Post to our online Notice Board</label>
            <textarea
              className='w-[80%] border-1 min-h-[200px] shadow bg-slate-50 p-1 '
              placeholder='Add to notice board'
              value={post}
              onChange={(e) => setPost(e.target.value)}
            /><br/>
            <button className='text-2xl w-[40%] bg-emerald-500 rounded' onClick={submitHandler}>
              Send Post
            </button>
          </form>
        </div>
      </section>
      <section >
        {/* Display fetched posts */}
        {posts.map((post) => (
          <div key={post.id} className='bg-slate-50 border shadow-sm w-[70%] m-5 p-2 rounded  border-emerald-500'>
            <p className='font-mono'>{post.post}</p>
            <p>Sent at: {post.timestamp && new Date(post.timestamp.toDate()).toLocaleString()}</p>
          </div>
        ))}
      </section>
    </div>
  );
};
