import React from "react";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <style>{`
          body {
            background-color: #1a1a1a;
            color: #b084d9;
            font-family: 'Arial', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }

          h1 {
            font-size: 2.5rem;
            text-align: center;
            padding: 20px;
            border: 2px solid #b084d9;
            border-radius: 10px;
            background-color: #2a2a2a;
          }
        `}</style>
      </Head>
      <h1>Kim, se você tá lendo isso, me manda um abacate 🥑</h1>
    </>
  );
}

export default Home;
