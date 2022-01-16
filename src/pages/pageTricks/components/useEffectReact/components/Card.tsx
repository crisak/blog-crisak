import { useEffect, useRef, useState } from "react";
import { Card as CardBt } from "react-bootstrap";
import { functionAsync } from "../../../../../common/services/functionAsync";

export const Card = () => {
  const [post, setPost] = useState<any>();
  const [loading, setLoading] = useState(false);
  const isMountRef = useRef(true);

  const getPost = async () => {
    setLoading(true);
    const { title, content } = await functionAsync(
      {
        title: "New feature JS",
        content: "This great",
      },
      5000
    );
    if (isMountRef.current) {
      setLoading(false);
    }

    setPost({ title, content });
  };

  useEffect(() => {
    getPost();
    return () => {
      isMountRef.current = false;
    };
  }, []);

  if (loading) {
    return <p>Loading data ...</p>;
  }

  return (
    <CardBt body>
      <h4>Post - {post?.title}</h4>
      <p>{post?.title}</p>
    </CardBt>
  );
};
