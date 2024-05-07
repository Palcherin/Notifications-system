import React, {useEffect, useState } from 'react'
import { Card } from '@mui/material';
import Navbar from './Navbar/Navbar'
import Modal from './Modal';
import { FaEdit, FaRemoveFormat, FaSearch } from 'react-icons/fa';
import { Show } from './Show';
import {db} from '../config/firebase'
import { getDocs, collection, addDoc} from 'firebase/firestore';


const Commute = () => {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [stream, setStream] = useState('');
  const [plateNo, setPlateNo] = useState('');
  const [staff, setStaff] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState([]);
  

  const postCollectionRef = collection(db, "notice-board");


  const textCollectioneRef =collection(db, "stundents-boarded");



  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(postCollectionRef);
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
 
  const handleAddStudent = async(event) => {
    event.preventDefault();
    try{
    await addDoc( textCollectioneRef,
      {
        Name:name,
        Staff:staff,
        Stream:stream,
        BusNo:plateNo,
        Email:email,
        Phone:phone,
        
        
      }
      );
    }catch(err){
      console.error(err);
    }
    if (!name || !staff || !stream || !plateNo || !email || !phone) {
      alert('Please fill in all fields');
      return;
    }

    setUsers(prevUsers => [
      ...prevUsers,
      { name, staff, plateNo, stream, email, phone }
    ]);

    // Clear input fields after adding staff
    setName('');
    setStaff('');
    setStream('');
    setPlateNo('');
    setEmail('');
    setPhone('');
    setOpen(false);
  };
  
  return (
    <>
    <Navbar/>
    {/* <section>
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
            <label>Enter message</label>
            <textarea
              className='w-[80%] border-1 min-h-[200px] shadow bg-slate-50 p-1 '
              placeholder='Add to notice board'
              value={post}
              onChange={(e) => setPost(e.target.value)}
            /><br/>
            <button className='text-2xl font-bold bg-emerald-500' onClick={submitHandler}>
              Post
            </button>
          </form>
        </div> */}
      {/* </section> */}
    <div className='bg-white min-h-[100vh] w-full'>
        <div className='flex justify-between'>
            <div className='basis-[60% pt-[7%] m-3'>
                <section>
                <h1 className='text-emerald-500'>Our Commute page</h1>
                <h1 className='text-2xl font-bold'>Please confirm that your child has been picked by our school bus by filling the following form.</h1>
                <button onClick={()=>setOpen(true)}  className='bg-emerald-500 hover:bg-emerald-600 text-white p-2 rounded-full w-[30%] text-xl'>+Confirm</button>
                </section>
                <section>
                <Card className="w-full overflow-scroll p-[5%] basis-[100%]   relative">
            
            <div className='flex justify-between mb-2'>
            <h1 className='font-bold text-2xl'>Your Staffs</h1>
                <button onClick={()=>setOpen(true)} className='bg-emerald-500 hover:bg-emerald-700 font-bold text-white p-2 rounded-full'>+Student picked?</button>
            </div>
            
            <div className="relative">
                <table className="w-full text-sm text-left min-h-[50vh] rtl:text-right text-black">
                    <thead className="text-xs text- titlecase  ">
                        <tr className='border'>
                            <th scope="col" className="px-6 py-3">Student's Name</th>
                            <th scope="col" className="px-6 py-3 ">Staff incharge</th>
                            <th scope="col" className="px-6 py-3 ">Bus No</th>
                            <th scope="col" className="px-6 py-3 ">Stream</th>
                            <th scope="col" className="px-6 py-3 ">Email</th>
                            <th scope="col" className="px-6 py-3 ">Phone</th>
                            <th scope="col" className="px-6 py-3 ">Action</th>
                        </tr>
                    </thead> {users.length === 0 ? ( 
                    <p className="text-red-500 font-bold text-xl text-center "><br/></p>
                ) : (
                    <tbody className='h-[2rem]'>
                        {users.map((row, index) => (
                            <tr key={index} className='border h-[50px] text-top pt-0'>
                                <td className='border p-1 text-start text-slate-800  '>{row.name}</td>
                                <td className='border p-1 text-start text-slate-800  '>{row.staff}</td>
                                <td className='border p-1 text-start text-slate-800 '>{row.plateNo}</td>
                                <td className='border p-1 text-start text-slate-800 '>{row.stream}</td>
                                <td className='border p-1 text-start text-slate-800 '>{row.email}</td>
                                <td className='border p-1 text-start text-slate-800 '>{row.phone}</td>
                                <td className='border p-1 text-center text-slate-900'>
                                  <FaEdit/>
                                   </td>
                               
                            </tr>
                        ))}
                      
                    </tbody>
                )}
                </table>
               
               
            </div>
        </Card>
                </section>
            </div>

            <div className='basis-[50%] shadow-2xl pt-[8%] bg-white'>
            <section >
        {/* Display fetched posts */}
        <h1 className='text-green-600 font-bold text-2xl'>Welcome to our <span className='text-3xl text-emerald-500 animate-pulse'>Notice Board</span></h1>
        {posts.map((post) => (
          <div key={post.id} className='bg-slate-50 border shadow-sm w-[70%] m-5 p-2 rounded  border-emerald-500'>
            <p className='font-mono'>{post.post}</p>
            <p>Sent at: {post.timestamp && new Date(post.timestamp.toDate()).toLocaleString()}</p>
          </div>
        ))}
      </section>
            </div>
        </div>
    </div>
    
    <Modal open={open} onClose={() => setOpen(false)}>

<form className="text-start w-[32vw] min-h-[45vh] bg-white" >
    <h1 className='font-bold'>Add your children to the picked list...</h1>
  <div className="mx-auto my-4  flex ">
    <section className='text-start'>
       <label>Child's Name</label><br/>
       <input placeholder='e.g John Doe' value={name} onChange={(e) => setName(e.target.value)} className='w-[130px] p-1 border outline-none m-3' /> 
    </section>
    <section className='text-start'>
       <label>Staff Incharge</label><br/>
       <input placeholder='e.g Madam Teacher'  value={staff} onChange={(e) => setStaff(e.target.value)} className='w-[130px] p-1 border outline-none m-3' /> 
    </section>
    
  </div>
  <div className='flex'>
  <section className='text-start'>
       <label>Child's Stream</label><br/>
       <input placeholder='e.g 1B' value={stream} onChange={(e) => setStream(e.target.value)} className='w-[130px] p-1 border outline-none m-3' />
    </section>
    <section className='text-start'>
       <label>Bus PlateNo</label><br/>
       <input placeholder='e.g KAZ 334Y' value={plateNo} onChange={(e) => setPlateNo(e.target.value)} className='w-[130px] p-1 border outline-none m-3' /> 
    </section>
  </div>
  <section className='text-start'>
       <label> Parent's Email</label><br/>
       <input placeholder='e.g johndoe@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} className='w-[70%] p-1 border outline-none m-3' /> 
    </section>
    <section className='text-start'>
       <label>Contact/Phone</label><br/>
       <input placeholder='e.g 0755446633' value={phone} onChange={(e) => setPhone(e.target.value)} className='w-[70%] p-1 border outline-none m-3' /> 
    </section>
  <div className="flex gap-4 mt-4">
    <button
      className='bg-red-500 hover:bg-red-600 font-bold text-white p-2 rounded-full w-[40%]'
      onClick={() => setOpen(false)}
    >
      Cancel
    </button>
    <button type='submit' className='bg-emerald-500  hover:bg-emerald-600 font-bold text-white p-2 rounded-full w-[40%]'onClick={handleAddStudent} >Add Student</button>
  </div>
</form>
</Modal>
    </>
  )
}

export default Commute
