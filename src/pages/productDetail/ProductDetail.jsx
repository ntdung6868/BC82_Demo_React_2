import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  // console.log("🚀 ~ ProductDetail ~ params:", params);

  const inputRef = useRef(null);
  const timerRef = useRef(null);

  const [timer, setTimer] = useState(100);
  /**
   * useRef: Trả về một đối tượng có thuộc tính current
   * current là môt thuộc tính có thể thay đổi được
   * current có thế la một giá trị bất kỳ
   * current có thể là một DOM element
   * Chú ý: useRef không phải là một state, không làm cho component rerender khi giá trị current thay đổi
   */

  useEffect(() => {
    // Gọi api lấy thông tin sản phẩm theo id

    if (id) {
      console.log("Lay thong tin san pham co id:", id);
    }
  }, [id]);

  useEffect(() => {
    inputRef.current.focus();
  });

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimer((prev) => {
        return prev - 1;
      });
    }, 1000);
    return () => {
      clearInterval(timerRef.current);
    };
  }, [timer]);
  return (
    <div>
      Lay thong tin product co id {id} tu url
      <input ref={inputRef} type="text" placeholder="nhap usename" className="p-3 rounded border-2" />
      <p>{timer}</p>
      <button
        onClick={() => {
          clearInterval(timerRef.current);
        }}
      >
        Dung timer
      </button>
    </div>
  );
};

export default ProductDetail;
