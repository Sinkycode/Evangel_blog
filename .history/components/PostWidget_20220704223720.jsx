import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { getSimilarPosts, getRecentPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  // useEffect(() => {
  //   if (slug) {
  //     getSimilarPosts(categories, slug).then((result) => {
  //       setRelatedPosts(result);
  //     });
  //   } else {
  //     getRecentPosts().then((result) => {
  //       setRelatedPosts(result);
  //     });
  //   }
  // }, [slug]);

  return (
    <div className="bg-red-500">
      PostWidget
    </div>
  )
};

export default PostWidget;
