import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";

export const ReviewFormField = ({ title }: { title?: string }) => {

  const [star, setStar] = useState(-1);
  let rating = [];

  for (let i = 0; i < 5; i++) {
    rating.push(
      <div onClick={() => star === 0 ? setStar(-1) : setStar(i)}>
        {star >= i ? (
          <FaStar />
        ) : (
          <FaRegStar />
        )}
      </div>
    );
  }

  return (
    <form className="grid gap-2 border-2 border-theme-1 p-8">
      <div>
        <div className="text-1.5 font-medium">Be the first to review "{title}"</div>
        <div>Your email address will not be published. Required fields are marked *</div>
      </div>
      <div className="flex items-center gap-4">
        <div>Your rating * </div>
        <div className="flex gap-2 text-1.5 cursor-pointer">{rating}</div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <label>
          <div>Name *</div>
          <input type="text" className="input-box w-full" required />
        </label>
        <label>
          <div>Email *</div>
          <input type="email" className="input-box w-full" required />
        </label>
      </div>
      <label className="grid">
        <div>Your review *</div>
        <textarea className="input-box h-24 resize-none"></textarea>
      </label>
      <label className="flex gap-2 items-center">
        <input type="checkbox" />
        <div>Save my name, email, and website in this browser for the next time I comment.</div>
      </label>
      <div>
        <button className="bg-theme-3 text-white px-6 py-2 cursor-pointer">Submit</button>
      </div>
    </form>
  );
}

export const FeedBackFormField = () => {
  return (
    <form className="grid gap-4 w-2/3">
      <label>
        <div>Name</div>
        <input type="text" className="input-box w-full" />
      </label>
      <label>
        <div>Email</div>
        <input type="email" className="input-box w-full" />
      </label>
      <label>
        <div>Phone</div>
        <input type="number" className="input-box w-full" />
      </label>
      <label>
        <div>Message</div>
        <textarea className="input-box w-full h-24 resize-none"></textarea>
      </label>
      <div className="flex justify-center">
        <button className="bg-theme-3 text-white px-6 py-2 cursor-pointer rounded-full">Send Message</button>
      </div>
    </form>
  )
}