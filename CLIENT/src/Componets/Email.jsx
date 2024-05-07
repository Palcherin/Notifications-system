import React, { useState, useEffect, useRef } from 'react';
import { db } from '../config/firebase';
import { getDocs,addDoc, collection } from 'firebase/firestore';
import { Show } from './Show';
import emailjs from '@emailjs/browser';

const textCollectionRef = collection(db, "stundents-boarded");

const Emailnot = () => {
  const form = useRef();
  const [posts, setPosts] = useState([]); // Add the useState hook for posts
  const [post, setPost] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7844seo', 'template_2h40yty', form.current, {
        publicKey: 'naf4IYcodPZmMvhqi',
      })
      .then(
        () => {
          console.log("message sent"); // Fix the typo in the console.log statement
          console.log(form);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

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
  }, []);
  const handleReact = async (postId, reaction) => {
    try {
      // Implement your logic to record the reaction in the database
      console.log('Reacted to post:', postId, 'with reaction:', reaction);
    } catch (error) {
      console.error('Error reacting to post: ', error);
    }
  };

  return (
    <>
      <div className='flex justify-start'>
      
        <div className=' h-fit items-center text-center p-[5%]  top-0 ml-[10%] mt-[3%] basis-[50%] w-[50vw]'>
          <form ref={form} onSubmit={sendEmail} className='w-[100%] shadow-2xl bg-white' >
            <input type="text" name="user_name" placeholder='Name' className='p-3 w-[70%] border  m-3 bg-slate-50' /><br/>
            <input type="email" placeholder='User-Email' name="user_email" className='p-3 w-[70%] border  m-3 bg-slate-50'/><br/>
            <textarea name="message" placeholder='Send Mesage' className='p-3 w-[70%] border  m-3 bg-slate-50 min-h-[200px]'/><br/>
            <input type="submit" value="Notify"  className='bg-pink-700 rounded-full hover:bg-pink-500 px-3 w-[30%] py-1  font-bold'/>
          </form>
        </div>
        <div className='basis-[50%] shadow-2xl pt-[8%] bg-white'>
              <Show/>
            </div>
      </div>
      <section className='m-7' >
        <h1 className='text-emerald-600 font-bold m-5'>Borderd students</h1>
           <table>
           <thead className="text-xs text- titlecase  ">
                        <tr className='border'>
                            <th scope="col" className="px-6 py-3">Student's Name</th>
                            <th scope="col" className="px-6 py-3 ">Staff incharge</th>
                            <th scope="col" className="px-6 py-3 ">Bus No</th>
                            <th scope="col" className="px-6 py-3 border ">Stream</th>
                            <th scope="col" className="px-6 py-3 ">Contact Info</th>
                            <th scope="col" className="px-6 py-3 "></th>
                            <th scope="col" className="px-6 py-3 border">Action</th>
                        </tr>
                    </thead> 
                    <tbody>
                    {posts.map((post) => (
                    <tr key={post.id} className='border h-[50px] text-top pt-0'>
                                <td className='border p-1 text-start text-slate-800  '>{post.Name}</td>
                                <td className='border p-1 text-start text-slate-800  '>{post.Staff}</td>
                                <td className='border p-1 text-start text-slate-800 '>{post.BusNo}</td>
                                <td className='border p-1 text-start text-slate-800 '>{post.Stream}</td>
                                <td className='border p-1 text-start text-slate-800 '>{post.Email}</td>
                                <td className='border p-1 text-start text-slate-800 '>{post.Phone}</td>
                                <td className='border p-1 text-center text-slate-900'>
                                  
                                   </td>
                               
                            </tr>
                          ))}
                    </tbody>
                  
           </table>
       
      </section>
       
    </>
  );
};

export default Emailnot;