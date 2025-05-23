import React, { useState, useRef, useCallback, useEffect } from "react";
import axios from "axios";

const InfiniteScroll = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, sethasMore] = useState(true);

  const observer = useRef();

  const lastImageRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    const fetchImg = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://picsum.photos/v2/list?page=${page}&limit=10`
        );
        console.log(res.data);
        setImages((prev) => [...prev, ...res.data]);
        sethasMore(res.data.length > 0);
      } catch (err) {
        console.error("Error fetching images:", err);
      }
      setLoading(false);
    };

    fetchImg();
  }, [page]);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Infinite Scroll - Image Gallery</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "1rem",
        }}
      >
        {images.map((img, index) => {
          const key = `${img.id}-${index}`;
          if (index === images.length - 1) {
            return (
              <img
                key={key}
                ref={lastImageRef}
                src={img.download_url}
                alt={img.author}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            );
          } else {
            return (
              <img
                key={key}
                src={img.download_url}
                alt={img.author}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            );
          }
        })}
      </div>
      {loading && <p>Loading more images...</p>}
      {!hasMore && <p>No more images to load!</p>}
    </div>
  );
};

export default InfiniteScroll;
