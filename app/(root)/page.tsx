import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Purna",
    lastName: "Sai",
    email: "saikiransai949@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type={"greeting"}
            title={"Welcome"}
            user={loggedIn?.firstName || "Guest"}
            subtext={
              "Access and manage your account and transactions efficiently."
            }
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={10243.54}
          />
        </header>
      </div>
      <RightSideBar user={loggedIn} transactions={[]} banks={[{},{}]} />
    </section>
  );
};

export default Home;
