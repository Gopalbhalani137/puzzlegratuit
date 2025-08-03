import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Blog1 from "../Components/Blogs/Blog1";
import Blog2 from "../Components/Blogs/Blog2";
import Blog3 from "../Components/Blogs/Blog3";
import Blog4 from "../Components/Blogs/Blog4";
import Blog5 from "../Components/Blogs/Blog5";
import Blog6 from "../Components/Blogs/Blog6";
import Blog7 from "../Components/Blogs/Blog7";
import Blog8 from "../Components/Blogs/Blog8";
import Blog10 from "../Components/Blogs/Blog10";
import Blog11 from "../Components/Blogs/Blog11";
import Blog12 from "../Components/Blogs/Blog12";
import Blog13 from "../Components/Blogs/Blog13";
import Blog14 from "../Components/Blogs/Blog14";
import Blog15 from "../Components/Blogs/Blog15";
import Blog16 from "../Components/Blogs/Blog16";

const BlogPage = () => {
  const { slug } = useParams();

  return (
    <>
      <Helmet>
        {/* <title>Blog {slug} | Puzzles en ligne</title> */}
        <meta
          name="description"
          content={`Découvrez notre blog ${slug} sur les puzzles en ligne.`}
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content={`Blog ${slug} | Puzzles en ligne`}
        />
        <meta
          property="og:description"
          content={`Apprenez-en plus sur notre blog ${slug}.`}
        />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      {(() => {
        switch (slug) {
          case "1":
            return <Blog1 />;
          case "2":
            return <Blog2 />;
          case "3":
            return <Blog3 />;
          case "4":
            return <Blog4 />;
          case "5":
            return <Blog5 />;
          case "6":
            return <Blog6 />;
          case "7":
            return <Blog7 />;
          case "8":
            return <Blog8 />;
          case "10":
            return <Blog10 />;
          case "11":
            return <Blog11 />;
          case "12":
            return <Blog12 />;
          case "13":
            return <Blog13 />;
          case "14":
            return <Blog14 />;
          case "15":
            return <Blog15 />;
          case "16":
            return <Blog16 />;
          default:
            return <div>Blog not found</div>;
        }
      })()}
    </>
  );
};

export default BlogPage;
