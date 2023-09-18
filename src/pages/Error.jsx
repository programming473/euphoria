import { Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex  flex-col justify-center items-center my-[100px] "style={{ userSelect: 'none' }}>
      <div className="mb-[30px] relative h-[257px] w-[181px] ">
        <img src="https://i.ibb.co/n8ypHgH/Rectangle-747.png" alt="" />
      </div>
      <div className="absolute text-[198px] font-bold mb-[200px] tracking-wide " >
        <span className="text-[#2A2F2F] ">4</span>
        <span className="text-[#fff] ">0</span>
        <span
          className="text-[#2A2F2F] ml-[10px] "
          style={{
            display: "inline-block",
            transform: "rotate(28deg)",
            transformOrigin: "center",
          }}
        >
          4
        </span>
      </div>

      <div className="max-w-[459px] text-center mb-[40px]">
        <h1 className="text-[34px] text-[black]  font-semibold" >
          Oops! Page not found
        </h1>
        <h3 className="text-[15px] text-[#807D7E] font-light ">
          The page you are looking for might have been removed or temporarily
          unavailable.
        </h3>
      </div>

      <Link to='/'>
        <Button className="bg-[#8A33FD] p-[12px_48px] rounded-[8px]" style={{ textTransform: 'none' }}>Back to HomePage</Button>
      </Link>
    </div>
  );
};

export default Error;
