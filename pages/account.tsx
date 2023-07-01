import React from "react";
import Image from "next/image";
import Link from "next/link";

const Account = () => {
  return (
    <div className="account_container w-screen h-[95vh]">
      <div className="account_content w-[70%] h-[95vh] justifiy-between m-auto relative top-20 ">
        <h1 className="account_title mb-5">My Account</h1>
        <hr />
        <div className="profile_content flex space-x-5">
          <img src="https://rb.gy/g1pwyx" alt="cursor-pointer rounded" />
          <input type="text" placeholder="Declan Middleton" />
        </div>
        <hr className="relative mt-20" />
        <div>
          <h3 className="">SETTINGS</h3>
          <div className="links inline-flex space-x-5">
            <Link href={""}>Testing</Link>
            <Link href={""}>Testing</Link>
            <Link href={""}>Testing</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
