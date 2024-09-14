import React from "react";
import MaxWidthContainer from "../components/mmw";

const posts = [
  {
    id: 1,
    title: "A passion for putting patients first",
    date: "Monday 16, September 2024",
    author: "Admin",
    views: 230,
    comments: 15,
    image:
      "https://drwaljiandcolleagues.co.uk/wp-content/themes/westheath/assets/images/background2.jpg.webp",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum magna in turpis vehicula, ac ultricies ligula cursus.",
  },
  {
    id: 2,
    title: "A passion for putting patients first",
    date: "Monday 16, September 2024",
    author: "Admin",
    views: 200,
    comments: 10,
    image:
      "https://news.cuanschutz.edu/hubfs/10.12.2023_SciWri_CAPE_BANNER.jpg",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum magna in turpis vehicula, ac ultricies ligula cursus.",
  },
  {
    id: 3,
    title: "A passion for putting patients first",
    date: "Monday 16, September 2024",
    author: "Admin",
    views: 180,
    comments: 8,
    image:
      "https://lytemedical.com/wp-content/uploads/2024/02/Patient-talking-with-doctor-1024x359.png",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum magna in turpis vehicula, ac ultricies ligula cursus.",
  },
];

const recentPosts = [
  {
    id: 1,
    title: "A passion for putting patients first",
    date: "Monday 16, September 2024",
  },
  {
    id: 2,
    title: "Healthcare for everyone",
    date: "Monday 16, September 2024",
  },
  {
    id: 3,
    title: "Innovations in Surgery",
    date: "Monday 16, September 2024",
  },
  // Add more recent posts as needed
];

const categories = ["Surgery", "Healthcare", "Medical", "Professional"];

const News = () => {
  return (
    <section className="bg-gray-50 py-8 md:py-12">
      <MaxWidthContainer>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Main Blog Section */}
            <div className="md:col-span-2">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white mb-6 shadow-lg rounded-lg overflow-hidden"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                    <p className="text-gray-600 mb-4 text-sm">
                      {post.date} | {post.author}
                    </p>
                    <p className="text-gray-700 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between text-sm text-gray-500 mb-4">
                      <span>{post.views} views</span>
                      <span>{post.comments} comments</span>
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                      Read More
                    </button>
                  </div>
                </div>
              ))}

              {/* Pagination */}
              <div className="flex justify-between items-center mt-8">
                <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded">
                  Previous
                </button>
                <div className="hidden md:flex items-center space-x-2">
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded">
                    1
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded">
                    2
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded">
                    3
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded">
                    4
                  </span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded">
                    5
                  </span>
                </div>
                <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded">
                  Next
                </button>
              </div>
            </div>

            {/* Sidebar Section */}
            <div className="lg:col-span-1">
              {/* Recent Posts */}
              <div className="bg-white p-6 shadow-lg mb-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
                <ul className="space-y-4">
                  {recentPosts.map((post) => (
                    <li key={post.id} className="text-blue-500 hover:underline">
                      <a href="#">{post.title}</a>
                      <p className="text-sm text-gray-600">{post.date}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Categories */}
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <ul className="space-y-4">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a href="#" className="text-gray-700 hover:text-blue-500">
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
};

export default News;
