import React, { useState } from "react";
import "./BlogComponent.css";
import { Blogs } from "../../utils/utilities";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";

const BlogComponent = () => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="blog-container">
      {/*-------- Blog Headline -----------*/}
      <div className="blog-headline">
        <h2>Shopping means de-compras</h2>
        <p>
          Fusce erat dui, venenatis et erat in, vulputate dignissim lacus. Donec
          vitae tempus dolor, sit amet elementum lorem. Ut cursus tempor turpis.
        </p>
        <button>Read More</button>
      </div>

      {/*--------- Top Products div -----------*/}

      <div className="top-products">
        <div>
          <h3>The best T-Shirt's is out now!</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida....
          </p>
          <button>Read More</button>
        </div>
        <div>
          <h3>Top 5 best jackets in november</h3>
          <p>
            Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
            labore suspendisse ultrices gravida....
          </p>
          <button>Read More</button>
        </div>
        <div>
          <h3> Get this Shirt at a promo price </h3>
          <p>
            Sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
            ultrices gravida ncididunt ut labore ....
          </p>
          <button>Read More</button>
        </div>
      </div>

      {/*------------ Blog Post Conttainer ----------------*/}
      <div className="bolg-posts">
        <h3 className="blog-posts-heading">Tranding</h3>
        <div className="posts">
          {Blogs.length &&
            Blogs.map((post) => (
              <div className="post-card" key={post.id} id={post.id}>
                <img src={post.image} alt="post-image" className="post-image" />

                <div className="post-heading-and-date">
                  <div className="post-heading">
                    <h1>{post.postHeading} </h1>
                  </div>
                  <div className="post-date">
                    <span> {dateFormat(post.createdAt, "d mmm")}</span>
                  </div>
                </div>

                <p className="post-description">
                  {readMore
                    ? post.postDescription
                    : post.postDescription.slice(0, 150)}
                  {readMore ? "" : "....."}{" "}
                  <Link onClick={() => setReadMore((prev) => !prev)} to={``}>
                    {readMore ? "Read Less" : "Read More"}
                  </Link>{" "}
                </p>
              </div>
            ))}
        </div>

        {/*  aside container */}
        <aside className="aside">
          <div className="recent-post-list-div">
            <h3>Recent Post</h3>
            <ul className="post-list">
              {Blogs.length &&
                Blogs.map((post) => (
                  <li key={post.id}>
                    {" "}
                    &gt; &nbsp;{" "}
                    <a href={`#${post.id}`}>
                      {" "}
                      {post.postHeading.slice(0, 20)}...
                    </a>
                  </li>
                ))}
            </ul>
          </div>
          <div className="categories-div">
            <h3>Categories</h3>
            <ul className="category-list">
              <li>
                {" "}
                &gt; &nbsp; <a href="">Fashion</a>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      {/*----------------  Description Div  -----------------------------*/}

      <div className="description-container">
        <div className="description-image-div">
          <img src="https://cdn.pixabay.com/photo/2019/03/01/02/48/store-4027251_640.jpg" alt="" />
        </div>
        <div className="description-div">
          <h3>The Cloths you've been waiting for is out now</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliquamet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Vestibulum posuere porttitor justo id pellentesque. Proin id lacus
            feugiat, posuere erat sit amet, commodo ipsum. Donec pellentesque
            vestibulum metus... <button>Read More</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
