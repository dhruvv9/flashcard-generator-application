/*in this file we are using the values from of flashcard and making the single flashcard theme
 that will be going to visible in MyFlashCard */
 import React from "react";
 import { useNavigate } from "react-router-dom";
 import DemoImg from "../../assets/gray.jpg";
 
 const MySingleFlashCard = ({ flashcard }) => {
   const navigate = useNavigate();
 
   return (
     <div
       key={flashcard.groupid} //here we are accessing the group id
       className="p-4 m-6 mx-auto flex flex-col space-y-3 items-center justify-center bg-white rounded-md text-black w-[23rem] h-[13rem] relative border-2 border-slate-200"
     >
       <div className="absolute -top-9">
         {/*here we r using ternary operator to check the group image given by the creator if the image is present
         we will use that image as group image else it will take default image */}
         {flashcard.groupimg ? (
           <img
             className="rounded-full w-16 h-16 object-cover aspect-square"
             src={flashcard.groupimg} //here we are accessing the group image
             alt={flashcard.groupname}// here we r giving the group name as and alt to image tag
           />
         ) : (
           <img
             className="rounded-full w-16 h-16 object-cover aspect-square"
             src={DemoImg}
             alt={flashcard.groupname} // here we r giving the group name as and alt to image tag
           />
         )}
       </div>
       <h2 className="font-bold text-lg">{flashcard.groupname}</h2>
       <p className="text-center font-medium text-sm text-slate-600 line-clamp-2">
         {flashcard.groupdescription}
       </p>
       <p className="font-medium text-sm text-slate-700">
         {/*if the flashcard is present then it will write length of flashcard else it will write 
         zero  */}
         {flashcard.cards ? flashcard.cards.length : 0} Cards
       </p>
       <button
         onClick={() => navigate(`/flashcarddetails/${flashcard.groupid}`)}  
         className="py-1 px-16 text-red-600 font-bold rounded-sm border-red-600 ring-2 ring-red-600"
       >
         View Cards
       </button>
     </div>
   );
 };
 
 export default MySingleFlashCard;
 